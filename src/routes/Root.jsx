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

            <AppHeader />
            <div className="container">


                {/* <div className="ma-meals-wrapper"> */}
                <Outlet item="asa" />
                {/* </div> */}


            </div>
            <AppFooter />
        </>
    )
}
