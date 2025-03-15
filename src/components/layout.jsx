import { Box, Button, Container, Grid2 as Grid } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from './AppBar';
import Carousel from './Carousel';
import Presentation from './Presentation';
import Titre from './Titre';
import Card from './Card';
import Section4 from './Section4';
import TvIcon from '@mui/icons-material/Tv';
import TheatersIcon from '@mui/icons-material/Theaters';
import CardS4 from './CardS4';
import Footer from './Footer';

const Layout = () => {
    const card = [
        {
            title: "Smart TV",
            sousTitre: "Disponible en todos los Smart TV de cualquier marca"
        },
        {
            title: "Smartphone",
            sousTitre: "Smartphone o Tablet con sistema Android o iOS"
        },
        {
            title: "PC / Laptop",
            sousTitre: "Puedes usarlo desde tu laptop o PC de escritorio."
        },
    ]
    const contenido = [
        {
            title: "Series y películas actuales",
            sousTitre: "de las principales plataformas streaming"
        },
        {
            title: "Todo el fútbol mundial en vivo",
            sousTitre: "Liga local y ligas internacionales"
        },

        {
            title: "Más deportes y luchas en vivo",
            sousTitre: "F1, NBA, UFC y muchos deportes más"
        },

        {
            title: "TV en vivo Perú",
            sousTitre: "los principales canales Peruanos en HD y FHD"
        },
        {
            title: "Todo el fútbol mundial en vivo",
            sousTitre: "Liga local y ligas internacionales"
        },

        {
            title: "Más deportes y luchas en vivo",
            sousTitre: "F1, NBA, UFC y muchos deportes más"
        },
    ]
    const image = [
        {
            name: "",
            cat: "",
            url: "../src/assets/img/apple.png"
        },
        {
            name: "",
            cat: "",
            url: "../src/assets/img/amc.png"
        },
        {
            name: "",
            cat: "",
            url: "../src/assets/img/abc.png"
        },
        {
            name: "",
            cat: "",
            url: "../src/assets/img/bbc.png"
        },
        {
            name: "",
            cat: "",
            url: "../src/assets/img/cbs.png"
        },
        {
            name: "",
            cat: "",
            url: "../src/assets/img/cw.png"
        },
        {
            name: "",
            cat: "",
            url: "../src/assets/img/disney.png"
        },
        {
            name: "",
            cat: "",
            url: "../src/assets/img/fox.png"
        },
        {
            name: "",
            cat: "",
            url: "../src/assets/img/hbo.png"
        },
        {
            name: "",
            cat: "",
            url: "../src/assets/img/hulu.png"
        },
        {
            name: "",
            cat: "",
            url: "../src/assets/img/nbc.png"
        },
        {
            name: "",
            cat: "",
            url: "../src/assets/img/netflix.png"
        },
        {
            name: "",
            cat: "",
            url: "../src/assets/img/paramount.png"
        },
        {
            name: "",
            cat: "",
            url: "../src/assets/img/prime.png"
        },
        {
            name: "",
            cat: "",
            url: "../src/assets/img/star.png"
        },
        {
            name: "",
            cat: "",
            url: "../src/assets/img/syfy.png"
        },
    ]

    return (
        <Grid container>
            <ResponsiveAppBar />
            <Carousel />
            <Presentation />

            <Titre titre={'Dispositivo'} sousTitre={'Desde cualquier'} />
            <Grid
                size={12}
                sx={{
                    my: 2,
                    mb: 10,
                    mx: { xs: 2, sm: 7 },
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "20px"
                }}
            >
                {
                    card.map((item) => (
                        <Card title={item.title} sousTitre={item.sousTitre} width={wd} >
                            <TvIcon fontSize="large" />
                        </Card>
                    ))
                }
            </Grid>

            <Section4>
                <CardS4 />
                <CardS4 />
                <CardS4 />
                <CardS4 />
            </Section4>

            <Titre titre={'Contenido'} sousTitre={'Tendrás este'} />
            <Grid
                container
                spacing={3}
                rowSpacing={5}
                columns={{ sm: 1, md: 2 }}
                sx={{
                    my: 2,
                    mx: 8,
                }}
            >
                {
                    contenido.map((item) => (
                        <Card title={item.title} sousTitre={item.sousTitre} p={1} image={image} >
                            <TheatersIcon sx={{ color: "#f17404" }} fontSize="large" />
                        </Card>
                    ))
                }
            </Grid>

            <Titre titre={'Incluye'} sousTitre={"Además"} />
            <Grid
                container
                spacing={3}
                rowSpacing={5}
                columns={{ sm: 1, md: 2 }}
                sx={{
                    my: 2,
                    mx: 8,
                    mb: 10
                }}
            >
                {
                    Array.from({ length: 8 }).map(() => (
                        <Card title={"Animes"} sousTitre={"Disfruta más de 500 animes, que abarcan tanto las últimas novedades como los inolvidables clásicos que han dejado huella en la historia del anime"} p={1} >
                            <TheatersIcon sx={{ color: "#f17404" }} fontSize="large" />
                        </Card>
                    ))
                }
            </Grid>

            <Section4>
                <Box sx={{ display: "flex", gap: "1.5rem" }}>
                    <Box id="b6" sx={{ width: "50%", height: "100%" }}>
                        <Grid sx={{ height: "100%", mx: "50px", display: "flex", alignItems: "center" }}>
                            <Grid
                                size={12}
                                sx={{
                                    height: "260px",
                                    display: "flex",
                                    flexDirection: "column",
                                    color: "white",
                                    justifyContent: "center",
                                    alignItems: "flex-start",
                                    gap: "15px"
                                }}
                            >
                                <h3>Refiere a tus conocidos y gana meses gratis o S/.</h3>
                                <Button size="large" variant="outlined" color="inherit" sx={{"&:hover": {backgroundColor: "#f17404", borderColor: "#f17404"}, mt: "15px", padding: "10px 15px", fontWeight: "bold", color: "white", textTransform: "none" }}>
                                    Raferir aqui
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box id="b3" sx={{ width: "50%", height: "100%" }}>
                        <Grid sx={{ height: "100%", mx: "50px", display: "flex", alignItems: "center" }}>
                            <Grid
                                size={12}
                                sx={{
                                    height: "260px",
                                    display: "flex",
                                    flexDirection: "column",
                                    color: "white",
                                    justifyContent: "center",
                                    alignItems: "flex-start",
                                    gap: "15px"
                                }}
                            >
                                <h3>Postula como revendedor del servicio</h3>
                                <Button size="large" variant="outlined" color="inherit" sx={{"&:hover": {backgroundColor: "#f17404", borderColor: "#f17404"}, mt: "15px", padding: "10px 15px", fontWeight: "bold", color: "white", textTransform: "none" }}>
                                    Saber mas
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

                <Box id="b2" sx={{ width: "100%", height: "100%", mt: 5 }}>
                    <Grid sx={{ height: "100%", mx: "50px", display: "flex", alignItems: "center" }}>
                        <Grid
                            size={6}
                            sx={{
                                height: "260px",
                                display: "flex",
                                flexDirection: "column",
                                color: "white",
                                justifyContent: "center",
                                alignItems: "flex-start",
                                gap: "15px",
                            }}
                        >
                            <h2>No esperes más y pide tu prueba gratis ahora!</h2>
                        </Grid>
                        <Grid
                            size={6}
                            sx={{
                                pl: "5em"
                            }}
                        >
                            <Button size="large" sx={{ width: "18em", mt: "15px", padding: "10px 25px", fontWeight: "bold", color: "white", background: "#f17404", borderRadius: "10px", textTransform: "none" }}>
                                <h4>Solicita tu prueba gratuita aquis</h4>
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Section4>

            <Box 
                sx={{width: "100%"}}
            >
                <Footer />
            </Box>

        </Grid>
    );
}

export default Layout;

const wd = {
    xs: "100%",
    sm: "320px"
}