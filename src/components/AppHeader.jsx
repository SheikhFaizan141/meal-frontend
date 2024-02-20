import { Box, Button, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
// import { header } from "./header.module.css"

// import * as React from 'react';
// import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';

export default function AppHeader() {
  const auth = useContext(AuthContext);
  // console.log(auth);
  return (
    <>
      <header className={`header`}>
        <div className="header-wrapper">

          <div className="header-box-l">
            <Box color={'black'} component={Link} to={'/'} className="ma-logo-wrapper">
              <Typography variant='h5'>Filling Meals</Typography>
            </Box>
          </div>

          {/* <div className="header-box-r">
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
          </div> */}

          <HeaderRight />

        </div>
      </header>
    </>
  )
}

function HeaderRight({ user }) {
  const auth = useContext(AuthContext);

  // console.log(auth);

  return (
    <Box className="header-box-r">
      <nav>
        <Stack component={'ul'} direction={'row'} alignItems={'center'}>
          <li>
            <Button variant="contained" component={Link} to="/checkout">
              🛒
            </Button>
          </li>
          <li>
            {
              auth.name
                ?
                <AccountMenu />
                :
                <Button size="sm" variant="contained" component={Link} to="/signup">
                  Sign In
                </Button>
            }

          </li>
        </Stack>
      </nav>
    </Box>
  )
}

function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <DashboardIcon /> Dashboard
        </MenuItem>
        <Divider />

        {/* <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem> */}

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>

      </Menu>
    </>
  );
}
