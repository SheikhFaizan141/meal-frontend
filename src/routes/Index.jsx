import { Divider, Stack, TextField, Chip } from '@mui/material';
import MealCard from '../components/MealCard'
import { Link, useLoaderData } from "react-router-dom"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

    // console.log(meals);
    return { meals }
}

export default function Index(props) {

    console.log(props);
    const { meals } = useLoaderData();

    return (
        <div className="container meal-container">

            <div className="filter-ui-container mb-1">
                <div className='filter-ui-wrapper mb-1' >
                    <div className="m-f-box filter-search-wrapper">
                        <TextField sx={{ borderRadius: 1 }} id="outlined-basic" label="Outlined" variant="outlined" />
                    </div>
                    <div className="m-f-box filter-chip-list-wrapper">

                        <Stack direction="row" spacing={1}>
                            <Chip clickable label="primary" color="primary" variant="outlined" />
                            <Chip clickable label="success" color="success" variant="outlined" />
                            <Chip clickable label="primary" color="primary" variant="outlined" />
                            <Chip clickable label="primary" color="primary" variant="outlined" />
                        </Stack>
                    </div>
                </div>

                <div className="filter-select-ui">
                    <Box sx={{maxWidth: 160}}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">All Menus</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="All Menus"
                            // onChange={handleChange}
                            >
                                <MenuItem value="">Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </div>

            <Divider light sx={{ marginBlockEnd: '1rem' }} />

            <div className="meal-wrapper">
                {
                    meals.map(meal => {
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
