import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../styles/HeaderStyle.css';
import MenuIcon from '@mui/icons-material/Menu';
import CarRentalIcon from '@mui/icons-material/CarRental';
const Header = () => {

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'cursive', fontSize: '20px' ,bgcolor:'black', color:'white' }}>
                            <CarRentalIcon />RENT ON WHEELS </Typography>
                            <Divider/>
            <ul className='mobile-navigation'>
            <Divider/>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <Divider/>
                <li>
                    <NavLink to={'/menu'}>Menu</NavLink>
                </li>
                <Divider/>
                <li>
                    <NavLink to={'/about'}>About</NavLink>
                </li>
                <Divider/>
                <li>
                    <NavLink to={'/contact'}>Contact</NavLink>
                </li>
                <Divider/>
            </ul>
        </Box>
    )

    return (
        <div>
            <Box>
                <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
                    <Toolbar>
                        <IconButton color='inherit' aria-label='open drawer'
                            edge='start' sx={{ mr: 2, display: { sm: 'none' }, }} onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'cursive', fontSize: '30px' }}>
                            <CarRentalIcon />RENT ON WHEELS </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <ul className='navigation-menu'>
                                <li>
                                    <NavLink activeClassName='active' to={'/'}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/menu'}>Vehicles</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/about'}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/contact'}>Contact</NavLink>
                                </li>
                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component='nav'>
                    <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle}
                        sx={{ display: { xs: 'block', sm: 'none',width:'200px' } }}>{drawer}</Drawer>
                </Box>
                <Box  >
                    <Toolbar />
                </Box>
            </Box>
        </div>
    )
}

export default Header
