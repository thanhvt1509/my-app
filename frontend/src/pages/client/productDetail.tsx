import { IRootState } from "@/store";
import { fetchOneCategoryAction } from "@/store/categories/Action";
import { IProduct, fetOneProductAction } from "@/store/product/Action";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Dispatch } from "redux";
import { Swiper, SwiperSlide } from "swiper/react";
import CartAction from "@/store/cart/Action";
const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();
  const getOneProduct = useSelector((state: IRootState) => state.product)
  const getOneCategory = useSelector((state: IRootState) => state.category)
  useEffect(() => {
    dispatch(fetOneProductAction(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (getOneProduct?.product?.categoryId?._id) {
      dispatch(fetchOneCategoryAction(getOneProduct.product.categoryId._id));
    }
  }, [dispatch, getOneProduct]);

  const [count, setCount] = useState<number>(1);
  useEffect(() => {
    if (count < 1) {
      setCount(count + 1);
    }
  }, [count]);
  const handleAddCart = async (product: IProduct) => {
    await dispatch(CartAction(product))

    alert('Thêm sản phẩm vào giỏ hàng thành công')

  }
  const handleBuyCart = async (product: IProduct) => {
    await dispatch(CartAction(product))
    navigate('/cart')
  }
  return (
    <>
      <div className="container">
        <div className="flex py-[28px]">
          <div className="flex flex-col">
            <div className="overflow-hidden max-w-[500px]">
              <img
                className="w-full border border-1px-[#ccc]"
                src={getOneProduct?.product?.images?.[0]}
                alt=""
              />
              <div className="flex flex-start gap-4 mt-4 w-full overflow-hidden">
                {getOneProduct?.product?.images?.map((img, index) => {
                  return <img key={index}
                    className="border border-1px-[#ccc] w-[84px]"
                    src={`${img}`}
                    alt=""
                  />
                })}
              </div>
            </div>
          </div>
          <form className="pl-[50px]">
            <h1 className="font-bold text-[24px] uppercase">{getOneProduct?.product?.name}</h1>
            <div className="py-5">
              <i className="italic">Mô tả đang cập nhật</i>
              <p className="text-[16px] pt-2 pb-4">
                Giá:{" "}
                <span className="text-[24px] text-[#4d8a54] font-bold pl-2">
                  {getOneProduct?.product?.price}
                </span>
              </p>
              <div className="mt-[15px] flex items-center">
                <p className="mr-[15px]">Số lượng:</p>
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() => setCount(count - 1)}
                    id="decrementBtn"
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l"
                    disabled={count <= 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="quantityValue"
                    className="px-3 py-1 bg-white border-t border-b border-gray-200 w-[50px] appearance-none text-center border-none"
                    onChange={(e) => setCount(Number(e.target.value))}
                    value={count}
                  ></input>
                  <button
                    type="button"
                    onClick={() => setCount(count + 1)}
                    id="incrementBtn"
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex mt-[25px] pb-[20px] border-b-2 border-[#ccc]">
                <button
                  type="button"
                  className="min-w-[250px] px-[22px] py-3 mr-[20px] text-[#4d8a54] border border-[#4d8a54] border-solid rounded-[40px] text-[18px] hover:bg-[#4d8a54] hover:text-[#fff] transition-all ease-linear flex items-center justify-center bg-[#F3FFF4] font-bold"
                  onClick={e => handleAddCart(getOneProduct.product)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  Thêm vào giỏ hàng
                </button>
                <button
                  onClick={e => handleBuyCart(getOneProduct.product)}
                  className="px-[22px] min-w-[250px] py-3 mr-[20px] text-[#fff] rounded-[40px] text-[18px] flex items-center justify-center bg-[#4d8a54] font-bold hover:bg-[#385e3e] transition-all ease-linear">
                  Mua ngay
                </button>
              </div>
              <div className="flex flex-col pt-[15px] text-[18px] mt-4">
                <p>
                  <strong className="text-[#282828]">
                    Giao hàng miễn phí:
                  </strong>
                  <span className="ml-2">Áp dụng đơn hàng {">"} 200.000đ</span>
                </p>
                <p className="mt-4">
                  <strong className="text-[#282828]">
                    Thanh toán tận nhà:
                  </strong>
                  <span className="ml-2">Nhanh chóng và an toàn</span>
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className="px-[10px]">
          <div className="mt-[50px] pb-[25px]">
            <h1 className="text-[24px] uppercase font-bold py-[15px] px-[30px] border-b-4 border-[#4d8a54] w-[300px] text-center">
              Mô tả sản phẩm
            </h1>
            <div className="py-[15px] text-[#282828]  text-[16px]">
              <p className="mb-[15px] leading-7">
                {getOneProduct?.product?.description_long}
              </p>
              <p className="mb-[15px] leading-6">
                Nguyên liệu pha trà vải cho 3 người :
              </p>
              <p className="mb-[15px] leading-6">2 gói trà lipton túi lọc</p>
              <p className="mb-[15px] leading-6">-300ml nước sôi</p>
              <p className="mb-[15px] leading-6">
                -20g đường ( khoảng 2 thìa canh)
              </p>
              <p className="mb-[15px] leading-6">
                -1 lon trái vải đóng hộp hoặc 10 quả vải.
              </p>
              <p className="mb-[15px] leading-6">-1 chén đá lạnh</p>
              <p className="mb-[15px] leading-6">
                -Nếu sử dụng vải đóng hộp, khi pha trà vải bạn cho thêm 3 thìa
                canh nươc vải đóng hộp vào bình trước khi lắc.
              </p>
              <p className="mb-[15px] leading-6">
                -Đối với trà túi lọc bạn nên chọn loại có mùi nhẹ để không át đi
                mùi vải.
              </p>
              <p className="mb-[15px] leading-6">
                -Bạn có thể tạo hương vị cho món trà vải bằng cách cho thêm 1
                chút nước cốt chanh hoặc 1 thìa sữa đặc, giảm lượng đường đi nếu
                muốn.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mb-[56px]">
          <img src="/title_base.png" className="mx-auto" alt="" />
          <h1 className="uppercase tracking-tighter text-[40px] font-bold">
            Sản phẩm cùng loại
          </h1>
        </div>
        <div className="category-list mb-12">
          <Swiper
            grabCursor={"true"}
            spaceBetween={52}
            slidesPerView={"auto"}
            pagination={{ clickable: true, dynamicBullets: true }}
          >
            {getOneCategory?.category?.products?.map((productCate, index) => {
              return <SwiperSlide key={index}>
                <Link to={`/productDetail/${productCate._id}`} className="text-center">
                  <img
                    src={productCate.images?.[0]}
                    className="mx-auto mb-4 transition-all hover:scale-105 border border-1-[#ccc]"
                    alt=""
                  />
                  <div className="pt-[20px] text-center">
                    <h2 className="text-xl uppercase font-bold hover:text-primary transition-all pb-[5px] max-w-[250px] overflow-hidden whitespace-nowrap text-ellipsis">
                      {productCate.name}
                    </h2>
                    <p className="text-[18px] font-bold pb-[10px] leading-6">
                      <span className="font-medium pr-[5px]">Giá:</span>{productCate.price}{" "}
                      <del className="text-[14px] opacity-40 px-[10px]">
                        30.000đ
                      </del>
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
