import { Grid2 as Grid } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from './AppBar';
import Carousel from './Carousel';
import Presentation from './Presentation';
import Titre from './Titre';
import Card from './Card';
import Section4 from './Section4';

const Layout = () => {
    return (
        <Grid container>
            <ResponsiveAppBar />
            <Carousel />
            <Presentation />

            <Titre  titre={'Dispositivo'} sousTitre={'Desde cualquier' }/>

            <Grid 
                size={12}
                sx={{mx:8, my:2, display: "flex", justifyContent: "center", gap: "20px"}}
            >
                <Card />
                <Card />
                <Card />
            </Grid>

            <Section4 />

            <Titre  titre={'Contenido'} sousTitre={'Tendrás este' }/>


        </Grid>
    );
}

export default Layout;
