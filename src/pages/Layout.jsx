import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../components/Navbar/NavbarComponent';
import { Box } from '@chakra-ui/react'
import background from '../assets/background.png';

function Layout() {
    return (
        <Box
            bgImage={`url(${background})`}
            bgSize="cover"
            bgPos="center"
            minH="100vh"

        >
            <NavbarComponent />
            <Outlet />
        </Box>
    )
}

export default Layout