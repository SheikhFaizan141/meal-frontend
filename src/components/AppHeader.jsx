import { Box, Button, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoUrl from '../assets/logo.png';
import axios from "axios";

export default function AppHeader() {
  const auth = useContext(AuthContext);

  return (
    <>
      <header className={`header`}>
        <Box className="header-wrapper">
          <div className="header-box-l">
            <Box minWidth={60} width={'8vw'} maxWidth={'6.5rem'} color={'black'} component={Link} to={'/'} className="ma-logo-wrapper">
              {/* <Typography variant='h5'>Filling Meals</Typography> */}
              <img className="img" src={LogoUrl} alt="" />
            </Box>
          </div>

          <HeaderRight />
        </Box>
      </header>
    </>
  )
}

function HeaderRight({ user }) {
  const auth = useContext(AuthContext);

  return (
    <Box className="header-box-r">
      <Box component={'nav'}>
        <Stack component={'ul'} direction={'row'} alignItems={'center'}>
          <li>
            <Button variant="contained" component={Link} to="/checkout">
              <ShoppingCartIcon />
            </Button>
          </li>
          <li>
            {
              auth.id
                ?
                <AccountMenu />
                :
                <Button size="sm" variant="contained" component={Link} to="/signup">
                  Sign In
                </Button>
            }

          </li>
        </Stack>
      </Box>
    </Box>
  )
}

function AccountMenu() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {

    setAnchorEl(null);
  };


  async function handleLogout(e) {
    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;
    const csrf = await axios.get('http://localhost:8000/sanctum/csrf-cookie');

    const res = await axios.post('http://localhost:8000/api/logout',
      {
        headers: {
          "Accept": "application/json"
        }
      });

    console.log('login', res.status);
    if (res.status !== 200) {
      console.error('login', res);
      navigate('/login')
    }

    auth.signout();
    setAnchorEl(null);

    navigate('/');
  }

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

        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>

      </Menu>
    </>
  );
}
