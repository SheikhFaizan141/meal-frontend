import { Add, FileUploadSharp, FoodBank, Home, Inventory, PermMedia, Person, Settings } from '@mui/icons-material';
import { Box, IconButton, Link, List, ListItem, ListItemIcon, ListItemText, Stack } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

const SIDEBAR_LINKS = [
    {
        name: "Home",
        icon: <Home />,
        path: '/admin'
    },
    {
        name: "Orders",
        icon: <Inventory />,
        path: '/admin'
    },
    {
        name: "Customers",
        icon: <Person />,
        path: './meals'
    },
    {
        name: "Meals",
        icon: <FoodBank />,
        path: './meals'
    },
    {
        name: "Add Meal",
        icon: <Add />,
        path: './meals/new'
    },
    {
        name: "Content",
        icon: <PermMedia />,
        path: './meal'
    },
];

export default function AdminSidebar() {

    return (
        <Box flex={4} maxWidth={200} component={'aside'} margin={0} padding={0} bgcolor={'#FFFFFF'} paddingInline={1} paddingBlock={2}>
            <Stack>
                <List >
                    {
                        SIDEBAR_LINKS.map((link) => {
                            return (
                                <ListItem key={link.name} sx={{ gap: 2 }} color='#B1B1B1' component={RouterLink} to={link.path} >
                                    {/* <Link > */}
                                    <ListItemIcon sx={{ minWidth: 0 }}>
                                        {link.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={link.name}
                                    />
                                    {/* </Link> */}
                                </ListItem>
                            );
                        })
                    }
                </List>
            </Stack>
        </Box>
    )
}
