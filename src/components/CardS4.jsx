import { Box, Grid2 as Grid, IconButton } from '@mui/material';
import React from 'react';
import GridViewIcon from '@mui/icons-material/GridView';

const CardS4 = () => {
    return (
        <Grid size={{xs: 12, md: 6}} sx={{display: "flex", p:4, alignItems: "flex-start", gap: "20px", borderRadius: "5px", backgroundColor: "rgba(255,255,255, 0.1)"}}>
            <IconButton color='info' sx={{ backgroundColor: "rgba(0,0,0)", p:3, color: "#f17404"}}>
                <GridViewIcon sx={{color: "f17404"}} fontSize="medium" />
            </IconButton>
            <Box>
                <h3>+1400 canales de TV en vivo</h3>
                <p>Televisión local e internacional de más de 30 países y los principales canales de cadenas.</p>
            </Box>
        </Grid>
    );
}

export default CardS4;
