import { Box, Button, ButtonGroup, Divider, Stack } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { getMeal } from "../meals";
import { useEffect, useState } from "react";
import { formatCurrency } from "../utils/formatCurrency";
import emptyBasket from '../assets/empty-basket.png'
import MealTable from '../components/MealTable'

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

                {/* Hero Section */}
                <div className="m-hero-wrapper">

                    <div className="m-hero-box m-hero-box-1 img-container">
                        <img src="/public/img/mark-deyoung-mjcJ0FFgdWI-unsplash.jpg" alt="" className="img" />
                    </div>

                    <div className="m-hero-box m-hero-box-2  meal-info-wrapper meal-hero">

                        <div className="hero-heading-wrapper hero-box2-t  mb-1">
                            <hgroup className="meal-hgroup mb-1">
                                <Typography component="h1" variant="h2">{meal.name}</Typography>
                                {/* <Typography component="p" variant="body1">Cuisine: Indian</Typography> */}
                                {/* <h2 className="meal-name">{meal.name}</h2> */}
                                <p className="meal-cuisine text-xl"><span>Cuisine: </span>Indian</p>
                            </hgroup>

                            <div className="m-rating-wrapper">
                                <Typography component="legend">Rating</Typography>
                                <Rating name="read-only" value={4} readOnly />
                            </div>
                        </div>

                        <div className="meal-dis meal-info hero-box2-b">
                            <div className="m-info-wrapper">
                                <Stack direction="row">
                                    <ul className="m-info-ul" >
                                        <li className="m-info-li">
                                            <span className="text-xl rc-icon">🔪</span>
                                            <span className="text-base font-bold ">Prep Time</span>
                                            <span className="text-sm ">1 hr 20 mins</span>
                                        </li>
                                        <li className="m-info-li">
                                            <span className="text-xl rc-icon">🍳</span>
                                            <span className="text-base font-bold ">Total Cook Time</span>
                                            <span className="text-sm ">1 hr 20 mins</span>
                                        </li>
                                        <li className="m-info-li">
                                            <span className="text-xl rc-icon">🍳</span>
                                            <span className="text-base font-bold ">Total Cook Time</span>
                                            <span className="text-sm ">1 hr 20 mins</span>
                                        </li>
                                        <li className="m-info-li">
                                            <span className="text-xl rc-icon">🍳</span>
                                            <span className="text-base font-bold ">Total Cook Time</span>
                                            <span className="text-sm ">1 hr 20 mins</span>
                                        </li>
                                    </ul>
                                </Stack>

                                <div className="meal-price-ui">
                                    <div>
                                        <Typography className="meal-price text-lg font-bold">{formatCurrency(meal.price)}</Typography>
                                    </div>
                                    <div className="btn-wrapper">
                                        <AddButton count={count} handleClick={handleClick} handleDecrement={handleDecrement} handleIncrement={handleIncrement} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Divider light />
            <main className="m-main">
                <div className="m-main-wrapper">

                    <article className="m-article ">
                        <section className="m-section m-section-1">
                            {/* <Box> */}
                            <Typography component="h2" variant="h3" marginBlockEnd="0.75rem" >About {meal.name}</Typography>
                            {/* </Box> */}
                            {/* <h3 className="text-4xl  mb-1">About: {meal.name}</h3> */}
                            <Typography component="p" variant="body1" marginBlockEnd="0.75rem" >{meal.description}</Typography>
                            {/* <p className="text-base">{meal.description} , cupiditate nam blanditiis. Consequatur rerum sint, quae sed sit laboriosam alias nam aut harum.</p> */}
                        </section>

                        <section className="m-section m-section-2">
                            <Typography component="h4" variant="h4" marginBlockEnd="0.75rem" >Ingridents</Typography>


                        </section>



                    </article>

                    <aside className="m-aside m-cart-aside">

                        <MealCart
                            handleClick={handleClick}
                            handleDecrement={handleDecrement}
                            handleIncrement={handleIncrement}
                            item={item}
                            count={count}
                            total={total}
                            price={meal?.price}
                        />
                    </aside>
                </div>
            </main>

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
                            <Divider light sx={{ marginBlock: 1 }} />
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
                                <Stack direction="row" alignItems="center" justifyContent="space-between">
                                    <Typography variant="h6" component="h6">Total Amount</Typography>
                                    {/* <h4 className="text-lg">Total Amount</h4> */}
                                    <Typography variant="body1" component="p">{formatCurrency(total)}</Typography>
                                    {/* <p>{formatCurrency(total)} </p> */}
                                </Stack>
                            </div>
                            <div className="m-cart-footer">
                                <Button sx={{ width: '100%', paddingBlock: '0.5rem' }} variant="contained" component={Link} to="/checkout">
                                    Checkout
                                </Button>
                                {/* // <Button size="medium" variant="contained" >Checkout</Button> */}
                            </div>
                        </div>
                        :
                        <div className="m-cart-box m-cart-empty">
                            <Card sx={{ boxShadow: 'none', textAlign: 'center' }} >
                                <CardContent sx={{ padding: 0 }} >
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
                        <ButtonGroup
                            disableElevation
                            variant="contained"
                            aria-label="Disabled elevation buttons"
                            size="small"
                            sx={{ alignItems: "center" }}
                            className="m"
                            color="secondary"
                        >
                            <Button onClick={handleDecrement}>-</Button>
                            <div className="add-count-ui">{count}</div>
                            <Button onClick={handleIncrement}>+</Button>
                        </ButtonGroup>
                    </div>
                    :
                    <Button color="secondary" onClick={handleClick} variant="contained" size="small">Add</Button>
            }
        </>
    )
}