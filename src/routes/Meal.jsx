import { Button, ButtonGroup } from "@mui/material";
import { useLoaderData } from "react-router-dom";

// import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { getMeal } from "../meals";
import { useEffect, useState } from "react";
// import Breadcrumbs from '@mui/material/Breadcrumbs';

export async function loader(request) {
    const meal = await getMeal(request.params.mealId);

    // console.log(meal);
    if (meal === undefined) {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }

    return { meal };
}



export default function Meal(props) {
    const props = context
    
    console.log(props);
    const { meal } = useLoaderData();
    const [item, setItem] = useState(null);
    const [count, setCount] = useState(0);


    useEffect(() => {
        if (count === 0) {
            setItem(null);
        }
    }, [count])

    function handleClick() {
        setItem( meal.name)
        setCount(1);
    }

    function handleIncrement() {
        setCount(count + 1)
    }

    function handleDecrement() {
        setCount(count - 1)
    }

    return (
        <>
            <div className="container">
                <div className="meal-wrapper meal-hero">

                    <div className="m-hero-wrapper">
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
                                        {
                                            count > 0
                                                ?
                                                <div className="btn-add-quantity">
                                                    <ButtonGroup
                                                        disableElevation
                                                        variant="contained"
                                                        aria-label="Disabled elevation buttons"
                                                    >
                                                        <Button size="small" onClick={handleIncrement}>+</Button>
                                                        <div>{count}</div>
                                                        <Button size="small" onClick={handleDecrement}>-</Button>
                                                    </ButtonGroup>
                                                </div>
                                                :
                                                <Button onClick={handleClick} variant="contained" size="small">Add</Button>
                                        }
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
                            <div className="m-cart-wrapper">
                                <div className="m-cart-item">
                                    {
                                        item
                                            ?
                                            <div>
                                                {item}
                                            </div>
                                            :
                                            <p>empty</p>
                                    }
                                </div>
                            </div>

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
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ee7700" fillOpacity="0.6" d="M0,128L9.2,122.7C18.5,117,37,107,55,112C73.8,117,92,139,111,128C129.2,117,148,75,166,74.7C184.6,75,203,117,222,149.3C240,181,258,203,277,218.7C295.4,235,314,245,332,245.3C350.8,245,369,235,388,229.3C406.2,224,425,224,443,213.3C461.5,203,480,181,498,144C516.9,107,535,53,554,48C572.3,43,591,85,609,117.3C627.7,149,646,171,665,154.7C683.1,139,702,85,720,85.3C738.5,85,757,139,775,186.7C793.8,235,812,277,831,298.7C849.2,320,868,320,886,288C904.6,256,923,192,942,144C960,96,978,64,997,58.7C1015.4,53,1034,75,1052,101.3C1070.8,128,1089,160,1108,176C1126.2,192,1145,192,1163,165.3C1181.5,139,1200,85,1218,74.7C1236.9,64,1255,96,1274,101.3C1292.3,107,1311,85,1329,74.7C1347.7,64,1366,64,1385,74.7C1403.1,85,1422,107,1431,117.3L1440,128L1440,0L1430.8,0C1421.5,0,1403,0,1385,0C1366.2,0,1348,0,1329,0C1310.8,0,1292,0,1274,0C1255.4,0,1237,0,1218,0C1200,0,1182,0,1163,0C1144.6,0,1126,0,1108,0C1089.2,0,1071,0,1052,0C1033.8,0,1015,0,997,0C978.5,0,960,0,942,0C923.1,0,905,0,886,0C867.7,0,849,0,831,0C812.3,0,794,0,775,0C756.9,0,738,0,720,0C701.5,0,683,0,665,0C646.2,0,628,0,609,0C590.8,0,572,0,554,0C535.4,0,517,0,498,0C480,0,462,0,443,0C424.6,0,406,0,388,0C369.2,0,351,0,332,0C313.8,0,295,0,277,0C258.5,0,240,0,222,0C203.1,0,185,0,166,0C147.7,0,129,0,111,0C92.3,0,74,0,55,0C36.9,0,18,0,9,0L0,0Z"></path></svg> */}
                </section>
            </div>
        </>
    )
}
