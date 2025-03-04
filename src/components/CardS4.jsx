import { Box, IconButton } from '@mui/material';
import React from 'react';
import GridOnIcon from '@mui/icons-material/GridOn';

const CardS4 = () => {
    return (
        <Box sx={{display: "flex", p:8, width: "50%"}}>
            <IconButton sx={{ backgroundColor: "rgba(255,255,255, 0.2)", p:3}}>
                <GridOnIcon sx={{color: "#f17404"}} fontSize="large" />
            </IconButton>
            <Box>
                <h3>+1400 canales de TV en vivo</h3>
                <p>Televisión local e internacional de más de 30 países y los principales canales de cadenas.</p>
            </Box>
        </Box>
    );
}

export default CardS4;
