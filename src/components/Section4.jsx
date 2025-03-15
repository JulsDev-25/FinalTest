import { Grid2 as Grid, Icon, IconButton } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';

const Section4 = ({py = 9,children}) => {
    return (
        <Box sx={{ backgroundColor: "Black", width: "100%" }}>
            <Grid
                container
                spacing={3}
                sx={{ py: py, backgroundColor: "black", mx: "auto", maxWidth: {xs: "450px",sm: "700px", md: "1010px"}, }}
            >
                {children}
            </Grid>
        </Box>
    );

}

export default Section4;
