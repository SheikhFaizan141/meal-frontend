import { Outlet } from "react-router-dom";
import AppHeader from '../components/AppHeader';
import AppFooter from "../components/AppFooter";
import { useEffect, useState } from "react";

const taxRate = 0.05;

export default function Root() {

    const [item, setItem] = useState([]);
    const [itemTotalPrice, setItemTotalPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalTax, setTotalTax] = useState(0);

    useEffect(() => {
        let total = 0;
        item.forEach(item => total += item.price * item.qty)
        
        const taxTotal = total * taxRate;
        console.log(total * 0.05);
        console.log(taxTotal);
        setTotalTax(taxTotal)
        setItemTotalPrice(total)
        setTotalPrice(total + taxTotal)
    }, [item])

    return (
        <>

            <AppHeader />
            <div className="container">
                <Outlet context={{ item: [item, setItem], totalPrice: totalPrice, itemTotalPrice: itemTotalPrice, tax: totalTax }} items={item} />
            </div>
            <AppFooter />
        </>
    )
}
