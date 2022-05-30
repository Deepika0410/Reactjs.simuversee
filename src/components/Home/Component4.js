import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./styles.css";
import img1 from "./images/1.png"
import img2 from "./images/2.png"
import img3 from "./images/3.png"
import img4 from "./images/4.png"
import img5 from "./images/5.png"
import SwiperCore, {
  EffectCoverflow,
  Navigation
} from "swiper/core";


SwiperCore.use([EffectCoverflow, Navigation]);

export default function Component4() {
  return (
    <div className="containere">
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 20,
          depth: 2000,
          modifier: 1,
          slideShadows: true
        }}
        loop={true}
         autoplay={{
          delay: 700,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="img1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="img1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="img1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="img1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="img1"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}