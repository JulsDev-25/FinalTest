import { Box, Grid2 as Grid, IconButton } from '@mui/material';
import React from 'react';
import TvIcon from '@mui/icons-material/Tv';

const Card = () => {
    return (
        <Box
            size={{ sx: 12, md: 3 }}
            sx={{width: "60%" ,display: "flex", flexDirection: "column", gap:"10px", backgroundColor: "black", justifyContent: "center", alignItems: "center", textAlign: "center", p:3 }}
        >
            <IconButton sx={{ backgroundColor: "rgba(255,255,255, 0.2)", p:3}}>
                <TvIcon fontSize="large" />
            </IconButton>
            <h4>Smart TV</h4>
            <p>Disponible en todos los Smart TV de cualquier marca</p>
        </Box>
    );
}

export default Card;
