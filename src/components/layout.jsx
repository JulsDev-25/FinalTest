import { Grid2 as Grid } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from './AppBar';
import Carousel from './Carousel';

const Layout = () => {
    return (
        <Grid container>
            <ResponsiveAppBar />
            <Carousel />
        </Grid>
    );
}

export default Layout;
