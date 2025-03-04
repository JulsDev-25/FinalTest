import { Grid2 as Grid } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from './AppBar';
import Carousel from './Carousel';
import Presentation from './Presentation';

const Layout = () => {
    return (
        <Grid container>
            <ResponsiveAppBar />
            <Carousel />
            <Presentation />

            

        </Grid>
    );
}

export default Layout;
