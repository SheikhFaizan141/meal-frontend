import { Divider, Stack, TextField, Chip, Fade } from '@mui/material';
import MealCard from '../components/MealCard'
import { useLoaderData } from "react-router-dom"
import Box from '@mui/material/Box';
import { useState } from 'react';
import { getMeals } from '../meals';

function filterWithTag(tag, arr) {
    switch (tag) {
        case 'relevance': {
            return arr;
        }
        case 'cost': {
            return arr.sort((a, b) => a.price - b.price);
        }
        case 'rating': {
            return arr.sort((a, b) => a.rating - b.rating)
        }
        default:
            console.error('Invalid Filter');
            break;
    }
}

export async function loader() {
    const meals = await getMeals();

    return { meals }
}

export default function Index() {
    const { meals } = useLoaderData();
    const [search, setSearch] = useState('');
    const [tag, setTag] = useState('relevance');

    const filterMeals = filterWithTag(tag, meals)
        .filter(meal => {
            return meal.name.toLowerCase().includes(search.toLowerCase());
        })


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
                            <Chip clickable onClick={() => setTag('relevance')} label="Relevance" color={tag === 'relevance' ? "success" : "primary"} variant={'filled'} />
                            <Chip clickable onClick={() => setTag('rating')} label="Rating" color={tag === 'rating' ? "success" : "primary"} variant="filled" />
                            <Chip clickable onClick={() => setTag('cost')} label="cost" color={tag === 'cost' ? "success" : "primary"} variant="filled" />
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


function ChipFilter(params) {

}