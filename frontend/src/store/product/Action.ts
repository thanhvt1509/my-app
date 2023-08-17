import { addProduct, deleteProduct, getAll, getAllByName, getOne, updateProduct } from "@/API/Products"
import { addProductDispatchType, deleteProductDispatchType, getListByNameDispatchType, getListDispatchType, getOneDispatchType, updateProductDispatchType } from "./Type"

export interface IProduct {
    _id: string
    name: string
    price: number
    description_long: string
    images: string[]
    categoryId: { _id: string, products: IProduct[] }
    deleted: boolean
}
interface IGetProductPayload {
    products: IProduct[]
}


interface IgetOneProductPayload {
    product: IProduct
}

export type GetProductsAction = {
    type: "getAll-product",
    payload: IGetProductPayload
}

export type GetProductsByNameAction = {
    type: "getAllByName-product",
    payload: IGetProductPayload
}

export type GetProductAction = {
    type: "getOne-product"
    payload: IgetOneProductPayload
}

export type AddProductAction = {
    type: "add-product"
    payload: IgetOneProductPayload
}

export type UpdateProductAction = {
    type: "update-product"
    payload: IgetOneProductPayload
}

export type DeleteProductAction = {
    type: "delete-product"
    payload: IgetOneProductPayload
}

export const fetchProductAction = () => {
    return async (dispatch: getListDispatchType) => {
        try {
            const { data } = await getAll()
            dispatch({
                type: "getAll-product",
                payload: {
                    products: data
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}

// tìm kiếm sản phẩm theo tên
export const fetchProducByNametAction = (name: string) => {
    return async (dispatch: getListByNameDispatchType) => {
        try {
            const { data } = await getAllByName(name)
            // const { data: product } = await getAll()
            // console.log(product);
            // console.log(data);

            dispatch({
                type: "getAllByName-product",
                payload: {
                    products: data
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const fetOneProductAction = (id: string | undefined) => {
    return async (dispatch: getOneDispatchType) => {
        try {
            const { data: { data } } = await getOne(id)
            // console.log(data);
            dispatch({
                type: "getOne-product",
                payload: {
                    product: data
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}

// thêm sản phẩm mới
export const addNewProductAction = (product: IProduct) => {
    return async (dispatch: addProductDispatchType) => {
        try {
            const { data } = await addProduct(product)
            // console.log(data);

            dispatch({
                type: "add-product",
                payload: {
                    product: data
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}

// update sản phẩm
export const editProductAction = (id: string | number, product: IProduct) => {
    return async (dispatch: updateProductDispatchType) => {
        try {
            const { data } = await updateProduct(id, product)
            // console.log(data);

            dispatch({
                type: "update-product",
                payload: {
                    product: data
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}

// delete sản phẩm
export const removeProductAction = (id: string | number) => {
    return async (dispatch: deleteProductDispatchType) => {
        try {
            const { data } = await deleteProduct(id)
            // const { data: products } = await getAll()
            // const product = products.filter(product => product._id != data.id)
            // console.log(product);

            dispatch({
                type: "delete-product",
                payload: {
                    product: data
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}