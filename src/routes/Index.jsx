import { Divider, Stack, TextField, Chip, Fade } from '@mui/material';
import MealCard from '../components/MealCard'
import { useLoaderData } from "react-router-dom"
import Box from '@mui/material/Box';
import { useState } from 'react';

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

export default function Index(props) {

    const { meals } = useLoaderData();
    const [search, setSearch] = useState('');


    const filterMeals = meals.filter(meal => {
        return meal.name.toLowerCase().includes(search.toLowerCase());
    })


    console.log(meals);
    return (
        <div className="meal-container">

            <div className="filter-ui-container mb-1">
                <div className='filter-ui-wrapper mb-1' >
                    <div className="m-f-box filter-search-wrapper">
                        <Box>
                            <TextField onChange={(e) => setSearch(e.target.value)} value={search} sx={{ borderRadius: 1 }} id="outlined-basic" label="Search" variant="outlined" />
                        </Box>
                    </div>
                    <div className="m-f-box filter-chip-list-wrapper">
                        <Stack direction="row" spacing={1}>
                            <Chip clickable label="primary" color="success" variant="outlined" />
                            <Chip clickable label="Rating" color="primary" variant="outlined" />
                            <Chip clickable label="Cost" color="primary" variant="outlined" />
                            <Chip clickable label="primary" color="primary" variant="outlined" />
                        </Stack>
                    </div>
                </div>
            </div>

            <Divider light sx={{ marginBlockEnd: '1rem' }} />

            <div className="meal-wrapper m-grid">
                {
                    filterMeals.map(meal => {
                        return (
                            <div key={meal.id} className="card meal-card">
                                <MealCard id={meal.id} name={meal.name} desc={meal.description} url={meal.img} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
