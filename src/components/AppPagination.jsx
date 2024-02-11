import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';


export default function AppPagination({ count }) {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = Number.parseInt(query.get('page') ?? '1', 10);

    return (
        <Pagination
            color='primary'
            page={page}
            count={count}
            renderItem={(item) => (
                <Item item={item} location={location} />
            )}
        />
    );
}

function Item({ item, location }) {
    const query = new URLSearchParams(location.search);
    // const page = Number.parseInt(query.get('page') ?? '1', 10);
    const q = query.get('q');

    let to;
    if (query.has('q')) {
        to = item.page === 1 ? `/${`?q=${q}`}` : `/${`?q=${q}&page=${item.page}`}`
    } else {
        to = `/${item.page === 1 ? '' : `?page=${item.page}`}`
    }

    // console.log(location);
    return (
        <PaginationItem
            component={Link}
            to={to}
            {...item}
        />
    )
}