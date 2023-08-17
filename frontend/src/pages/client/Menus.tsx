import BreadCrumb from "@/components/BreadCrumb";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

const Menus = () => {
  return (
    <div className="container">
      <BreadCrumb></BreadCrumb>
      <div className="mt-10">
        <div className="category-list text-center mb-12">
          <div className="">
            <div className="mb-2">
              <img src="/title_base.png" className="mx-auto" />
              <h1 className="text-4xl font-semibold">Trà hoa quả</h1>
            </div>
            <p className="max-w-[725px] mx-auto leading-[1.7] font-medium mb-10">
              Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện đại
              tại Tea House sẽ giúp bạn gợi mở vị giác của bản thân và tận hưởng
              một cảm giác thật khoan khoái, tươi mới.
            </p>
          </div>
          <Swiper
            grabCursor={"true"}
            spaceBetween={52}
            slidesPerView={"auto"}
            pagination={{ clickable: true, dynamicBullets: true }}
          >
            <SwiperSlide>
              <Link to="" className="text-center">
                <img
                  src="/6.png"
                  className="mx-auto mb-4 transition-all hover:scale-105 border border-1-[#ccc]"
                  alt=""
                />
                <div className="pt-[20px] text-center">
                  <h2 className="text-xl uppercase font-bold hover:text-primary transition-all pb-[5px] max-w-[250px] overflow-hidden whitespace-nowrap text-ellipsis">
                    Bánh cà phê phô mai phô mai
                  </h2>
                  <p className="text-[18px] font-bold pb-[10px] leading-6">
                    <span className="font-medium pr-[5px]">Giá:</span>25.000đ{" "}
                    <del className="text-[14px] opacity-40 px-[10px]">
                      30.000đ
                    </del>
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="" className="text-center">
                <img
                  src="https://bizweb.dktcdn.net/thumb/large/100/415/010/products/20.jpg?v=1608880067563"
                  className="mx-auto mb-4 transition-all hover:scale-105 border border-1-[#ccc]"
                  alt=""
                />
                <div className="pt-[20px] text-center">
                  <h2 className="text-xl uppercase font-bold hover:text-primary transition-all pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis">
                    Bánh cà phê phô mai
                  </h2>
                  <p className="text-[18px] font-bold pb-[10px] leading-6">
                    <span className="font-medium pr-[5px]">Giá:</span>25.000đ{" "}
                    <del className="text-[14px] opacity-40 px-[10px]">
                      30.000đ
                    </del>
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="" className="text-center">
                <img
                  src="//bizweb.dktcdn.net/thumb/large/100/415/010/products/18.jpg?v=1608879997587"
                  className="mx-auto mb-4 transition-all hover:scale-105 border border-1-[#ccc]"
                  alt=""
                />
                <div className="pt-[20px] text-center">
                  <h2 className="text-xl uppercase font-bold hover:text-primary transition-all pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis">
                    Bánh cà phê phô mai
                  </h2>
                  <p className="text-[18px] font-bold pb-[10px] leading-6">
                    <span className="font-medium pr-[5px]">Giá:</span>25.000đ{" "}
                    <del className="text-[14px] opacity-40 px-[10px]">
                      30.000đ
                    </del>
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="" className="text-center">
                <img
                  src="/6.png"
                  className="mx-auto mb-4 transition-all hover:scale-105 border border-1-[#ccc]"
                  alt=""
                />
                <div className="pt-[20px] text-center">
                  <h2 className="text-xl uppercase font-bold hover:text-primary transition-all pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis">
                    Bánh cà phê phô mai
                  </h2>
                  <p className="text-[18px] font-bold pb-[10px] leading-6">
                    <span className="font-medium pr-[5px]">Giá:</span>25.000đ{" "}
                    <del className="text-[14px] opacity-40 px-[10px]">
                      30.000đ
                    </del>
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="" className="text-center">
                <img
                  src="/6.png"
                  className="mx-auto mb-4 transition-all hover:scale-105 border border-1-[#ccc]"
                  alt=""
                />
                <div className="pt-[20px] text-center">
                  <h2 className="text-xl uppercase font-bold hover:text-primary transition-all pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis">
                    Bánh cà phê phô mai
                  </h2>
                  <p className="text-[18px] font-bold pb-[10px] leading-6">
                    <span className="font-medium pr-[5px]">Giá:</span>25.000đ{" "}
                    <del className="text-[14px] opacity-40 px-[10px]">
                      30.000đ
                    </del>
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="" className="text-center">
                <img
                  src="/6.png"
                  className="mx-auto mb-4 transition-all hover:scale-105 border border-1-[#ccc]"
                  alt=""
                />
                <div className="pt-[20px] text-center">
                  <h2 className="text-xl uppercase font-bold hover:text-primary transition-all pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis">
                    Bánh cà phê phô mai
                  </h2>
                  <p className="text-[18px] font-bold pb-[10px] leading-6">
                    <span className="font-medium pr-[5px]">Giá:</span>25.000đ{" "}
                    <del className="text-[14px] opacity-40 px-[10px]">
                      30.000đ
                    </del>
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Menus;
