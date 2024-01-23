import { Outlet } from "react-router-dom";
import AppHeader from '../components/AppHeader';
import AppFooter from "../components/AppFooter";
import { useState } from "react";

// async function getMeals() {
//     try {
//         const res = await fetch("/meals.json");

//         if (!res.ok) {
//             throw new Error(`${res.status} ${res.statusText}`);
//         }

//         const data = await res.json();

//         return data?.meals ?? [];

//     } catch (error) {
//         console.error(error)
//     }
// }

// export async function loader() {
//     const meals = await getMeals();

//     return { meals }
// }

export default function Root() {

    const [item, setItem] = useState([]);

    console.log(item);

    function addItem(params) {
        
    }

    function removeItem(params) {
        
    }

    return (
        <>

            <AppHeader />
            <div className="container">
                <Outlet context={{ item: [item, setItem] }} items={item}  />
            </div>
            <AppFooter />
        </>
    )
}
