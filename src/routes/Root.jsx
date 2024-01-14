import { Link, useLoaderData } from "react-router-dom";

export function loader() {
    try {

    } catch (error) {

    }


    return {  };
}

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
                                        <Link className="btn">🛒 <span className="item-count"></span></Link>
                                    </li>
                                    <li>
                                        <Link className="btn" to={"/signin"}>Sign In</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="ma-meals-wrapper">
                        { }
                    </div>
                </main>
            </div>
        </>
    )
}
