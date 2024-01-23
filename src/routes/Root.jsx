import { Outlet } from "react-router-dom";
import AppHeader from '../components/AppHeader';
import AppFooter from "../components/AppFooter";
import { useEffect, useState } from "react";

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
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let total = 0;
        item.forEach(item => total += item.price * item.qty)

        console.log(total);
        setTotal(total)
    }, [item])

    return (
        <>

            <AppHeader />
            <div className="container">
                <Outlet context={{ item: [item, setItem], total: total }} items={item}  />
            </div>
            <AppFooter />
        </>
    )
}
