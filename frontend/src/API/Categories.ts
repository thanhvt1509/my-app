import { ICategory } from "@/store/categories/Action";
import instence from "./instence"

const token = JSON.parse(localStorage.getItem("user")!)?.accessToken;

export const getAllCategory = () => {
    return instence.get("/categories")
}
export const getOneCateogrory = (id: string | undefined) => {
    return instence.get(`/categories/${id}`)
}

export const addCategory = (category: ICategory) => {
    return instence.post(`/categories`, category, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export const updateCategory = (id: string | number, category: ICategory) => {
    return instence.put(`/categories/${id}`, category, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export const deleteCategory = (id: string | number) => {
    return instence.delete(`/categories/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}