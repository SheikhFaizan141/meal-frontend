import { Divider, Stack, TextField, Chip, Typography } from '@mui/material';
import MealCard from '@components/MealCard'
import { useLoaderData } from "react-router-dom"
import Box from '@mui/material/Box';
import { useState } from 'react';
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
// console.log(import.meta);
export async function loader({ request }) {
    const url = new URL(request.url);
    const page = url.searchParams.get('page');

 
    // Create Fetch URL
    // const base = 'http://127.0.0.1:8000';
    const fetchUrl = new URL(page ? `api/meal?page=${page}` : `api/meal`, __API_URL__);

    const res = await fetch(fetchUrl);
    if (!res.ok) {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }

    return res;
}

export default function Index() {
    const { data: meals, total, last_page: lastPage } = useLoaderData();
    const [search, setSearch] = useState('');
    const [tag, setTag] = useState('relevance');


    const filterMeals = filterWithTag(tag, meals)
        .filter(meal => {
            return meal.name.toLowerCase().includes(search.toLowerCase());
        })

    return (
        <div className="meal-container">

            <Hero />

            <Box className="filter-ui-container mb-1">
                <div className='filter-ui-wrapper mb-1' >
                    <div className="m-f-box filter-search-wrapper">
                        <Box>
                            <TextField onChange={(e) => setSearch(e.target.value)} value={search} sx={{ borderRadius: 1 }} id="outlined-basic" label="Search" variant="outlined" />
                        </Box>
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