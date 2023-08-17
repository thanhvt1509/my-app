import { IRootState } from "@/store";
import { ICart } from "@/store/cart/Reducer";
import {
  fetchCategoryAction,
  fetchOneCategoryAction,
} from "@/store/categories/Action";
import { fetchProducByNametAction, fetchProductAction } from "@/store/product/Action";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Dispatch } from "redux";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user")!);
  const userName = JSON.parse(localStorage.getItem("user")!)?.name;
  const logOut = () => {
    localStorage.clear();
  };

  const productState = useSelector((state: IRootState) => state.products);
  const categoryState = useSelector((state: IRootState) => state.categories);
  // const oneCategotyState = useSelector((state: IRootState) => state.category);

  const [cartLenght, setCartLenght] = useState<ICart[]>([])
  const cartState = useSelector((state: IRootState) => state.carts)
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();
  const { register, handleSubmit } = useForm();
  const productCate = async (id: string | undefined) => {
    await dispatch(fetchOneCategoryAction(id))
  }
  const productAll = async () => {
    await dispatch(fetchProductAction())
  }
  const onSubmit = async (data: { name: string }) => {
    try {
      await dispatch(fetchProducByNametAction(data.name));
      alert("Tìm kiếm sản phẩm thành công");
      navigate("/product-all");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(fetchCategoryAction());
  }, []);
  useEffect(() => {
    // const cart: ICart[] = []
    const getCartStore = JSON.parse(localStorage.getItem("cartItems")!)
    if (getCartStore) {
      // cart.push(cartState)
      setCartLenght(getCartStore)
    }
  }, [])
  return (
    <div className="border-b-[1px]">
      <div className="bg-[#4d8a54] text-white text-sm py-2">
        <div className="container flex justify-between">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
              />
            </svg>
            <Link to="0328911043">Hotline: 0328911043</Link>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="nav_menu flex items-center gap-8">
              <div className="flex bg-white items-center text-black rounded-full px-3 gap-3">
                <input
                  type="text"
                  {...register("name")}
                  className="rounded-full px-1 py-2 outline-none border-none"
                  placeholder="Tìm kiếm ..."
                />
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </div>
              <div className="nav_menu-account relative">
                <p className="flex acc items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  Tài khoản
                </p>
                <div className="acc-verify opacity-0 text-black invisible absolute min-w-[125px] bg-white shadow-md py-2 px-4 rounded-md top-full left-0 transition-all duration-300">
                  <ul className="product-item">
                    <li className="mb-2 font-semibold hover:text-primary">
                      {userName ? (
                        <Link to="/my-order">Xin chào: {userName}</Link>
                      ) : (
                        <Link to="/login">Đăng nhập</Link>
                      )}
                    </li>
                    <li className="font-semibold hover:text-primary">
                      {user ? (
                        <Link onClick={() => logOut()} to="/register">
                          Đăng xuất
                        </Link>
                      ) : (
                        <Link to="/register">Đăng ký</Link>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav_menu-bag">
                <Link to="/cart" className="flex items-center relative gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  <span className="rounded-full w-4 h-4 bg-white text-[#4d8a54] flex items-center justify-center font-semibold absolute top-3 right-16">
                    {cartState ? cartState.carts.length : 0}
                  </span>
                  Giỏ hàng
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="container py-[18px] flex justify-between">
        <ul className="menu-left flex items-center gap-8 font-bold">
          <li className="">
            <Link to="/" className="hover:text-primary">
              Trang chủ
            </Link>
          </li>
          <li className="">
            <Link to="" className="hover:text-primary">
              Giới thiệu
            </Link>
          </li>
          <li className="relative">
            <Link to="/product-all"
              onClick={() => productAll()}
              className="category-nav hover:text-primary">
              Sản phẩm
            </Link>
            <div className="category-menu opacity-0 z-10 invisible absolute bg-white shadow-xl py-2 px-4 w-[250px] rounded-md top-full left-0 transition-all duration-300">
              <ul className="product-item">
                {categoryState?.categories?.map((category) => (
                  <li className="mb-3 hover:text-primary" key={category._id}>
                    <Link to="/product-all" onClick={() => productCate(category._id)}>{category.name}</Link>
                  </li>
                ))}

                {/* <li className="mb-3 hover:text-primary">
                  <Link to="">Bánh ngọt</Link>
                </li>
                <li className="mb-3 hover:text-primary">
                  <Link to="">Smoothies</Link>
                </li>
                <li className="mb-1 hover:text-primary">
                  <Link to="">Trà hoa quả</Link>
                </li> */}
              </ul>
            </div>
          </li>
        </ul>
        <Link to="/">
          <img src="/logo.png" alt="" />
        </Link>
        <ul className="menu-right flex items-center gap-8 font-bold">
          <li className="">
            <Link to="" className="hover:text-primary">
              Tin tức
            </Link>
          </li>
          <li className="">
            <Link to="menus" className="hover:text-primary">
              Thực đơn
            </Link>
          </li>
          <li className="">
            <Link to="" className="hover:text-primary">
              Liên hệ
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;