import React from 'react'
import { Link, MemoryRouter, Route, Routes, useLoaderData, useLocation, useRoutes } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';


export default function AppPagination({ count, }) {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10);
    return (
        <Pagination
            color='primary'
            page={page}
            count={count}
            renderItem={(item) => (
                <PaginationItem
                    component={Link}
                    to={`/${item.page === 1 ? '' : `?page=${item.page}`}`}
                    {...item}
                />
            )}
        />
    );
}

