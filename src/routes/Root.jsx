import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import AppHeader from '../components/AppHeader';
import AppFooter from "../components/AppFooter";
import { useEffect, useReducer, useState } from "react";
import mealsReducer from "../mealsReducer";
import { Container } from "@mui/material";
import AuthProvider, { AuthContext } from "../AuthProvider";

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

    // Derived 
    const isEmpty = items.length <= 0;

    const itemsTotalCost = items.reduce((acc, currValue) => acc + (currValue.price * currValue.qty), 0);
    const totalTax = itemsTotalCost * taxRate;
    const totalCost = itemsTotalCost + totalTax;

    // check if this can be done without useEffect
    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(items))
    }, [items]);


    return (
        <>
           <ScrollRestoration />
            <AuthProvider>
                <AppHeader />
                <Container className="container">
                    <Outlet context={{ items, dispatch, isEmpty, totalPrice: totalCost, itemTotalPrice: itemsTotalCost, tax: totalTax }} />
                </Container>
                <AppFooter />
            </AuthProvider>
        </>
    )
}
