import * as Yup from "yup";

export const signupSchema = Yup.object({
  name: Yup.string().required("Trường name là bắt buộc"),
  email: Yup.string()
    .email("Email sai định dạng")
    .required("Trường email là bắt buộc"),
  password: Yup.string()
    .min(6, "Mật khẩu phải ít nhất 6 kí tự")
    .required("Trường password là bắt buộc"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Mật khẩu không khớp"
  ),
});

export type SignupForm = Yup.InferType<typeof signupSchema>;

export const signinSchema = Yup.object({
  email: Yup.string()
    .email("Email sai định dạng")
    .required("Trường email là bắt buộc"),
  password: Yup.string()
    .min(6, "Mật khẩu phải ít nhất 6 kí tự")
    .required("Trường password là bắt buộc"),
});

export type SigninForm = Yup.InferType<typeof signinSchema>;
