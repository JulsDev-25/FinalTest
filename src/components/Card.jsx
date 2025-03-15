import { Box, Grid2 as Grid, IconButton, Link } from '@mui/material';
import React, { useState } from 'react';

const Card = ({ children, title, sousTitre, p = 3, image, ...props }) => {
    const images = image ? image : null
    const [enter, setEnter] = useState(false)
        // const [target, setTarget] = useState(null)

    // console.log(target)


    const mouseEnter = (e) => {
        // setTarget(e.current)
        setEnter(true)
    }

    const mouseLeave = () => {
        // setTarget(null)
        setEnter(false)
    }

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
            onMouseEnter={mouseEnter} 
            onMouseLeave={mouseLeave}
        >
            <IconButton sx={{ backgroundColor: enter ?"rgba(255, 255, 255, 0.07)":"rgba(255, 255, 255, 0.2)", p: p, color: enter?"#f17404": "white", }}>
                {children}
            </IconButton>
            <Link underline="none" sx={{cursor: "pointer", "&:hover": { color: "#f17404" }, color: "white", fontWeight: "bold"}}>{title}</Link>
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
