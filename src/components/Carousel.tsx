import { type FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import img_1 from "../assets/img-1.jpg";
import img_2 from "../assets/img-2.jpg";
import img_3 from "../assets/img-3.jpg";
import img_4 from "../assets/img-4.jpg";
import img_7 from "../assets/img-7.jpg";
import img_8 from "../assets/img-8.jpg";
import img_9 from "../assets/img-9.jpg";
import img_10 from "../assets/img-10.jpg";
import img_11 from "../assets/img-11.jpg";

const Carousel: FC = () => {
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={"auto"}
      breakpoints={{
        375: { spaceBetween: 10, slidesPerView: 1 },
        540: { spaceBetween: 10, slidesPerView: 2 },
        768: { spaceBetween: 10, slidesPerView: 3 },
        1024: { spaceBetween: 16, slidesPerView: 4 },
        1440: { spaceBetween: 16, slidesPerView: 5 },
      }}
      speed={800}
      modules={[Autoplay, Parallax]}
      parallax={{ enabled: false }}
      loop={true}
      autoplay={{
        delay: 500,
        disableOnInteraction: false,
        reverseDirection: false,
      }}
      breakpointsBase={"window"}
    >
      <SwiperSlide>
        <img src={img_1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img_2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img_3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img_4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img_7} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img_8} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img_9} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img_10} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img_11} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
