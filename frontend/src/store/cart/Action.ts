import { IProduct } from "../product/Action"
import { ICart } from "./Reducer"
import { AddCartDispatchType, CartDecDispatchType, CartIncreDispatchType, DeleteCartDispatchType } from "./Type"

export interface AddCartAction {
    type: "add-cart"
    payload: IProduct
}
export interface CartIncrementAction {
    type: "cart-increment"
    payload: ICart
}
export interface CartDecAction {
    type: "cart-dec"
    payload: ICart
}
export interface DeleteCartAction {
    type: "cart-delete"
    payload: ICart
}

export function CartAction(product: IProduct) {
    const action: AddCartAction = {
        type: "add-cart",
        payload: product
    }
    return (dispatch: AddCartDispatchType) => {
        dispatch(action)
    }
}
export function CartDelete(product: ICart) {
    const action: DeleteCartAction = {
        type: "cart-delete",
        payload: product
    }
    return (dispatch: DeleteCartDispatchType) => {
        dispatch(action)
    }
}
export function CartIncrement(product: ICart) {
    const action: CartIncrementAction = {
        type: "cart-increment",
        payload: product
    }
    return (dispatch: CartIncreDispatchType) => {
        dispatch(action)
    }
}
export function CartDec(product: ICart) {
    const action: CartDecAction = {
        type: "cart-dec",
        payload: product
    }
    return (dispatch: CartDecDispatchType) => {
        dispatch(action)
    }
}

export default CartAction