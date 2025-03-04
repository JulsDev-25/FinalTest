import { Grid2 as Grid, Icon, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import image2 from '../assets/img/ab.jpg'

const Presentation = () => {
    return (
        <Grid
            sx={{display: "flex", position: "relative", gap: "30px", justifyContent: "space-between", marginTop: "30px", padding: "50px" }}
        >
            <Grid
                size={{ xs: 12, md: 6 }}
            >
                <Grid>
                    <p>POR QUE ELEGIRNOS</p>
                    <h2 style={{margin: "20px 0px"}}>Obtén todas las series, películas, y canales en vivo en un solo lugar</h2>
                    <p>No es necesario suscribirte a múltiples plataformas; Flix Prime ofrece la consolidación de contenido de diversas plataformas, canales premium, televisión en vivo y deportes, todo en un único lugar y a un precio imbatible.</p>
                </Grid>
                <Grid
                    sx={{display: "flex"}}
                >
                    <Box>
                        <Icon />
                        <h2>Soporte 24/7</h2>
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
                size={{ xs: 12, md: 6}}
                sx={{display: "flex", justifyContent: "flex-end"}}
            >
                <img src={image2} style={{height: '400px', borderRadius: "20px",}} alt="ab" />
            </Grid>
            <Box sx={{ p: "40px 30px", borderRadius: "20px", backgroundColor: "#f17404", position: "absolute", marginLeft: "50%", bottom: "75px" }}>
                <h1>S/19.<span>90</span></h1>
                <p>POR MES (hasta 3 dispositivos)</p>
            </Box>
        </Grid>
    );
}

export default Presentation;
