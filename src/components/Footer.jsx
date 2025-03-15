import { Box, Grid2 as Grid, IconButton, Link, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Section4 from './Section4';

const Footer = () => {
    const pays = ['perù', 'Agentina', 'Bolivia', 'Chille'];

    return (
        <>
            <Section4 py={2}>
                <Grid
                    size={{ xs: 12, sm: 7, md: 4 }}
                >
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: 'flex',
                            fontSize: "23px",
                            gap: "2px",
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'white',
                            textDecoration: 'none',
                            mb: 1
                        }}
                    >
                        <span style={{ color: "#f17404" }}>FLIX</span><span> PRIME</span>
                    </Typography>
                    <p>Servicio líder de IPTV con toda la programación en un solo lugar. Con Flix Prime no necesitas más plataformas.</p>

                    <Box
                        sx={{ display: "flex", alignItems: "center", gap: "10px", mt: 5 }}
                    >
                        <IconButton
                            sx={{ backgroundColor: "#111" }}
                        >
                            <FacebookOutlinedIcon sx={{ color: "#f17404" }} fontSize="small" />
                        </IconButton>
                        <IconButton
                            sx={{ backgroundColor: "#111" }}
                        >
                            <LinkedInIcon sx={{ color: "#f17404" }} fontSize="small" />
                        </IconButton>
                        <IconButton
                            sx={{ backgroundColor: "#111" }}
                        >
                            <TwitterIcon sx={{ color: "#f17404" }} fontSize="small" />
                        </IconButton>
                        <IconButton
                            sx={{ backgroundColor: "#111" }}
                        >
                            <GoogleIcon sx={{ color: "#f17404" }} fontSize="small" />
                        </IconButton>
                    </Box>
                </Grid>
                <Grid
                    size={{ xs: 12, sm: 5, md: 3 }}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                fontSize: "23px",
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'white',
                                textDecoration: 'none',
                                mb: 1
                            }}
                        >
                            <span> Países</span>
                        </Typography>
                        <List>
                            {
                                pays.map((el, index) => (
                                    <ListItem sx={{ px: 0 }}>
                                        <Link underline="none" sx={{ color: "rgb(184, 184, 184)", "&:hover": { color: "white", cursor: "pointer" },}} key={index}>{el}</Link>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Box>
                    <Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                fontSize: "23px",
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'white',
                                textDecoration: 'none',
                                mb: 1
                            }}
                        >
                            <span> Links</span>
                        </Typography>
                        <List>
                            {
                                pays.map((el, index) => (
                                    <ListItem sx={{ px: 0 }}>
                                        <Link underline="none" sx={{ color: "rgb(184, 184, 184)", "&:hover": { color: "white", cursor: "pointer" },}} key={index}>{el}</Link>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Box>
                </Grid>
                <Grid
                    size={{ xs: 12, md: 4 }}
                    sx={{ ml: "auto" }}
                >
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            fontSize: "23px",
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'white',
                            textDecoration: 'none',
                            mb: 1
                        }}
                    >
                        <h3> Cobertura mundial</h3>
                        <img src="../src/assets/img/map.png" style={{ width: "100%" }} alt="map" />
                    </Typography>
                </Grid>
            </Section4>
            <Section4 py={2}>
                <Box
                    sx={{
                        textAlign: "center",
                        width: "100%",
                        borderTop: "1px solid rgb(44, 44, 44)",
                        pt: 2,
                        mb: 6
                    }}
                >
                    <p>© 2024 Flix Prime. Todo en un solo lugar</p>
                    <p>Terminos y condiciones</p>
                </Box>
            </Section4>
        </>
    );
}

export default Footer;
