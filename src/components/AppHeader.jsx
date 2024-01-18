import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { header } from "./header.module.css"

export default function AppHeader() {
  
  return (
    <>
      <header className={`header`}>
        <div className="header-wrapper">
          <div className="header-box-l">

            <div className="ma-logo-wrapper">
              {/* <img src="" alt="" /> */}
              <Typography variant='h5' component='h1' >Filling Meals</Typography>
              {/* <h2>Meals App</h2> */}
            </div>
          </div>
          <div className="header-box-r">
            <nav>
              <ul>
                <li>

                  <Button variant="contained" component={Link} to="/checkout">
                    🛒
                  </Button>
                </li>
                <li>

                  <Button variant="contained" component={Link} to="/signin">
                    Sign In
                  </Button>
                  {/* <Link className="btn" to={"/signin"}>
                    <Button variant="contained">
                     
                    </Button>
                  </Link> */}
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