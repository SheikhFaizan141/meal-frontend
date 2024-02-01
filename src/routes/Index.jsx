import { Divider, Stack, TextField, Chip, Fade } from '@mui/material';
import MealCard from '../components/MealCard'
import { useLoaderData } from "react-router-dom"
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

async function getMeals() {
    try {
        const res = await fetch("/meals.json");

        if (!res.ok) {
            throw new Error(`${res.status} ${res.statusText}`);
        }

        const data = await res.json();

        return data?.meals ?? [];

    } catch (error) {
        console.error(error)
    }
}

export async function loader() {
    const meals = await getMeals();

    return { meals }
}

export default function Index() {
    const { meals } = useLoaderData();
    const [search, setSearch] = useState('');
    const [tag, setTag] = useState('');
    
    let filterMeals = meals.filter(meal => {
        return meal.name.toLowerCase().includes(search.toLowerCase());
    })

    function filterTag(tag) {
        const list = [];

        switch (tag) {
            case 'cost':
                
                break;
            case 'rating':
                
                break;
        
            default:
                break;
        }
    }

    return (
        <div className="meal-container">

            <div className="filter-ui-container mb-1">
                <div className='filter-ui-wrapper mb-1' >
                    <div className="m-f-box filter-search-wrapper">
                        <Box>
                            <TextField onChange={(e) => setSearch(e.target.value)} value={search} sx={{ borderRadius: 1 }} id="outlined-basic" label="Search" variant="outlined" />
                        </Box>
                    </div>
                    <Box className="m-f-box filter-chip-list-wrapper">
                        <Stack fontSize={'1.15rem'} direction="row" spacing={1}>
                            {/* <Chip  clickable label="primary" color="success" variant={'filled'} /> */}
                            <Chip onClick={e => setTag('rating')} clickable label="Rating" color="primary" variant="filled" />
                            <Chip onClick={e => setTag('cost')} clickable label="Cost" color="primary" variant="filled" />
                            <Chip clickable label="primary" color="primary" variant="filled" />
                        </Stack>
                    </Box>
                </div>
            </div>

            <Divider light sx={{ marginBlockEnd: '1rem' }} />

            <Box className="meal-wrapper m-grid">
                {
                    filterMeals.map(meal => {
                        return (
                            <div key={meal.id} className="card meal-card">
                                <MealCard  rating={meal?.rating} id={meal.id} name={meal.name} desc={meal.description} url={meal.img} />
                            </div>
                        )
                    })
                }
            </Box>
        </div>
    )
}
