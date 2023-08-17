import { AddCategoryAction, DeleteCategoryAction, GetCategoryAction, GetOneCategoryAction, UpdateCategoryAction } from "./Action";

export type getListCategoryDispatchType = (args: GetCategoryAction) => GetCategoryAction
export type getOneCategoryDispatchType = (args: GetOneCategoryAction) => GetOneCategoryAction
export type addCategoryDispatchType = (args: AddCategoryAction) => AddCategoryAction
export type updateCategoryDispatchType = (args: UpdateCategoryAction) => UpdateCategoryAction
export type deleteCategoryDispatchType = (args: DeleteCategoryAction) => DeleteCategoryAction