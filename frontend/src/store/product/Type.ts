import { AddProductAction, DeleteProductAction, GetProductAction, GetProductsAction, GetProductsByNameAction, UpdateProductAction } from "./Action";

export type getListDispatchType = (args: GetProductsAction) => GetProductsAction
export type getListByNameDispatchType = (args: GetProductsByNameAction) => GetProductsByNameAction
export type getOneDispatchType = (args: GetProductAction) => GetProductAction
export type addProductDispatchType = (args: AddProductAction) => AddProductAction
export type updateProductDispatchType = (args: UpdateProductAction) => UpdateProductAction
export type deleteProductDispatchType = (args: DeleteProductAction) => DeleteProductAction