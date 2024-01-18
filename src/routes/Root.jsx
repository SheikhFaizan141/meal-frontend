import { Outlet } from "react-router-dom";
import AppHeader from '../components/AppHeader';
import AppFooter from "../components/AppFooter";

export default function Root() {

    return (
        <>

            <AppHeader />
            <div className="container">
                <Outlet context="meal" />
            </div>
            <AppFooter />
        </>
    )
}
