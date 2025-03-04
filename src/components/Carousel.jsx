import React from "react";
import { Button, Grid2 as Grid, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "../App.css";
import { Box } from "@mui/material";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

const Carousel = () => {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            pagination={{ clickable: true, }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            loop={true}
            style={{ width: "100vw", height: "100vh", backgroundColor: "black" }}
        >
            <SwiperSlide>
                <Box id="b1" sx={{ width: "100%", height: "100%" }}>
                    <Grid sx={{ height: "100%", mx: "50px", display: "flex", alignItems: "center" }}>
                        <Grid
                            size={6}
                            sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                color: "white",
                                justifyContent: "center",
                                alignItems: "flex-start",
                                gap: "15px"
                            }}
                        >
                            <p style={{ color: "gray" }}>TO DO POR SOLO S/19.90 AL MES</p>
                            <h1>Last major séries actuel</h1>
                            <Button size="large" sx={{ mt: "15px", padding: "10px 15px", fontWeight: "bold", color: "white", background: "#f17404", textTransform: "none" }}>
                                Contacter nous
                            </Button>
                        </Grid>
                        <Grid
                            size={6}
                            sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}

                        >
                            <IconButton sx={{backgroundColor: "gray"}}>
                                <PlayCircleFilledIcon FontSize="large" />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box id="b2" sx={{ width: "100%", height: "100%" }}>
                    <Grid sx={{ height: "100%", mx: "50px", display: "flex", alignItems: "center" }}>
                        <Grid
                            size={6}
                            sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                color: "white",
                                justifyContent: "center",
                                alignItems: "flex-start",
                                gap: "15px"
                            }}
                        >
                            <p style={{ color: "gray" }}>TO DO POR SOLO S/19.90 AL MES</p>
                            <h1>Last major séries actuel</h1>
                            <Button size="large" sx={{ mt: "15px", padding: "10px 15px", fontWeight: "bold", color: "white", background: "#f17404", textTransform: "none" }}>
                                Contacter nous
                            </Button>
                        </Grid>
                        <Grid
                            size={6}
                            sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}

                        >
                            <IconButton sx={{backgroundColor: "gray"}}>
                                <PlayCircleFilledIcon FontSize="large" />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box id="b3" sx={{ width: "100%", height: "100%" }}>
                    <Grid sx={{ height: "100%", mx: "50px", display: "flex", alignItems: "center" }}>
                        <Grid
                            size={6}
                            sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                color: "white",
                                justifyContent: "center",
                                alignItems: "flex-start",
                                gap: "15px"
                            }}
                        >
                            <p style={{ color: "gray" }}>TO DO POR SOLO S/19.90 AL MES</p>
                            <h1>Last major séries actuel</h1>
                            <Button size="large" sx={{ mt: "15px", padding: "10px 15px", fontWeight: "bold", color: "white", background: "#f17404", textTransform: "none" }}>
                                Contacter nous
                            </Button>
                        </Grid>
                        <Grid
                            size={6}
                            sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}

                        >
                            <IconButton sx={{backgroundColor: "gray"}}>
                                <PlayCircleFilledIcon FontSize="large" />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box id="b4" sx={{ width: "100%", height: "100%" }}>
                    <Grid sx={{ height: "100%", mx: "50px", display: "flex", alignItems: "center" }}>
                        <Grid
                            size={6}
                            sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                color: "white",
                                justifyContent: "center",
                                alignItems: "flex-start",
                                gap: "15px"
                            }}
                        >
                            <p style={{ color: "gray" }}>TO DO POR SOLO S/19.90 AL MES</p>
                            <h1>Last major séries actuel</h1>
                            <Button size="large" sx={{ mt: "15px", padding: "10px 15px", fontWeight: "bold", color: "white", background: "#f17404", textTransform: "none" }}>
                                Contacter nous
                            </Button>
                        </Grid>
                        <Grid
                            size={6}
                            sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}

                        >
                            <IconButton sx={{backgroundColor: "gray"}}>
                                <PlayCircleFilledIcon FontSize="large" />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box id="b5" sx={{ width: "100%", height: "100%" }}>
                    <Grid sx={{ height: "100%", mx: "50px", display: "flex", alignItems: "center" }}>
                        <Grid
                            size={6}
                            sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                color: "white",
                                justifyContent: "center",
                                alignItems: "flex-start",
                                gap: "15px"
                            }}
                        >
                            <p>TO DO POR SOLO S/19.90 AL MES</p>
                            <h1>Last major séries actuel</h1>
                            <Button size="large" sx={{ mt: "15px", padding: "10px 15px", fontWeight: "bold", color: "white", background: "#f17404", textTransform: "none" }}>
                                Contacter nous
                            </Button>
                        </Grid>
                        <Grid
                            size={6}
                            sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}

                        >
                            <IconButton sx={{backgroundColor: "gray"}}>
                                <PlayCircleFilledIcon FontSize="large" />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Box>
            </SwiperSlide>
        </Swiper>
    );
};

const style = {

}
export default Carousel;
