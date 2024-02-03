import { Outlet, useNavigation } from "react-router-dom";
import AppHeader from '../components/AppHeader';
import AppFooter from "../components/AppFooter";
import { useEffect, useReducer, useState } from "react";
import mealsReducer from "../mealsReducer";
import { Container } from "@mui/material";

const taxRate = 0.05;
const storageKey = 'cart'

/** 
 * @return Array
 */
function createInitialState() {
    const storage = JSON.parse(localStorage.getItem(storageKey));
    return storage || [];
}

export default function Root() {
    const [items, dispatch] = useReducer(mealsReducer, null, createInitialState);
    // const [itemTotalPrice, setItemTotalPrice] = useState(0);
    // const [totalPrice, setTotalPrice] = useState(0);
    // const [totalTax, setTotalTax] = useState(0);
    // const [isEmpty, setIsEmpty] = useState(true);

    // Derived 
    const isEmpty = items.length <= 0;

    const itemsTotalCost = items.reduce((acc, currValue) => acc + (currValue.price * currValue.qty), 0);
    const totalTax = itemsTotalCost * taxRate;
    const totalCost = itemsTotalCost + totalTax;

    useEffect(() => {
        // const total = items.reduce((acc, currValue) => acc + (currValue.price * currValue.qty), 0)
        // const taxTotal = total * taxRate;

        // update local storage when items update
        localStorage.setItem(storageKey, JSON.stringify(items))

        // Calculate tax
        // setTotalTax(taxTotal)
        // setItemTotalPrice(total)
        // setTotalPrice(total + taxTotal)
    }, [items]);

 
    return (
        <>

            <AppHeader />
            <Container className="container">
                <Outlet context={{ items, dispatch, isEmpty, totalPrice: totalCost, itemTotalPrice: itemsTotalCost, tax: totalTax }} />
            </Container>
            <AppFooter />
        </>
    )
}
