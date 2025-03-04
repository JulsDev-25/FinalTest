import { Grid2 as Grid } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from './AppBar';
import Carousel from './Carousel';
import Presentation from './Presentation';
import Titre from './Titre';
import Card from './Card';

const Layout = () => {
    return (
        <Grid container>
            <ResponsiveAppBar />
            <Carousel />
            <Presentation />

            <Titre />
            <Grid 
                size={12}
                sx={{mx:8, my:2, display: "flex", justifyContent: "center", gap: "20px"}}
            >
                <Card />
                <Card />
                <Card />
            </Grid>

        </Grid>
    );
}

export default Layout;
