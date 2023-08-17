import BreadCrumb from "@/components/BreadCrumb";
import { IRootState } from "@/store";
import { CartDec, CartDelete, CartIncrement } from "@/store/cart/Action";
import { fetOneProductAction, fetchProductAction } from "@/store/product/Action";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";
export interface ICart {
  productID: string
  name: string
  image: string
  quantity: number
  price: number
  total: number
  totalOrder: number
}
const CartPage = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const [count, setCount] = useState<number>(1);
  // const [total, setTotal] = useState<number>(0)
  const productState = useSelector((state: IRootState) => state.products)
  const cartState = useSelector((state: IRootState) => state.carts)
  const cartIncre = useSelector((state: IRootState) => state.carts)
  const [carts, setCarts] = useState<ICart[]>([])
  const cartStore = JSON.parse(localStorage.getItem("cartItems")!)

  const handleCartInfo = () => {
    const cartTemp: ICart[] = []
    let count = 0

    for (const cart of cartState.carts) {
      const product = productState?.products?.find((product) => product._id == cart.productID)
      if (product) {
        cartTemp.push({
          productID: product?._id,
          name: product?.name,
          image: cart.image,
          quantity: cart.quantity,
          price: cart.price,
          total: cart.quantity * product.price,
          totalOrder: count += cart.quantity * product.price
        })
        localStorage.setItem("cartItems", JSON.stringify(cartTemp))

      }
    }
  }
  useEffect(() => {
    handleCartInfo();
  }, [cartState])
  useEffect(() => {
    dispatch(fetchProductAction())
  }, [dispatch])
  const handleIncreCart = (cart: ICart) => {
    dispatch(CartIncrement(cart))
  }
  const handleDecCart = (cart: ICart) => {
    dispatch(CartDec(cart))
  }
  const handleDeleteCart = (cart: ICart) => {
    dispatch(CartDelete(cart))
  }
  return (
    <div className="container">
      <BreadCrumb></BreadCrumb>
      <h1 className="font-bold uppercase mt-11 text-lg">Giỏ hàng của bạn</h1>
      {cartStore.map((cart, index) => {
        return <form>
          <div className="p-[35px] border-b-[1px] flex justify-between items-center border-gray-200">
            <Link to={`/productDetail/${cart.productID}`}>

              <img src={cart.image} className="w-[98px] h-[98px]" />
            </Link>

            <div>
              <h2 className="mb-2 font-bold text-lg">{cart.name}</h2>
              <p className="text-primary font-bold">{cart.price}</p>
            </div>
            <div className="border border-gray-200 flex items-center gap-8 py-4 px-3">
              <button
                type="button"
                className="rounded-full font-bold bg-gray-500 text-white w-4 h-4"
                onClick={() => handleDecCart(cart)}
              >
                -
              </button>
              <input
                type="number"
                className="text-center w-5"
                onChange={(e) => setCount(Number(e.target.value))}
                value={cart.quantity}
                defaultValue={1}
              />
              <button
                type="button"
                className="rounded-full font-bold bg-gray-500 text-white w-4 h-4"
                onClick={() => handleIncreCart(cart)}
              >
                +
              </button>
            </div>
            <div>
              <p className="text-primary font-bold">{cart.total}</p>
            </div>
            <button type="button" onClick={() => handleDeleteCart(cart)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="4"
                stroke="currentColor"
                className="w-5 h-5 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {cartStore.length - 1 == index && <div className="flex items-baseline justify-between mb-8">
            <h2 className="font-bold text-lg">Tổng tiền</h2>
            <p className="text-primary font-bold">{cart.totalOrder}</p>
          </div>}

        </form>
      })}
      <div className="mt-[30px] mb-8 w-[470px] ml-auto">
        <div className="flex items-center justify-between">
          <Link
            to="/product-all"
            className="bg-primary rounded-full text-white flex items-center border gap-1 py-3 px-5 font-bold hover:text-primary hover:bg-white hover:border-primary"
          >
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
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
            Tiếp tục mua hàng
          </Link>
          <Link
            to="/checkout"
            className="bg-primary rounded-full text-white flex items-center border gap-1 py-3 px-5 font-bold hover:text-primary hover:bg-white hover:border-primary"
          >
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
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            Tiến hành thanh toán
          </Link>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default CartPage;
