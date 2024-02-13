import { Divider, Stack, TextField, Chip, Typography, Button } from '@mui/material';
import MealCard from '@components/MealCard'
import { Form, Outlet, json, useLoaderData, useSubmit } from "react-router-dom"
import Box from '@mui/material/Box';
import { useEffect, useRef, useState } from 'react';
import AppPagination from '@components/AppPagination';

// import second from 'first'
function filterWithTag(tag, arr) {
    const newArr = [...arr];
    switch (tag) {
        case 'relevance': {
            return newArr;
        }
        case 'cost': {
            return newArr.sort((a, b) => a.price - b.price);
        }
        case 'rating': {
            return newArr.sort((a, b) => a.rating - b.rating)
        }
        default:
            console.error('Invalid Filter');
            break;
    }
}

export async function loader({ request }) {
    const url = new URL(request.url);
    const page = url.searchParams.get('page');
    const q = url.searchParams.get('q');


    // Create Fetch URL
    // const base = 'http://127.0.0.1:8000';
    let fetchUrl;
    // new URL(page ? `api/meal?page=${page}` : `api/meal`, __API_URL__);
    if (url.searchParams.has('q') && url.searchParams.has('page')) {
        fetchUrl = new URL(`api/meal?q=${q}&page=${page}`, __API_URL__);

    } else if (url.searchParams.has('q')) {
        fetchUrl = new URL(`api/meal?q=${q}`, __API_URL__);

    } else if (url.searchParams.has('page')) {
        fetchUrl = new URL(`api/meal?page=${page}`, __API_URL__);

    } else {
        fetchUrl = new URL(`api/meal`, __API_URL__);
    }

    const res = await fetch(fetchUrl);
    if (!res.ok) {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }



    const d = await res.json();
    return json({ data: d, q });;
}

export default function Index() {
    const { data, q } = useLoaderData();
    const { data: meals, last_page: lastPage } = data;
    const [tag, setTag] = useState('relevance');
    const searchRef = useRef();
    const submit = useSubmit();

    useEffect(() => {
        document.getElementById('q').value = q;
    }, [q])


    const filterMeals = filterWithTag(tag, meals);
    function handleSubmit(e) {
        e.preventDefault();
        const value = searchRef.current.value.replace(/\s\s+/g, ' ').trim();
        const searchParams = new URLSearchParams();


        if (value !== '') {
            searchParams.append("q", value);
        }

        submit(searchParams);
    }

    return (
        <div className="meal-container">

            <Hero />

            {/* <Outlet /> */}
            <Box className="filter-ui-container mb-1">
                <div className='filter-ui-wrapper mb-1' >
                    <div className="m-f-box filter-search-wrapper">
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <TextField inputRef={searchRef} name='q' defaultValue={q} sx={{ borderRadius: 1 }} id="q" label="Search" variant="outlined" />
                        </form>
                    </div>
                    <Box className="m-f-box filter-chip-list-wrapper">
                        <Stack fontSize={'1.15rem'} direction="row" spacing={1}>
                            <Chip clickable onClick={() => setTag('relevance')} label="Relevance" color={tag === 'relevance' ? "success" : "primary"} variant={'filled'} />
                            <Chip clickable onClick={() => setTag('rating')} label="Rating" color={tag === 'rating' ? "success" : "primary"} variant="filled" />
                            <Chip clickable onClick={() => setTag('cost')} label="cost" color={tag === 'cost' ? "success" : "primary"} variant="filled" />
                            <Chip clickable label="primary" color="primary" variant="filled" />
                        </Stack>
                    </Box>
                </div>
            </Box>

            <Divider light sx={{ marginBlockEnd: '1rem' }} />

            <Box>
                <Box className="meal-wrapper m-grid">
                    {
                        filterMeals.map(meal => {
                            return (
                                <div key={meal.id} className="card meal-card">
                                    <MealCard rating={meal?.rating} id={meal.id} name={meal.name} desc={meal.description} imgUrl={meal.url} isVeg={meal.isVeg} />
                                </div>
                            )
                        })
                    }
                </Box>
                <Stack paddingBlock={1} flexDirection={'row'} justifyContent={'center'}>
                    {/* <Pagination count={lastPage} onChange={handleChange} color="primary" /> */}
                    <AppPagination count={lastPage} />
                </Stack>
            </Box>
        </div>
    )
}

function Hero(params) {

    return (
        <Box component={'section'} paddingBlockEnd={3}>
            <Box padding={2} bgcolor={'lch(75% 82.34 80.104)'} borderRadius={2}>
                <Box>
                    <Typography fontWeight={700} style={{ WebkitTextStroke: '1px black' }} letterSpacing={'0.2rem'} sx={{ textShadow: '3px 3px #000' }} variant='h2' color={'rgb(166 0 10)'} marginBlockEnd={1} textTransform={'uppercase'} >Healthy</Typography>
                    <Typography variant={'subtitle1'} >Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                </Box>
                <Box>
                    {/* <img src="./" alt="" srcset="" /> */}
                </Box>
            </Box>
        </Box>
    )
}