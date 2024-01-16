import { Button } from "@mui/material";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import AppHeader from '../components/AppHeader';
import { useState } from "react";
import AppFooter from "../components/AppFooter";

export default function Root() {
    // let meals = useLoaderData
    const [items, setItems] = useState('null');

    return (
        <>
            <div className="container">
                 
                 <AppHeader />
                 
                <main>
                    {/* <div className="ma-meals-wrapper"> */}
                        <Outlet items={items} />
                    {/* </div> */}
                </main>

                <AppFooter />
            </div>
        </>
    )
}
