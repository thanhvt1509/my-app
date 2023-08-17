import { IUser, SignInAction, SignUpAction } from "./Action";

export interface IUserState {
  users: IUser[];
}

const initialState: IUserState = {
  users: [],
};

type ICombinedAction = SignUpAction | SignInAction;

const userReducer = (
  state: IUserState = initialState,
  action: ICombinedAction
): IUserState => {
  switch (action.type) {
    case "signup":
      state = {
        ...state,
        users: [...state.users, action.payload],
      };
      break;
    case "signin":
      state = {
        ...state,
        users: [...state.users, action.payload],
      };
      break;
  }
  return state;
};

export default userReducer;
