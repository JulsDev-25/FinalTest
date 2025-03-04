import { Grid2 as Grid, Icon, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import image2 from '../assets/img/ab.jpg'
import CardS4 from './CardS4';

const Section4 = () => {
    return (
        <Grid
            container
            size={12}
            spacing={1}
            sx={{ gap: "30px", py: 9, px: 1, backgroundColor: "black", justifyContent: "center" }}
        >
                <CardS4 />
                <CardS4 />
                <CardS4 />
                <CardS4 />
        </Grid>
    );
}

export default Section4;
