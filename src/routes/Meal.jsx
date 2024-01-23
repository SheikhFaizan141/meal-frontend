import { Box, Button, ButtonGroup, Divider, Stack } from "@mui/material";
import { Link, useLoaderData, useOutletContext } from "react-router-dom";
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


export default function Meal({ addItem, removeItem }) {
    const { meal } = useLoaderData();
    const [items, setItem] = useOutletContext()?.item;

    const [count, setCount] = useState(0);


    useEffect(() => {
        const index = items.findIndex(item => item.id === meal.id);
        if (index !== -1) {
            setCount(items[index].qty);
        } else {
            setCount(0);
        }
    }, [items])




    function handleClick() {
        let isPresent = items.findIndex(item => meal.id === item.id);

        if (isPresent === -1) {
            let m = { id: meal.id, name: meal.name, price: meal.price, qty: 1 }
            setItem([...items, m])
        }
    }

    function handleIncrement() {
        let newItem = items.map(item => {
            if (item.id === meal.id) {
                let obj = { ...item, qty: item.qty + 1 }

                return obj;
            } else {
                return item;
            }
        });

        setItem(newItem)
    }

    function handleDecrement() {
        let newList = [];
        items.forEach(item => {
            if (item.id === meal.id) {
                if (item.qty > 1) {
                    newList.push({ ...item, qty: item.qty - 1 });
                }
            } else {
                return newList.push(item);
            }
        });


        setItem(newList);
    }


    return (
        <>
            <div className="meal-wrapper meal-hero">

                {/* Hero Section */}
                <Stack direction={{ sm: 'column', md: 'row' }} className="m-hero-wrapper">

                    <Box flex={'1 1 160px'} className="m-hero-box m-hero-box-1 img-container">
                        <img src="/img/mark-deyoung-mjcJ0FFgdWI-unsplash.jpg" alt="" className="img" />
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

                                <Stack className="meal-price-ui">
                                    <div>
                                        <Typography className="meal-price text-lg font-bold">{formatCurrency(meal.price)}</Typography>
                                    </div>

                                    <div className="btn-wrapper">
                                        <AddButton count={count} handleClick={handleClick} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
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
                            <Typography component="h4" variant="h4" marginBlockEnd="0.75rem" >Ingridents</Typography>
                        </section>
                    </Box>

                    <aside className="m-aside m-cart-aside">
                        <MealCart
                            handleClick={addItem}
                            handleDecrement={handleDecrement}
                            handleIncrement={handleIncrement}
                            items={items}
                            // count={items.length}
                            price={meal?.price}
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
    const [items, setItem] = useOutletContext()?.item;

    function handleIncrement() {
        let newItem = items.map(list => {
            if (list.id === item.id) {
                return { ...list, qty: list.qty + 1 };
            } else {
                return list;
            }
        });

        setItem(newItem)
    }

    function handleDecrement() {
        let newList = [];


        items.forEach(list => {
            if (list.id === item.id) {
                if (list.qty > 1) {
                    newList.push({ ...list, qty: list.qty - 1 });
                }
            } else {
                return newList.push(list);
            }
        });


        setItem(newList);
    }

    return (
        <ListItem disablePadding >
            <ListItemText
                primary={item.name}
                secondary={item.price ? formatCurrency(item.price * item.qty) : null}
            />
            {/* <AddButton size="sm" count={item.count} handleClick={handleClick} handleDecrement={handleDecrement} handleIncrement={handleIncrement} /> */}

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