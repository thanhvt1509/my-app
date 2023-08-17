import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Dispatch } from "redux";
import { ICart } from "./CartPage";
import { IUser } from "@/store/user/Action";
import { IOrder, fetchOrderAction } from "@/store/order/Action";
import { useSelector } from "react-redux";
import { IRootState } from "@/store";
import { toast } from "react-toastify";
import { getAll } from "@/API/Orders";
import { IOrderDetail } from "@/store/oder-detail/Action";
import { add } from "@/API/OrderDetails";

const Billconfirm = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const navigate = useNavigate();
    const orderState = useSelector((state: IRootState) => state.orders)

    // console.log(orderState.orders);


    const [carts, setCarts] = useState<ICart[]>([])
    const [total, setTotal] = useState<number>(0)
    const [user, setUser] = useState<IUser>()
    const cartStore = JSON.parse(localStorage.getItem("cartItems")!)

    // console.log(carts);

    // const cart = (cart: ICart) => {
    //     console.log(cart);

    //     // return cart
    // }
    const addOrderDetail = async () => {


        // await dispatch(fetchOrderAction())
        // if (orderState.orders != undefined) {

        orderState.orders.map((order, index) => {
            if (index == 0) {
                // oneOrder = order
                const orderId = order._id
                console.log(carts);

                carts.map(async (cart, index) => {
                    const orderDetail: IOrderDetail = {
                        orderId: orderId,
                        productId: cart.productID,
                        quantity: cart.quantity,
                        price: cart.price,
                        totalMoney: cart.total
                    }
                    // console.log(orderDetail);
                    // console.log(cart);

                    await dispatch(add(orderDetail))
                })
                navigate('/my-order')
                // console.log(oneOrder);
            }
        })

        //     // console.log(orderState.orders);
    }

    // console.log(oneOrder);


    useEffect(() => {
        // setCarts(cartStore)
        // const cartStore = JSON.parse(localStorage.getItem('cartItems') || '[]');
        setCarts(cartStore);
        // gọi hóa đơn 
        dispatch(fetchOrderAction())
        // addOrderDetail()
        // .then(() => addOrderDetail())
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
        // addOrderDetail()
    }, [carts])

    return (
        <div className="container-2">
            <Link
                to="/"
                className="text-3xl font-semibold text-primary mt-7 mb-7 block"
            >
                Tea House
            </Link>
            <div className="flex gap-[42px]">
                {orderState?.orders?.map((order, index) => (
                    <React.Fragment key={order._id}>
                        {index === 0 && (
                            <div>
                                <div className="flex gap-5 mb-7 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="72px" height="72px">
                                        <g fill="none" stroke="#8EC343" strokeWidth="2">
                                            <circle
                                                cx="36"
                                                cy="36"
                                                r="35"
                                                style={{
                                                    strokeDasharray: "240px, 240px",
                                                    strokeDashoffset: "480px",
                                                }}
                                            ></circle>
                                            <path
                                                d="M17.417,37.778l9.93,9.909l25.444-25.393"
                                                style={{
                                                    strokeDasharray: "50px, 50px",
                                                    strokeDashoffset: "0px",
                                                }}
                                            ></path>
                                        </g>
                                    </svg>
                                    <div>
                                        <h2 className="text-lg font-bold mb-2">Cảm ơn bạn đã đặt hàng</h2>
                                        <p className="mb-1">
                                            Một email xác nhận đã được gửi tới {user?.email}
                                        </p>
                                        <p>Xin vui lòng kiểm tra email của bạn</p>
                                    </div>
                                </div>
                                <div className="border p-5">
                                    <div className="flex gap-[90px] mb-7">
                                        <div>
                                            <h2 className="text-2xl font-medium mb-2">
                                                Thông tin mua hàng
                                            </h2>
                                            <p className="mb-3">{user?.name}</p>
                                            <p className="mb-3">{user?.email}</p>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-medium mb-2">Thông tin nhận hàng</h2>
                                            <p className="mb-3">{order.fullName}</p>
                                            <p className="mb-3">
                                                {order.address}
                                            </p>
                                            <p>{order.phoneNumber}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-[90px]">
                                        <div>
                                            <h2 className="text-2xl font-medium mb-2">
                                                Phương thức thanh toán
                                            </h2>
                                            <p className="">Thanh toán khi giao hàng (COD)</p>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-medium mb-2">
                                                Phương thức vận chuyển
                                            </h2>
                                            <p className="">Giao hàng tận nơi</p>
                                        </div>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        )}
                        {/* Các phần còn lại của mã bạn muốn hiển thị cho mỗi order */}
                    </React.Fragment>
                ))}
                {/* <div>
                    <div className="flex gap-5 mb-7 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="72px" height="72px">
                            <g fill="none" stroke="#8EC343" strokeWidth="2">
                                <circle
                                    cx="36"
                                    cy="36"
                                    r="35"
                                    style={{
                                        strokeDasharray: "240px, 240px",
                                        strokeDashoffset: "480px",
                                    }}
                                ></circle>
                                <path
                                    d="M17.417,37.778l9.93,9.909l25.444-25.393"
                                    style={{
                                        strokeDasharray: "50px, 50px",
                                        strokeDashoffset: "0px",
                                    }}
                                ></path>
                            </g>
                        </svg>
                        <div>
                            <h2 className="text-lg font-bold mb-2">Cảm ơn bạn đã đặt hàng</h2>
                            <p className="mb-1">
                                Một email xác nhận đã được gửi tới lequy11082003@gmail.com
                            </p>
                            <p>Xin vui lòng kiểm tra email của bạn</p>
                        </div>
                    </div>
                    <div className="border p-5">
                        <div className="flex gap-[90px] mb-7">
                            <div>
                                <h2 className="text-2xl font-medium mb-2">
                                    Thông tin mua hàng
                                </h2>
                                <p className="mb-3">Lê Đình Quý</p>
                                <p className="mb-3">lequy11082003@gmail.com</p>
                                <p>0867717003</p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-medium mb-2">Địa chỉ nhận hàng</h2>
                                <p className="mb-3">Lê Đình Quý</p>
                                <p className="mb-3">
                                    Phường Phúc Diễn, Quận Bắc Từ Liêm, Hà Nội
                                </p>
                                <p>0867717003</p>
                            </div>
                        </div>
                        <div className="flex gap-[90px]">
                            <div>
                                <h2 className="text-2xl font-medium mb-2">
                                    Phương thức thanh toán
                                </h2>
                                <p className="">Thanh toán khi giao hàng (COD)</p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-medium mb-2">
                                    Phương thức vận chuyển
                                </h2>
                                <p className="">Giao hàng tận nơi</p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div> */}
                <div className="shadow-lg rounded-lg w-[470px] p-5">
                    <span className="font-semibold mb-5 block">Đơn hàng #1042 (3)</span>
                    <div>
                        {carts?.map((cart, index) => (
                            <div className="mb-4 border-b-[1px] pb-4 flex justify-between items-center" key={index}>
                                <div className="flex gap-3 items-center" >
                                    <div className="border rounded-lg relative w-[55px] h-[55px]">
                                        <img src="./6.png" className="w-[50px] h-[50px] rounded-lg" />
                                        <p className="w-5 h-5 bg-primary absolute top-[-5px] right-[-5px] flex justify-center items-center text-sm text-white font-semibold rounded-full">
                                            {cart.quantity}
                                        </p>
                                    </div>
                                    <h3 className="font-bold">{cart.name}</h3>
                                </div>
                                <p className="font-medium">{cart.price}₫</p>
                            </div>
                        ))}
                    </div>
                    <div className="border-b-[1px]">
                        <div className="mb-4 flex justify-between">
                            <span>Tạm tính:</span>
                            <span className="font-semibold">{total}₫</span>
                        </div>
                        <div className="mb-4 flex justify-between">
                            <span>Phí vận chuyển:</span>
                            <span className="font-semibold">40.000₫</span>
                        </div>
                    </div>
                    <div className="flex justify-between mt-5">
                        <span className="text-xl font-semibold">Tổng cộng</span>
                        <span className="text-2xl font-semibold text-primary">
                            {total + 40000}₫
                        </span>
                    </div>
                </div>
            </div>
            <div className="text-center mt-10 mb-10">
                <button
                    onClick={addOrderDetail}
                    className="text-white uppercase bg-primary p-4 rounded-lg min-w-[120px]"
                >
                    Trang chủ
                </button>
                <button
                    onClick={addOrderDetail}
                    className="text-white ml-7 uppercase bg-primary p-4 rounded-lg min-w-[120px]"
                >
                    Đơn hàng của bạn
                </button>
            </div>
            {/* <button onClick={addOrderDetail}>Đơn hàng của bạn</button>
            <button onClick={addOrderDetail}>Trang chủ</button> */}
        </div>
    );
};

export default Billconfirm;