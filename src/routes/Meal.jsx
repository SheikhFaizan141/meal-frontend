import { Button } from "@mui/material";
import { useLoaderData } from "react-router-dom";

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

async function getMeal(id) {
    try {
        const res = await fetch("/meals.json");

        if (!res.ok) {
            throw new Error(`${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        return data["meals"].find(item => item.id === Number.parseInt(id, 10));
    } catch (error) {
        console.error(error)
    }
}

export async function loader(request) {
    const meal = await getMeal(request.params.mealId);
    console.log(meal);
    console.log(request);
    return { meal };
}

export default function Meal() {
    const { meal } = useLoaderData();
    return (
        <>
            <div className="container">
                <div className="meal-wrapper meal-hero">
                    <div>
                        <div className="img-container">
                            <img src="https://placehold.co/240" alt="" height="240" width="240" className="img" />
                        </div>

                        <div className="meal-info-wrapper meal-hero">
                            <div className="hero-heading-wrapper mb-1">
                                <hgroup className="meal-hgroup mb-1">
                                    <h2 className="meal-name">{meal.name}</h2>
                                    <p className="meal-cuisine text-xl"><span>Cuisine: </span>Indian</p>
                                </hgroup>

                                <div className="m-rating-wrapper">
                                    <Typography component="legend">Rating</Typography>
                                    <Rating name="read-only" value={4} readOnly />
                                </div>
                            </div>

                            <div className="meal-dis meal-info">
                                <div className="meal-info-con">

                                    <div className="meal-price-ui">
                                        <label className="m-price-label text-base">Price</label>
                                        <span className="meal-price text-lg font-bold">200 <span className="meal-price-currency">$</span></span>
                                    </div>

                                    <div className="rec-inf-wrapper m-prep-info">
                                        <ul className="ul meal-prep-wrapper" >
                                            <li className="m-prep-box">
                                                <span className="text-xl rc-icon">🍳</span>
                                                <span className="text-base font-bold ">Total Cook Time</span>
                                                <span className="text-sm ">1 hr 20 mins</span>
                                            </li>
                                            <li className="m-prep-box">
                                                <span className="text-xl rc-icon">🍳</span>
                                                <span className="text-base font-bold ">Total Cook Time</span>
                                                <span className="text-sm ">1 hr 20 mins</span>
                                            </li>
                                            <li className="m-prep-box">
                                                <span className="text-xl rc-icon">🍳</span>
                                                <span className="text-base font-bold ">Total Cook Time</span>
                                                <span className="text-sm ">1 hr 20 mins</span>
                                            </li>
                                            <li className="m-prep-box">
                                                <span className="text-xl rc-icon">🍳</span>
                                                <span className="text-base font-bold ">Total Cook Time</span>
                                                <span className="text-sm ">1 hr 20 mins</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="btn-wrapper">
                                        <Button variant="contained" size="small">Add</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section">
                    <div className="section-wrapper">


                        <article className="m-des-container bx bx-1">
                            <h3 className="text-4xl mb-1">About Punjabi Lemon Chicken Recipe</h3>
                            <p className="text-base"> A melt in your mouth chicken recipe with a tangy twist. Punjabi lemon chicken made with citrus juices, sugarcane juice and some basic Indian spices. Try this tangy yet delicious version of chicken at your next dinner party and you wouldn't be able to resist coming back to this chicken recipe!</p>
                            {/* <p className="text-base"></p> */}
                        </article>


                        <aside className="m-ing-container ingredient-conatainer bx bx-2">
                            <h3 className="text-4xl">Ingredients of Shahi Egg Curry</h3>
                            <ul>
                                <li className="li li-circle">6 Chicken thighs (without skin)</li>
                                <li className="li li-circle" >For the base:</li>
                                <li className="li li-circle" >3-4 tbsp refined oil</li>
                                <li className="li li-circle" >2 tsp cumin seeds</li>
                                <li className="li li-circle" >2 onions, julienne</li>
                                <li className="li li-circle" >6 garlic cloves, chopped</li>
                                <li className="li li-circle" >1/2 inch ginger, chopped</li>
                                <li className="li li-circle" >3-4 Green chillies</li>
                                <li className="li li-circle" >1/2 inch ginger, chopped</li>
                                <li className="li li-circle" >6 Chicken thighs (without skin)</li>
                                <li className="li li-circle" >For the base:</li>
                                <li className="li li-circle" >3-4 tbsp refined oil</li>
                                <li className="li li-circle" >2 tsp cumin seeds</li>
                                <li className="li li-circle" >2 onions, julienne</li>
                                <li className="li li-circle" >6 garlic cloves, chopped</li>
                                <li className="li li-circle" >1/2 inch ginger, chopped</li>
                                <li className="li li-circle" >3-4 Green chillies</li>
                                <li className="li li-circle" >1/2 inch ginger, chopped</li>
                            </ul>
                        </aside>

                    </div>
                </section>
            </div>
        </>
    )
}
