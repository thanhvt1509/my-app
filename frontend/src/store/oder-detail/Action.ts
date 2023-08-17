import { add, getAll } from "@/API/OrderDetails"
import { addOrderDetailDispatchType, getOrderDetailDispatchType } from "./Type"

export interface IOrderDetail {
    _id: string,
    orderId: string,
    productId: string,
    price: number,
    quantity: number,
    totalMoney: number
}


interface IOrderDetailPayload {
    orderDetails: IOrderDetail[]
}

interface IOneOrderDetailPayload {
    orderDetail: IOrderDetail
}

export type GetOrderDetailAction = {
    type: "getAll-OrderDetail"
    payload: IOrderDetailPayload
}

export type AddOrderDetailAction = {
    type: "add-OrderDetail"
    payload: IOneOrderDetailPayload
}

export const fetchOrderDetailAction = (id: string | undefined) => {
    return async (dispatch: getOrderDetailDispatchType) => {
        try {
            const { data: { data: { orderDetail } } } = await getAll(id)
            dispatch({
                type: "getAll-OrderDetail",
                payload: {
                    orderDetails: orderDetail
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}


export const addOrderDetailAction = (orderDetail: IOrderDetail) => {
    return async (dispatch: addOrderDetailDispatchType) => {
        try {
            const { data } = await add(orderDetail)
            // console.log(data);

            dispatch({
                type: "add-OrderDetail",
                payload: {
                    orderDetail: orderDetail
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}
