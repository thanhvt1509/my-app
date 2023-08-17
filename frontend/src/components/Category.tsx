import { IRootState } from "@/store";
import { fetchCategoryAction } from "@/store/categories/action";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";
import { Swiper, SwiperSlide } from "swiper/react";

const Category = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const categoryState = useSelector((state: IRootState) => state.categories)
  useEffect(() => {
    dispatch(fetchCategoryAction())
  }, [dispatch])
  return (
    <div className="container">
      <div className="text-center mb-[56px]">
        <img src="/title_base.png" className="mx-auto" alt="" />
        <h1 className="uppercase tracking-tighter text-[40px] font-bold">
          Danh mục sản phẩm
        </h1>
      </div>

      <div className="category-list mb-12">
        <Swiper
          grabCursor={"true"}
          spaceBetween={52}
          slidesPerView={"auto"}
          pagination={{ clickable: true, dynamicBullets: true }}
        >
          {/* {new Array(6).fill(0).map(() => (
            <SwiperSlide>
              <div>
                <img src="/sec_category_1.png" alt="" />
                <h2>Trà nóng</h2>
              </div>
            </SwiperSlide>
          ))} */}
          {categoryState?.categories?.map((category, index) => {
            return <SwiperSlide key={index}>
              <Link to="" className="text-center">
                <img
                  src={category.image}
                  className="mx-auto mb-4 transition-all hover:scale-105"
                  alt=""
                />
                <h2 className="text-2xl font-bold hover:text-primary transition-all">
                  {category.name}
                </h2>
              </Link>
            </SwiperSlide>
          })}

          {/* <SwiperSlide>
            <Link to="" className="text-center">
              <img
                src="/sec_category_2.png"
                className="mx-auto mb-4 transition-all hover:scale-105"
                alt=""
              />
              <h2 className="text-2xl font-bold hover:text-primary transition-all">
                Trà hoa quả
              </h2>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="" className="text-center">
              <img
                src="/sec_category_1.png"
                className="mx-auto mb-4 transition-all hover:scale-105"
                alt=""
              />
              <h2 className="text-2xl font-bold hover:text-primary transition-all">
                Smoothies
              </h2>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="" className="text-center">
              <img
                src="/sec_category_1.png"
                className="mx-auto mb-4 transition-all hover:scale-105"
                alt=""
              />
              <h2 className="text-2xl font-bold hover:text-primary transition-all">
                Bánh ngọt
              </h2>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="" className="text-center">
              <img
                src="/sec_category_1.png"
                className="mx-auto mb-4 transition-all hover:scale-105"
                alt=""
              />
              <h2 className="text-2xl font-bold hover:text-primary transition-all">
                Bánh ngọt
              </h2>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="" className="text-center">
              <img
                src="/sec_category_1.png"
                className="mx-auto mb-4 transition-all hover:scale-105"
                alt=""
              />
              <h2 className="text-2xl font-bold hover:text-primary transition-all">
                Bánh ngọt
              </h2>
            </Link>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
