import { Grid2 as Grid, Icon, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import image2 from '../assets/img/ab.jpg'

const Presentation = () => {
    return (
        <Grid
            sx={{ display: { md: "flex" }, position: "relative", gap: "30px", justifyContent: "space-between", py: 9, px: { xs: 2, sm: 9, md: 6 }, backgroundColor: "black" }}
        >
            <Grid
                size={{ xs: 12, md: 6 }}
            >
                <Grid>
                    <p>POR QUE ELEGIRNOS</p>
                    <h2 style={{ margin: "20px 0px" }}>Obtén todas las series, películas, y canales en vivo en un solo lugar</h2>
                    <p>No es necesario suscribirte a múltiples plataformas; Flix Prime ofrece la consolidación de contenido de diversas plataformas, canales premium, televisión en vivo y deportes, todo en un único lugar y a un precio imbatible.</p>
                </Grid>
                <Grid
                    sx={{ display: {sx: "block", sm: "flex"}, mb: {sm: "3em", md: "auto"} }}
                >
                    <Box>
                        <Icon />
                        <h3>Soporte 24/7</h3>
                        <p>Contamos con atención personalizada permamentente.</p>
                    </Box>
                    <Box>
                        <Icon />
                        <h3>Activación en 5 minutos</h3>
                        <p>Solo se requiere una conexión a Internet de mínimo 30mb</p>
                    </Box>
                </Grid>
            </Grid>
            <Grid
                size={{ xs: 12, md: 6 }}
                sx={{ display: {xs: "none", md:"flex"}, height: { md: "400px" }, justifyContent: "flex-end" }}
            >
                <img src={image2} style={{ borderRadius: "10px", height: "100%" }} alt="ab" />
            </Grid>
            <Grid
                size={{ xs: 12, md: 6 }}
                sx={{ display: {xs: "flex", md:"none"}, mb: "1em", height: { md: "400px" }, justifyContent: "flex-end" }}
            >
                <img src={image2} style={{ borderRadius: "10px", width: "100%" }} alt="ab" />
            </Grid>
            <Box sx={{ p: "40px 30px", borderRadius: "20px", backgroundColor: "#f17404", position: { md: "absolute" }, right: { md: "13em" }, bottom: { md: "100px" } }}>
                <h1>S/19.<span>90</span></h1>
                <p style={{ color: "white" }}>POR MES (hasta 3 dispositivos)</p>
            </Box>
        </Grid>
    );
}

export default Presentation;
