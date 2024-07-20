import { Divider, Stack, TextField, Chip } from '@mui/material';
import MealCard from '@components/MealCard'
import { Form, Outlet, json, useLoaderData, useNavigation, useSubmit } from "react-router-dom"
import Box from '@mui/material/Box';
import { useEffect, useRef, useState } from 'react';
import AppPagination from '@components/AppPagination';
import AppHero from '@components/AppHero';

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

    let fetchUrl;
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

    // state
    const navigation = useNavigation();
    // console.log(navigation);

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

    // if (navigation.state === "loading") {
    //     return (
    //         <div>
    //             Loading
    //         </div>
    //     )
    // }

    return (
        <div className="meal-container">
            {/* {
                 (navigation.state !== "loading") && <AppHero />
            } */}
            
            <AppHero />
       

            {/* <Outlet /> */}
            <Box className="filter-ui-container mb-1">
                <Stack direction={'row'} className='filter-ui-wrapper mb-1' >
                    <Box className="m-f-box filter-search-wrapper">
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <TextField inputRef={searchRef} name='q' defaultValue={q} sx={{ borderRadius: 1 }} id="q" label="Search" variant="outlined" />
                        </form>
                    </Box>

                    <Box className="m-f-box filter-chip-list-wrapper">
                        <Stack fontSize={'1.15rem'} direction="row" spacing={1}>
                            <Chip clickable onClick={() => setTag('relevance')} label="Relevance" color={tag === 'relevance' ? "success" : "primary"} variant={'filled'} />
                            <Chip clickable onClick={() => setTag('rating')} label="Rating" color={tag === 'rating' ? "success" : "primary"} variant="filled" />
                            <Chip clickable onClick={() => setTag('cost')} label="cost" color={tag === 'cost' ? "success" : "primary"} variant="filled" />
                            <Chip clickable label="primary" color="primary" variant="filled" />
                        </Stack>
                    </Box>
                </Stack>
            </Box>

            <Divider light sx={{ marginBlockEnd: '1rem' }} />

            Change made in main
            <Box>
                <Box className="meal-wrapper m-grid">
                    {
                        filterMeals.map(meal => {
                            return (
                                <Box key={meal.id} className="card meal-card">
                                    <MealCard state={navigation.state === 'idle'} createdAt={meal.created_at} rating={meal?.rating} id={meal.id} name={meal.name} desc={meal.description} imgUrl={meal.featured_img} isVeg={meal.isVeg} />
                                </Box>
                            )
                        })
                    }
                </Box>
                <Stack paddingBlock={1} flexDirection={'row'} justifyContent={'center'}>
                    <AppPagination count={lastPage} isLoading={navigation.state === 'loading'} />
                </Stack>
            </Box>
        </div>
    )
}