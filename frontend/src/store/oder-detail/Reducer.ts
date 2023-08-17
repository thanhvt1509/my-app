import { AddOrderDetailAction, GetOrderDetailAction, IOrderDetail } from "./Action"

export interface IOrderDetailState {
    orderDetails: IOrderDetail[]
}

export interface IOneOrderDetailState {
    orderDetail: IOrderDetail
}

const initOrderDetailState: IOrderDetailState = {
    orderDetails: []
}

const initOneOrderDetailState: IOneOrderDetailState = {
    orderDetail: {} as IOrderDetail
}

type ICombinedOrderDetailAction = GetOrderDetailAction | AddOrderDetailAction
type ICombinedOrderDetailState = IOrderDetailState | IOneOrderDetailState

const orderDetailReducer = (state: ICombinedOrderDetailState = initOrderDetailState && initOneOrderDetailState, action: ICombinedOrderDetailAction) => {
    switch (action.type) {
        case "getAll-OrderDetail":
            state = {
                ...state,
                orderDetails: action.payload.orderDetails
            }
            break;
        case "add-OrderDetail":
            state = {
                ...state,
                orderDetail: action.payload.orderDetail
            }
            break;
    }
    return state
}

export default orderDetailReducer