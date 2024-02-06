import { Box, Button, ButtonGroup, Divider, Stack } from "@mui/material";
import { Link, useLoaderData, useOutletContext } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
import { formatCurrency } from "../utils/formatCurrency";
import emptyBasket from '../assets/empty-basket.png'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export async function loader({ params }) {
    const res = await fetch(`http://127.0.0.1:8000/api/meal/${params.mealId}`);

    if (!res.ok) {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }

    // const data = await res.json();
    // return data
    // equal
    return res;
}


export default function Meal() {
    const meal = useLoaderData();
    const { items, dispatch } = useOutletContext();

    // console.log(items);
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     const index = items.findIndex(item => item.id === meal.id);
    //     if (index !== -1) {
    //         setCount(items[index].qty);
    //     } else {
    //         setCount(0);
    //     }
    // }, [items])

    // Same we dont need useEffect here 
    const item = items.find(item => item.id === meal.id);
    const count = item !== undefined ? item.qty : 0;

    function handleClick() {
        dispatch({
            type: 'add',
            id: meal.id,
            name: meal.name,
            price: meal.price,
        })
    }

    function handleIncrement() {
        dispatch({
            type: 'increment',
            id: meal.id,
        })
    }

    function handleDecrement() {
        dispatch({
            type: 'decrement',
            id: meal.id
        })
    }


    return (
        <>
            <div className="meal-wrapper meal-hero">

                {/* Hero Section */}
                <Stack direction={{ sm: 'column', md: 'row' }} className="m-hero-wrapper">

                    <Box flex={'1 1 160px'} className="m-hero-box m-hero-box-1 img-container">
                        <img src={meal.url} alt="img" className="img" />
                        {/* <img src="" alt="img" className="img" /> */}
                    </Box>

                    <div className="m-hero-box m-hero-box-2  meal-info-wrapper meal-hero">

                        <div className="hero-heading-wrapper hero-box2-t  mb-1">
                            <hgroup className="meal-hgroup mb-1">
                                <Typography component="h1" variant="h2">{meal.name}</Typography>
                                <p className="meal-cuisine text-xl"><span>Cuisine: </span>Indian</p>
                            </hgroup>

                            <div className="m-rating-wrapper">
                                <Typography component="legend">Rating</Typography>
                                <Rating name="read-only" value={4} readOnly />
                            </div>
                        </div>

                        <div className="meal-dis meal-info hero-box2-b">
                            <Stack alignItems={{ sm: 'start' }} direction={{ sm: 'column', md: 'row' }} className="m-info-wrapper">
                                <Stack direction="row">
                                    <ul className="m-info-ul" >
                                        <li className="m-info-li">
                                            <span className="text-xl rc-icon">🔪</span>
                                            <span className="text-base font-bold ">Prep Time</span>
                                            <span className="text-sm ">15 mins</span>
                                        </li>
                                        <li className="m-info-li">
                                            <span className="text-xl rc-icon">🍳</span>
                                            <span className="text-base font-bold ">Total Time</span>
                                            <span className="text-sm ">1 hr 20 mins</span>
                                        </li>
                                        <li className="m-info-li">
                                            <span className="text-xl rc-icon">🍳</span>
                                            <span className="text-base font-bold ">Total Cook Time</span>
                                            <span className="text-sm ">1 hr 20 mins</span>
                                        </li>
                                    </ul>
                                </Stack>

                                <Stack className="meal-price-ui">
                                    <div>
                                        <Typography className="meal-price text-lg font-bold">{formatCurrency(meal.price)}</Typography>
                                    </div>

                                    <div className="btn-wrapper">
                                        {/* Make them seprate components  */}
                                        <AddButton count={count}  handleClick={handleClick} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
                                    </div>
                                </Stack>

                            </Stack>
                        </div>
                    </div>
                </Stack>
            </div>

            <Divider light />

            <main className="m-main">
                <Stack direction={{ sm: 'column', md: 'row' }} className="m-main-wrapper">

                    <Box component={'article'} order={{ sm: 1, md: 0 }} className="m-article ">
                        <section className="m-section m-section-1">
                            <Typography component="h2" variant="h3" marginBlockEnd="0.75rem" >About {meal.name}</Typography>
                            <Typography component="p" variant="body1" marginBlockEnd="0.75rem" >{meal.description}</Typography>
                        </section>

                        <section className="m-section m-section-2">
                            <Typography component="h4" variant="h4" marginBlockEnd="0.75rem" >Ingridents of {meal.name}</Typography>

                        </section>
                    </Box>

                    <aside className="m-aside m-cart-aside">
                        <MealCart
                            handleClick={handleClick}
                            handleDecrement={handleDecrement}
                            handleIncrement={handleIncrement}
                            items={items}
                            price={meal.price}
                            isEmpty={items.length > 0 ? true : false}
                        />
                    </aside>

                </Stack>
            </main>

        </>
    )
}


function MealCart({ isEmpty, items, amount, count, handleClick, handleDecrement, handleIncrement }) {
    const { itemTotalPrice } = useOutletContext();

    return (
        <>
            <div className="m-cart-wrapper">
                {
                    isEmpty
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
                                    {
                                        items.map(item => {
                                            return (
                                                <CartItem key={item.id} item={item} />
                                            );
                                        })
                                    }
                                </List>
                            </div>

                            <div className="m-cart-btm mb-1">
                                <Stack direction="row" alignItems="center" justifyContent="space-between">
                                    <Typography variant="h6" component="h6">Total Amount</Typography>
                                    <Typography variant="body1" component="p">{formatCurrency(itemTotalPrice)}</Typography>
                                </Stack>
                            </div>

                            <div className="m-cart-footer">
                                <Button sx={{ width: '100%', paddingBlock: '0.5rem' }} variant="contained" component={Link} to="/checkout">
                                    Checkout
                                </Button>
                            </div>
                        </div>
                        :
                        <div className="m-cart-box m-cart-empty">
                            <Card sx={{ boxShadow: 'none', textAlign: 'center' }} >
                                <CardContent sx={{ padding: 0 }} >
                                    <Box component={'figure'} display={'flex'} justifyContent={'center'} className="mb-1">
                                        <img width="200" src={emptyBasket} alt="empty cart" />
                                    </Box>
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


function CartItem({ item }) {
    const { dispatch } = useOutletContext();

    function handleIncrement() {
        dispatch({
            type: 'increment',
            id: item.id,
        })
    }

    function handleDecrement() {
        dispatch({
            type: 'decrement',
            id: item.id
        })
    }

    return (
        <ListItem disablePadding >
            <ListItemText
                primary={item.name}
                secondary={item.price ? formatCurrency(item.price * item.qty) : null}
            />

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
                    <div className="add-count-ui">{item.qty}</div>
                    <Button onClick={handleIncrement}>+</Button>
                </ButtonGroup>
            </div>
        </ListItem>
    );
}

function AddButton({ size = "sm", count, handleClick, handleDecrement, handleIncrement }) {
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