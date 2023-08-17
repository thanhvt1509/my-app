import { orderForm, orderSchema } from "@/model/order";
import { IRootState } from "@/store";
import { ICart } from "@/store/cart/Reducer";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Dispatch } from "redux";
import { useState, useEffect } from 'react'
import { IOrder, addOrderAction, fetchOrderAction } from "@/store/order/Action";
import { IUser } from "@/store/user/Action";
import { IOrderDetail } from "@/store/oder-detail/Action";
import { add } from "@/API/OrderDetails";
// import { add } from "@/API/Orders";
const Checkout = () => {
  const dispatch: Dispatch<any> = useDispatch()
  const navigate = useNavigate();
  const [carts, setCarts] = useState<ICart[]>([])
  const [total, setTotal] = useState<number>(0)
  const [user, setUser] = useState<IUser>()
  const cartStore = JSON.parse(localStorage.getItem("cartItems")!)
  useEffect(() => {
    setCarts(cartStore)
  }, [])
  useEffect(() => {
    let count = 0
    carts.map((cart, index) => {
      count += cart.quantity * cart.price
    })
    setTotal(count)
    const userStore = JSON.parse(localStorage.getItem("user")!)
    if (userStore) {
      setUser(userStore)
    }
  }, [carts])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOrder>();

  const orderState = useSelector((state: IRootState) => state.orders)
  const onSubmit = async (order: IOrder) => {
    try {
      const addNewOrder = { ...order, userId: user?._id, totalMoney: total + 40000, status: 1 };

      // console.log(addNewOrder);
      await dispatch(addOrderAction(addNewOrder));


      // await dispatch(fetchOrderAction())
      // if (orderState.orders != undefined) {


      //     // console.log(orderState.orders);

      alert("Thanh toán thành công");
      navigate('/billConfirm')
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
  }, [])

  return (
    <div className="container-2">
      <form className="flex gap-[28px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <Link
            to="/"
            className="text-3xl block text-primary font-semibold mb-5 mt-5"
          >
            Tea House
          </Link>
          <div className="flex gap-[28px]">
            <div>
              <div className="flex items-center gap-32 mb-3">
                <h3 className="text-lg font-bold">Thông tin nhận hàng</h3>
                <Link to="" className="text-primary font-semibold">
                  Đăng nhập
                </Link>
              </div>
              <div>
                <input type="text" value={user?._id} hidden {...register("userId")} />
                <div className="mb-3">
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    id="fullName"
                    {...register("fullName")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    placeholder="Họ và tên"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    id="phoneNumber"
                    {...register('phoneNumber')}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    placeholder="Số điện thoại"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    id="address"
                    {...register('address')}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    placeholder="Địa chỉ"
                    required
                  />

                </div>
                <div className="mb-3">
                  <textarea
                    id="note"
                    rows={4}
                    {...register('note')}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary"
                    placeholder="Ghi chú ..."
                  ></textarea>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-6">
                <div className="mb-3">
                  <h3 className="text-lg font-bold">Vận chuyển</h3>
                </div>
                <div>
                  <div className="flex w-[350px] justify-between mb-3 bg-gray-50 border border-gray-300 text-gray-900 p-3 text-sm rounded-lg focus:ring-primary focus:border-primary">
                    <div className="flex gap-3 items-center">
                      <input
                        type="radio"
                        className="bg-gray-50 border border-gray-300 text-primary text-sm rounded-full focus:ring-primary focus:border-primary block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                        required
                      />
                      Giao hàng tận nơi
                    </div>
                    <span>40.000₫</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-l-[1px] py-5 pl-5 w-[410px]">
          <h1 className="text-xl font-bold mb-5">Đơn hàng ({carts.length} sản phẩm)</h1>
          <div className="pt-7 border-t-[1px] border-b-[1px] pb-2">
            {carts?.map((cart, index) => {
              return <div className="mb-4 flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <div className="border rounded-lg relative w-[55px] h-[55px]">
                    <img src={cart.image} className="w-[50px] h-[50px] rounded-lg" />
                    <p className="w-5 h-5 bg-primary absolute top-[-5px] right-[-5px] flex justify-center items-center text-sm text-white font-semibold rounded-full">
                      {cart.quantity}
                    </p>
                  </div>
                  <h3 className="font-bold">{cart.name}</h3>
                </div>
                <p className="font-medium">{cart.quantity * cart.price}₫</p>
              </div>
            })}
          </div>
          <div className="py-5 flex gap-3 border-b-[1px]">
            <input
              type="text"
              className="p-3 border rounded-lg w-full"
              placeholder="Nhập mã giảm giá"
            />
            <button className="p-3 rounded-lg bg-primary text-white font-medium min-w-[102px]">
              Áp dụng
            </button>
          </div>
          <div className="pt-7 pb-5 border-b-[1px]">
            <div className="flex justify-between mb-4">
              <span>Tạm tính:</span>
              <span className="font-medium">{total}₫</span>
            </div>
            <div className="flex justify-between">
              <span>Phí vận chuyển:</span>
              <span className="font-medium">40.000₫</span>
            </div>
          </div>
          <div className="flex justify-between mb-4 items-center pt-5">
            <span className="text-lg font-semibold">Tổng cộng:</span>
            <span className="text-primary text-2xl font-bold">{total + 40000}₫</span>
          </div>
          <div className="flex justify-between">
            <Link
              to="/cart"
              className="text-primary font-medium text-sm flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              <span>Quay về giỏ hàng</span>
            </Link>
            <button className="text-white uppercase bg-primary p-4 rounded-lg min-w-[120px]">
              Đặt hàng
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
