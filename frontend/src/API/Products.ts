import { IProduct } from "@/store/product/Action";
import instence from "./instence";

const token = JSON.parse(localStorage.getItem("user")!)?.accessToken;

export const getAll = () => {
    return instence.get("/products")
}

export const getAllByName = (name: string) => {
    return instence.get(`/products?_search=${name}`)
}

export const getOne = (id: string | undefined) => {
    return instence.get(`/products/${id}`)
}

export const addProduct = (product: IProduct) => {
    return instence.post(`/products`, product, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export const updateProduct = (id: string | number, product: IProduct) => {
    return instence.put(`/products/${id}`, product, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export const deleteProduct = (id: string | number) => {
    return instence.delete(`/products/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}