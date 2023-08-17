import instence from "./instence";
import { IOrderDetail } from "@/store/oder-detail/Action";

// lấy tất cả các orders
export const getAll = (id: string | undefined) => {
    return instence.get(`/order_details/${id}`)
}

// thêm chi tiết hóa đơn
export const add = (orderDetail: IOrderDetail) => {
    return instence.post(`/order_details`, orderDetail)
}