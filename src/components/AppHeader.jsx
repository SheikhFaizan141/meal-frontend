import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import { header } from "./header.module.css"

export default function AppHeader() {

  return (
    <>
      <header className={`header`}>
        <div className="header-wrapper">

          <div className="header-box-l">
            <Box color={'black'} component={Link} to={'/'} className="ma-logo-wrapper">
              <Typography variant='h5'>Filling Meals</Typography>
            </Box>
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

                  <Button size="sm" variant="contained" component={Link} to="/signup">
                    Sign In
                  </Button>
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