import { IOrder } from "@/store/order/Action";
import instence from "./instence";

// lấy tất cả các orders
export const getAll = () => {
    return instence.get('/orders')
}

// lấy 1 hóa đơn
export const get = (id: string | undefined) => {
    return instence.get(`/orders/${id}`)
}

// lấy ra tất cả hóa đơn của 1 user
export const getOrder = (id: string | undefined) => {
    return instence.get(`/user_orders/${id}`)
}

// thêm 1 hóa đơn
export const add = (order: IOrder) => {
    return instence.post(`/orders`, order)
}

// xác nhận đơn
export const update = (id: string | undefined, order: IOrder) => {
    return instence.patch(`/orders/${id}`, order)
}
