import { Add, FoodBank, Home } from '@mui/icons-material';
import { Box, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

const SIDEBAR_LINKS = [
    {
        name: "Home",
        icon: <Home />
    },
    {
        name: "All Meals",
        icon: <FoodBank />
    },
    {
        name: "Add Meal",
        icon: <Add />
    },
];

export default function AdminSidebar() {

    return (
        <Box flex={4} maxWidth={200} component={'aside'} margin={0} padding={0} bgcolor={'#FFFFFF'} border={'red'} borderRight={1} paddingInline={1} paddingBlock={2}>
            <List >
                {
                    SIDEBAR_LINKS.map((link) => {
                        return (
                            <ListItem>
                                <ListItemIcon>
                                    {link.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={link.name}
                                />
                            </ListItem>
                        );
                    })
                }
            </List>
        </Box>
    )
}
