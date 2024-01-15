import { Button } from "@mui/material";
import { Link, Outlet, useLoaderData } from "react-router-dom";

export default function Root() {
    // let meals = useLoaderData
    return (
        <>
            <div className="container">
                <header className="header">
                    <div className="header-wrapper">
                        <div className="header-box-l">

                            <div className="ma-logo-wrapper">
                                {/* <img src="" alt="" /> */}
                                <h2>Meals App</h2>
                            </div>
                        </div>
                        <div className="header-box-r">
                            <nav>
                                <ul>
                                    <li>
                                        <Link className="btn" to={"/checkout"}>
                                            <Button variant="contained">
                                                <span className="item-count">🛒</span>
                                            </Button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="btn" to={"/signin"}>
                                            <Button variant="contained">
                                                Sign In
                                            </Button>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="ma-meals-wrapper">
                        <Outlet />
                    </div>
                </main>
            </div>
        </>
    )
}
