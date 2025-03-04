import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "../App.css";
import { Box } from "@mui/material";

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
        <Box id="b1" sx={{width: "100%", height: "100%"}}>
            
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box id="b2" sx={{width: "100%", height: "100%"}}>

        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box id="b3" sx={{width: "100%", height: "100%"}}>

        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box id="b4" sx={{width: "100%", height: "100%"}}>

        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box id="b5" sx={{width: "100%", height: "100%"}}>

        </Box>
      </SwiperSlide>
    </Swiper>
  );
};

const style = {
    
}
export default Carousel;
