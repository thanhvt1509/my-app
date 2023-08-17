import { add, get, getAll, getOrder, update } from "@/API/Orders";
import { IOrderDetail } from "../oder-detail/Action";
import { addOrderDispatchType, getOneOrderDispatchType, getOrderDispatchType, getUserOrderDispatchType, updateOrderDispatchType } from "./Type";
import { IProduct } from "../product/Action"
// import { AddCartDispatchType } from "./Type"
// export interface AddCartAction {
//     type: "add-cart"
//     payload: IProduct
// }
export interface IOrder {
    _id: string | undefined,
    userId: string
    fullName: string;
    email: string;
    phoneNumber: string;
    address: string;
    note: string;
    orderDate: Date
    status: number;
    totalMoney: number;
    orderDetail: IOrderDetail[]
}

interface IGetOrderPayload {
    orders: IOrder[]
}

interface IGetOneOrderPayload {
    order: IOrder
}

export type GetOrdersAction = {
    type: 'getAll-Order'
    payload: IGetOrderPayload
}

export type GetUserOrdersAction = {
    type: 'getAll-UserOrder'
    payload: IGetOrderPayload
}

export type GetOneOrderAction = {
    type: 'getOne-Order'
    payload: IGetOneOrderPayload
}

export type AddOrderAction = {
    type: 'add-Order'
    payload: IGetOneOrderPayload
}

export type UpdateOrderAction = {
    type: 'update-Order'
    payload: IGetOneOrderPayload
}

export const fetchOrderAction = () => {
    return async (dispatch: getOrderDispatchType) => {
        try {
            const { data } = await getAll()

            dispatch({
                type: "getAll-Order",
                payload: {
                    orders: data
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}

// lấy hóa đơn của 1 user
export const fetchUserOrderAction = (id: string | undefined) => {
    return async (dispatch: getUserOrderDispatchType) => {
        try {
            const { data: { data } } = await getOrder(id)
            // console.log(data);

            dispatch({
                type: "getAll-UserOrder",
                payload: {
                    orders: data
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const fetchOneOrderAction = (id: string | undefined) => {
    return async (dispatch: getOneOrderDispatchType) => {
        try {
            const { data: { data } } = await get(id)
            // console.log(data);

            dispatch({
                type: "getOne-Order",
                payload: {
                    order: data
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const addOrderAction = (order: IOrder) => {
    return async (dispatch: addOrderDispatchType) => {
        try {
            const { data } = await add(order)
            console.log(data);

            dispatch({
                type: "add-Order",
                payload: {
                    order: data
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}

// update trạng thái
export const editOrderAction = (id: string | undefined, order: IOrder) => {
    return async (dispatch: updateOrderDispatchType) => {
        try {
            const { data } = await update(id, order)
            // console.log(data);

            dispatch({
                type: "update-Order",
                payload: {
                    order: data
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}

