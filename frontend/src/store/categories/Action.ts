import { addCategoryDispatchType, deleteCategoryDispatchType, getListCategoryDispatchType, getOneCategoryDispatchType, updateCategoryDispatchType } from "./Type"
import { addCategory, deleteCategory, getAllCategory, getOneCateogrory, updateCategory } from "@/API/Categories"
import { IProduct } from "../product/Action"

export interface ICategory {
    _id: string
    name: string
    image: string
    description_long: string
    products: IProduct[]
}

interface IGetCategoryPayload {
    categories: ICategory[]
}

interface IGetOneCategoryPayload {
    category: ICategory
}

export type GetCategoryAction = {
    type: "get-category",
    payload: IGetCategoryPayload
}

export type GetOneCategoryAction = {
    type: "getOne-category",
    payload: IGetOneCategoryPayload
}

export type AddCategoryAction = {
    type: "add-category"
    payload: IGetOneCategoryPayload
}

export type UpdateCategoryAction = {
    type: "update-category"
    payload: IGetOneCategoryPayload
}

export type DeleteCategoryAction = {
    type: "delete-category"
    payload: IGetOneCategoryPayload
}

export const fetchCategoryAction = () => {
    return async (dispatch: getListCategoryDispatchType) => {
        try {
            const { data } = await getAllCategory()
            // console.log(data);

            dispatch({
                type: "get-category",
                payload: {
                    categories: data
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export const fetchOneCategoryAction = (id: string | undefined) => {
    return async (dispatch: getOneCategoryDispatchType) => {
        try {
            const { data: { category } } = await getOneCateogrory(id)
            // console.log(category);

            dispatch({
                type: "getOne-category",
                payload: {
                    category: category
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}

// thêm danh mục mới
export const addNewCategoryAction = (category: ICategory) => {
    return async (dispatch: addCategoryDispatchType) => {
        try {
            const { data } = await addCategory(category)
            // console.log(data);

            dispatch({
                type: "add-category",
                payload: {
                    category: data
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}

// update danh mục
export const editCategoryAction = (id: string | number, category: ICategory) => {
    return async (dispatch: updateCategoryDispatchType) => {
        try {
            const { data } = await updateCategory(id, category)
            // console.log(data);

            dispatch({
                type: "update-category",
                payload: {
                    category: data
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}

// delete danh mục
export const removeCategoryAction = (id: string | number) => {
    return async (dispatch: deleteCategoryDispatchType) => {
        try {
            const { data } = await deleteCategory(id)
            // const { data: products } = await getAll()
            // const product = products.filter(product => product._id != data.id)
            // console.log(product);

            dispatch({
                type: "delete-category",
                payload: {
                    category: data
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}
