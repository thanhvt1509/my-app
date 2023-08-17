import { AddCategoryAction, DeleteCategoryAction, GetCategoryAction, GetOneCategoryAction, ICategory, UpdateCategoryAction } from "./Action";

export interface ICategoryState {
    categories: ICategory[]
}

export interface IOneCategoryState {
    category: ICategory
}

const initCategoryState: ICategoryState = {
    categories: []
}

const initOneCategoryState: IOneCategoryState = {
    category: {} as ICategory
}

type combinedCategoryAction = GetCategoryAction | GetOneCategoryAction | AddCategoryAction | UpdateCategoryAction | DeleteCategoryAction
type combinedCategoryState = ICategoryState | IOneCategoryState
const categoryReducer = (state: combinedCategoryState = initCategoryState && initOneCategoryState, action: combinedCategoryAction) => {
    switch (action.type) {
        case "get-category":
            state = {
                ...state,
                categories: action.payload.categories
            }
            break;
        case "getOne-category":
            state = {
                ...state,
                category: action.payload.category
            }
            break;
        case "add-category":
            state = {
                ...state,
                category: action.payload.category
            }
            break;
        case "update-category":
            state = {
                ...state,
                category: action.payload.category
            }
            break;
        case "delete-category":
            state = {
                ...state,
                // categorys: initcategoryState.categorys.filter(category => category._id == action.payload.category._id)
                category: action.payload.category
            }
            break;
    }
    return state
}

export default categoryReducer