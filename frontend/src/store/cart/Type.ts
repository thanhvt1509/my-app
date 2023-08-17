import { AddCartAction, CartDecAction, CartIncrementAction, DeleteCartAction } from "./Action";

export type AddCartDispatchType = (args: AddCartAction) => AddCartAction
export type CartIncreDispatchType = (args: CartIncrementAction) => CartIncrementAction
export type CartDecDispatchType = (args: CartDecAction) => CartDecAction
export type DeleteCartDispatchType = (args: DeleteCartAction) => DeleteCartAction