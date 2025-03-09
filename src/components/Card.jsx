import { Box, Grid2 as Grid, IconButton } from '@mui/material';
import React from 'react';

const Card = ({ children, title, sousTitre, p = 3, image, ...props }) => {
    const images = image ? image : null

    console.log(image)
    return (
        <Grid
            size={1}
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px", borderRadius: "5px",
                backgroundColor: "black",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                p: 3,
                ...props
            }}
        >
            <IconButton sx={{ backgroundColor: "rgba(255,255,255, 0.2)", p: p }}>
                {children}
            </IconButton>
            <h4>{title}</h4>
            <p>{sousTitre}</p>
            <Box sx={{ display: "flex", justifyContent: "center", gap: "2px", flexWrap: "wrap", width: "100%" }}>
                {images && images.map((img) => (
                    <img src={img.url} height={50} width={50} alt="image" />
                ))}
            </Box>

        </Grid>
    );
}

export default Card;
