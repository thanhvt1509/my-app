// import { AddCartAction } from './../order/Action';
import { AddCartAction, CartDecAction, CartIncrementAction, DeleteCartAction } from "./Action"

export interface ICart {
    productID: string
    quantity: number
    image: string
    name: string
    price: number
}

export interface ICartState {
    carts: ICart[]
}

const initCartState: ICartState = {
    carts: []
}

type ICombinedCartAction = AddCartAction | CartIncrementAction | CartDecAction | DeleteCartAction
const cartReducer = (state: ICartState = initCartState, action: ICombinedCartAction): ICartState => {
    switch (action.type) {
        case "add-cart":
            const cartExistCart = state.carts.findIndex(cart => cart.productID === action.payload._id)
            // console.log(cartExistCart);
            if (cartExistCart === -1) {
                state = {
                    ...state,
                    carts: [{
                        productID: action.payload._id,
                        name: action.payload.name,
                        quantity: 1,
                        price: action.payload.price,
                        image: action.payload.images?.[0],
                    }, ...state.carts]
                }
                // localStorage.setItem("cartItems", JSON.stringify(state.carts))
            } else {
                state.carts[cartExistCart].quantity += 1
                state = {
                    ...state,
                    carts: state.carts
                }
            }
            break
        case "cart-increment":
            const cartStore = JSON.parse(localStorage.getItem("cartItems")!)
            if (cartStore) {
                state.carts = cartStore
            }
            const cartUpdateQuantity = state.carts.findIndex(cart => cart.productID === action.payload.productID)
            state.carts[cartUpdateQuantity].quantity++
            state = {
                ...state,
                carts: state.carts
            }
            break
        case "cart-dec":
            const cartLocal = JSON.parse(localStorage.getItem("cartItems")!)
            // console.log(cartLocal);
            if (cartLocal) {
                state.carts = cartLocal
            }
            const cartDec = state.carts.findIndex(cart => cart.productID === action.payload.productID)
            // if (state.carts[cartDec].quantity > 1) {
            state.carts[cartDec].quantity--
            state = {
                ...state,
                carts: state.carts
            }
            // }
            if (state.carts[cartDec].quantity < 1) {
                const confirm = window.confirm("Ban muon xoa san pham nay khong?");
                if (confirm) {
                    let setCartLocal = JSON.parse(localStorage.getItem("cartItems")!)
                    state.carts = setCartLocal.filter((product: ICart) => product.productID != state.carts[cartDec].productID)
                    localStorage.setItem("cartItems", JSON.stringify(state.carts))
                } else {
                    state.carts[cartDec].quantity++
                }
            }
            break
        case "cart-delete":
            state = {
                ...state,
                carts: state.carts
            }
            const confirm = window.confirm("Ban muon xoa san pham nay khong?");
            if (confirm) {
                const cartDelete = state.carts.findIndex(cart => cart.productID === action.payload.productID)
                let setCartLocal = JSON.parse(localStorage.getItem("cartItems")!)
                state.carts = setCartLocal.filter((product: ICart) => product.productID != state.carts[cartDelete].productID)
                localStorage.setItem("cartItems", JSON.stringify(state.carts))
            }
            break
    }
    return state
}

export default cartReducer