import { Link } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";

const Banner = () => {
  return (
    <div className="mb-[75px]">
      <Swiper>
        <SwiperSlide>
          <Link to="">
            <img
              src="/slider_1.png"
              className="w-full h-[745px] object-cover"
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="">
            <img
              src="https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1227&q=80"
              className="w-full h-[745px] object-cover"
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="">
            <img
              src="https://images.unsplash.com/photo-1547825407-2d060104b7f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              className="w-full h-[745px] object-cover"
              alt=""
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
