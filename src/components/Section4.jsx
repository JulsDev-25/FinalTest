import { Grid2 as Grid, Icon, IconButton } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import image2 from '../assets/img/ab.jpg'
import CardS4 from './CardS4';

const Section4 = ({children}) => {
    return (
        <Box sx={{ backgroundColor: "Black", width: "100%" }}>
            <Grid
                container
                spacing={3}
                sx={{ py: 9, backgroundColor: "black", mx: "auto", maxWidth: {xs: "450px",sm: "700px", md: "1010px"}, }}
            >
                {children}
            </Grid>
        </Box>
    );

}

export default Section4;
