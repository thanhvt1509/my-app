import { SigninForm, SignupForm } from "@/models/user";
import instence from "./instence";

export const signup = (data: SignupForm) => {
  const uri = "/signup";
  return instence.post(uri, data);
};

export const signin = (data: SigninForm) => {
  const uri = "/signin";
  return instence.post(uri, data);
};
