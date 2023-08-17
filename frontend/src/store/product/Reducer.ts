
import { AddProductAction, DeleteProductAction, GetProductAction, GetProductsAction, GetProductsByNameAction, IProduct, UpdateProductAction } from "./Action";
export interface IProductState {
    products: IProduct[]
}

export interface IOneProductState {
    product: IProduct
}

const initProductState: IProductState = {
    products: []
}
const initOneProductState: IOneProductState = {
    product: {} as IProduct
}

type ICombinedProductAction = GetProductsAction | GetProductsByNameAction | GetProductAction | AddProductAction | UpdateProductAction | DeleteProductAction
type ICombinedProductState = IProductState | IOneProductState
const productReducer = (state: ICombinedProductState = initProductState, action: ICombinedProductAction) => {
    switch (action.type) {
        case "getAll-product":
            state = {
                ...state,
                products: action.payload.products
            }
            break;
        case "getAllByName-product":
            state = {
                ...state,
                products: action.payload.products
            }
            break;
        case "getOne-product":
            state = {
                ...state,
                product: action.payload.product
            }
            break;
        case "add-product":
            state = {
                ...state,
                product: action.payload.product
            }
            break;
        case "update-product":
            state = {
                ...state,
                product: action.payload.product
            }
            break;
        case "delete-product":
            state = {
                ...state,
                // products: initProductState.products.filter(product => product._id == action.payload.product._id)
                product: action.payload.product
            }
            break;
    }
    return state
}

export default productReducer