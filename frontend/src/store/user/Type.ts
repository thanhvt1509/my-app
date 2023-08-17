import {
  GetListUserAction,
  RemoveUserAction,
  SignInAction,
  SignUpAction,
} from "./Action";

export type GetListDispatchType = (
  args: GetListUserAction
) => GetListUserAction;

export type SignUpDispatchType = (args: SignUpAction) => SignUpAction;
export type SignInDispatchType = (args: SignInAction) => SignInAction;

export type RemoveUserDispatchType = (
  args: RemoveUserAction
) => RemoveUserAction;
