import { IRootState } from "@/store";
import { editOrderAction, fetchUserOrderAction } from "@/store/order/Action";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Dispatch } from "redux";

const MyOrder = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const navigate = useNavigate();
    const orderState = useSelector((state: IRootState) => state.orders)
    const userId = JSON.parse(localStorage.getItem("user")!)?._id;
    // console.log(orderState.orders);
    const OrderStatus = (status: number): string => {
        let tt: string = ''
        switch (status) {
            case 0:
                tt = "Đã hủy đơn hàng"
                break;
            case 1:
                tt = "Chờ xác nhận"
                break;
            case 2:
                tt = "Đang chuẩn bị hàng"
                break;
            case 3:
                tt = "Đang giao bị hàng"
                break;
            case 4:
                tt = "Đã nhận hàng"
                break;
        }
        return tt
    }

    const remove = (id: string | undefined) => {
        const cf = confirm('Bạn xác nhận muốn hủy đơn hàng này ?')
        if (cf == true) {
            try {
                const order = {
                    status: 0
                }
                dispatch(editOrderAction(id, order))
                alert("Đã hủy đơn hàng");
                // navigate('/my-order')
            } catch (error) {
                console.log(error);
            }
        }
    }

    const update = (id: string | undefined) => {
        const cf = confirm('Bạn xác nhận đã nhận được hàng ?')
        if (cf == true) {
            try {
                const order = {
                    status: 4
                }
                dispatch(editOrderAction(id, order))
                alert("Đã hủy đơn hàng");
                // navigate('/my-order')
            } catch (error) {
                console.log(error);
            }
        }
    }
    // console.log(orderState.orders);


    useEffect(() => {
        dispatch(fetchUserOrderAction(userId))
    }, [])
    return (
        <div className="container">
            <h1 className="uppercase mt-10 text-xl font-semibold">
                Đơn hàng của bạn
            </h1>
            <div className="mt-7 relative mb-10 overflow-x-auto">
                <form action="">

                    <table className="w-full text-sm font-medium border text-left text-gray-500 ">
                        <thead className="text-xs bg-primary text-white uppercase">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Người nhận
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Số điện thoại
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Địa chỉ
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Giá trị đơn hàng
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Trạng thái thanh toán
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderState?.orders?.map((order, index) => (

                                <tr className="bg-white border-b" key={index}>
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium whitespace-nowrap text-blue-500"
                                    >
                                        {order.fullName}
                                    </th>
                                    <td className="px-6 py-4">{order.phoneNumber}</td>
                                    <td className="px-6 py-4">{order.address}</td>
                                    <td className="px-6 py-4">{order.totalMoney}</td>
                                    <td className="px-6 py-4 text-yellow-500">
                                        {OrderStatus(order.status)}
                                        {order.status == 1 && <button
                                            type="submit"
                                            onClick={() => remove(order._id)}
                                            className="w-full mx-5 px-5 py-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Hủy đơn hàng
                                        </button>}
                                        {order.status == 3 && <button
                                            type="submit"
                                            onClick={() => update(order._id)}
                                            className="w-full mx-5 px-5 py-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Đã nhận hàng
                                        </button>}
                                    </td>
                                    {/* { order.status == 1 && <td className="px-6 py-4 text-yellow-500">Hủy</td> } */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </form>
            </div>
        </div >
    );
};

export default MyOrder;