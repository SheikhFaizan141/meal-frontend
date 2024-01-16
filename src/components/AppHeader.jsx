import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { header } from "./header.module.css"

export default function AppHeader() {

  // console.log(classes);
  return (
    <>
      <header className={`header`}>
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
    </>
  )
}


export { }