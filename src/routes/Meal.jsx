import { Button, ButtonGroup, Divider, Stack } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { getMeal } from "../meals";
import { useEffect, useState } from "react";
import { formatCurrency } from "../utils/formatCurrency";
import emptyBasket from '../assets/empty-basket.png'

// list
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// card
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export async function loader(request) {
    const meal = await getMeal(request.params.mealId);

    if (meal === undefined) {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }

    return { meal };
}



function setItemLs(key, value) {
    // check if id is same if id is same than add otherwise clear cart

    if (!localStorage.getItem(key)) {


        return localStorage.setItem(key, JSON.stringify(value))
    }


    const cart = JSON.parse(localStorage.getItem('cart'));

    if (cart.id !== value.id) {
        // overwrite data
        localStorage.clear('clear')

        return false;
    }

    return localStorage.setItem(key, JSON.stringify(value))
}

function getItem(key) {
    if (!localStorage.getItem('cart')) {
        return null;
    }

    const item = JSON.parse(localStorage.getItem('cart'));

    console.log(item);
    return item[key] ?? null;
}


export default function Meal() {
    const { meal } = useLoaderData();
    const [item, setItem] = useState(() => getItem('name'));
    const [count, setCount] = useState(() => getItem('count'));
    const [total, setTotal] = useState(() => getItem('total'));

    useEffect(() => {
        if (count === 0) {
            setItem(null);
            setTotal(null);

            // clear local storage cart is empty
            localStorage.clear('cart')
        }


    }, [count])

    function handleClick() {
        setItem(meal.name);
        setTotal(meal.price)
        setCount(1);



        let value = setItemLs('cart', { id: meal.id, name: meal.name, count: 1, total: meal.price })



    }

    function handleIncrement() {
        setCount(count + 1);
        setTotal(total + meal.price);


        const isRepeat = setItemLs('cart', { id: meal.id, name: meal.name, count: count + 1, total: total + meal.price })
        if (isRepeat === false) {
            let clearCart = window.confirm('cart will be replaced by new meal')
            if (clearCart) {
                setItem(meal.name);
                setTotal(meal.price)
                setCount(1);
            }

        }

    }

    function handleDecrement() {
        setCount(count - 1);
        setTotal(total - meal.price);


        const isRepeat = setItemLs('cart', { id: meal.id, name: meal.name, count: count - 1, total: total - meal.price })
        if (isRepeat === false) {
            let clearCart = window.confirm('cart will be replaced by new meal')
            if (clearCart) {
                setItem(meal.name);
                setTotal(meal.price)
                setCount(1);
            }

        }
    }




    return (
        <>
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
                                    <span className="meal-price text-lg font-bold">{meal.price}<span className="meal-price-currency">$</span></span>
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
                                    <AddButton count={count} handleClick={handleClick} handleDecrement={handleDecrement} handleIncrement={handleIncrement} />
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

                        <MealCart
                            handleClick={handleClick}
                            handleDecrement={handleDecrement}
                            handleIncrement={handleIncrement}
                            item={item}
                            count={count}
                            total={total}
                            price={meal?.price}
                        />


                        <h3 className="text-4xl mb-1">Ingredients of Shahi Egg Curry</h3>
                        {/* <Typography variant="h3" component= ></Typography> */}
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

        </>
    )
}


function MealCart({ item, price, count, total, handleClick, handleDecrement, handleIncrement }) {

    return (
        <>
            <div className="m-cart-wrapper">
                {
                    item
                        ?
                        <div className="m-cart-box">
                            <div className="m-cart-top">
                                <Typography variant="h4" component="h3" >Cart</Typography>
                                <Typography variant="p" component="p">{count} {count > 1 ? "items" : "item"}</Typography>
                            </div>
                            <Divider light />
                            <div className="m-cart-mid">
                                <Typography variant=" body1" component="p" >Bill Details</Typography>
                                <List>
                                    <ListItem disablePadding>


                                        <ListItemText
                                            primary={item}
                                            secondary={price ? formatCurrency(price * count) : null}
                                        />


                                        <AddButton size="sm" count={count} handleClick={handleClick} handleDecrement={handleDecrement} handleIncrement={handleIncrement} />
                                    </ListItem>
                                </List>
                            </div>
                            <div className="m-cart-btm mb-1">
                                <Stack direction="row" justifyContent="space-between">
                                    <h4 className="text-lg">Total Amount</h4>
                                    <p>{formatCurrency(total)} </p>
                                </Stack>
                            </div>
                            <div className="m-cart-footer">
                                {/* <Link className="btn" to={"/checkout"}> */}
                                <Button variant="contained" component={Link} to="/checkout">
                                    Checkout
                                </Button>
                                {/* <Link */}
                                {/* // <Button size="medium" variant="contained" >Checkout</Button> */}
                            </div>
                        </div>
                        :
                        <div className="m-cart-box m-cart-empty">
                            <Card sx={{ boxShadow: 'none' }}>
                                <CardContent>
                                    <figure className="mb-1">
                                        <img width="200" src={emptyBasket} alt="empty cart" />
                                    </figure>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        Good food is always cooking! Go ahead, order some yummy items from the menu.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                }
            </div>
        </>
    )
}

function AddButton({ size, count, handleClick, handleDecrement, handleIncrement }) {
    return (
        <>
            {
                count > 0
                    ?
                    <div className="btn-add-quantity">
                        {/* <Stack spacing={2}    > */}

                        <ButtonGroup
                            disableElevation
                            variant="contained"
                            aria-label="Disabled elevation buttons"
                            size="small"
                            sx={{ alignItems: "center" }}
                            className="m"
                        >
                            <Button onClick={handleDecrement}>-</Button>
                            <div className="add-count-ui">{count}</div>
                            <Button onClick={handleIncrement}>+</Button>
                        </ButtonGroup>
                        {/* </Stack> */}
                    </div>
                    :
                    <Button onClick={handleClick} variant="contained" size="small">Add</Button>
            }
        </>
    )
}