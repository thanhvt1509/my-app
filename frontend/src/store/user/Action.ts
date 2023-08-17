import { signin, signup } from "@/API/Auth";
import { SignInDispatchType, SignUpDispatchType } from "./Type";
import { SigninForm, SignupForm } from "@/models/user";

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role?: string;
}

interface IGetListUserPayload {
  users: IUser[];
}

export type GetListUserAction = {
  type: "getUser";
  payload: IGetListUserPayload;
};

export type SignUpAction = {
  type: "signup";
  payload: IUser;
};

export type SignInAction = {
  type: "signin";
  payload: IUser;
};

export type RemoveUserAction = {
  type: "removeUser";
  payload: IUser;
};

export const signUp = (user: SignupForm) => {
  return async (dispatch: SignUpDispatchType) => {
    try {
      const { data } = await signup(user);
      dispatch({
        type: "signup",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const signIn = (user: SigninForm) => {
  return async (dispatch: SignInDispatchType) => {
    try {
      const { data } = await signin(user);
      dispatch({
        type: "signin",
        payload: data,
      });

      // Trả về giá trị data để nó được sử dụng trong hàm signIn
      return data;
    } catch (error) {
      console.log("Error in signIn:", error);
      throw error; // Ném lỗi để xử lý ở nơi gọi hàm signIn
    }
  };
};
