import { Divider, Stack, TextField, Chip, Fade } from '@mui/material';
import MealCard from '../components/MealCard'
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom"
import Box from '@mui/material/Box';
import { useMemo, useState } from 'react';
import { getMeals } from '../meals';
import Pagination from '@mui/material/Pagination';


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
    const { data: meals, total, last_page: lastPage } = await getMeals();

    return { meals, total, lastPage}
}

export default function Index() {
    const { meals, total, lastPage } = useLoaderData();
    const [search, setSearch] = useState('');
    const [tag, setTag] = useState('relevance');


    const filterMeals = filterWithTag(tag, meals)
        .filter(meal => {
            return meal.name.toLowerCase().includes(search.toLowerCase());
        })

    function handleChange(e, value) {
        console.log(value);
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
                            <Chip clickable onClick={() => setTag('relevance')} label="Relevance" color={tag === 'relevance' ? "success" : "primary"} variant={'filled'} />
                            <Chip clickable onClick={() => setTag('rating')} label="Rating" color={tag === 'rating' ? "success" : "primary"} variant="filled" />
                            <Chip clickable onClick={() => setTag('cost')} label="cost" color={tag === 'cost' ? "success" : "primary"} variant="filled" />
                            <Chip clickable label="primary" color="primary" variant="filled" />
                        </Stack>
                    </Box>
                </div>
            </div>

            <Divider light sx={{ marginBlockEnd: '1rem' }} />

            <Box>
                <Box className="meal-wrapper m-grid">
                    {
                        filterMeals.map(meal => {
                            return (
                                <div key={meal.id} className="card meal-card">
                                    <MealCard rating={meal?.rating} id={meal.id} name={meal.name} desc={meal.description} imgUrl={meal.url} />
                                </div>
                            )
                        })
                    }
                </Box>
                <Stack paddingBlock={1} flexDirection={'row'} justifyContent={'center'}>
                    <Pagination count={lastPage} onChange={handleChange} color="primary" />
                </Stack>
            </Box>
        </div>
    )
}

