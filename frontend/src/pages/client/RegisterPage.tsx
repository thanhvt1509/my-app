import BreadCrumb from "@/components/BreadCrumb";
import { signUp } from "@/store/user/Action";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Dispatch } from "redux";
import { useForm } from "react-hook-form";
import { SignupForm, signupSchema } from "@/models/user";
import { yupResolver } from "@hookform/resolvers/yup";

const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: yupResolver(signupSchema),
  });

  const dispatch: Dispatch<any> = useDispatch();

  const signup = async (data: SignupForm) => {
    try {
      await dispatch(signUp(data));
      navigate("/login");
      toast.success("Đăng ký thành công");
    } catch (error) {
      toast.error("Đăng ký thất bại");
    }
  };
  return (
    <div className="container">
      <div className="mb-10">
        <BreadCrumb></BreadCrumb>
        <form className="text-center mt-[80px]" onSubmit={handleSubmit(signup)}>
          <div className="heading">
            <h1 className="text-[26px] mb-[25px]">Đăng ký</h1>
            <p className="mb-5">
              Đã có tài khoản,{" "}
              <Link to="/login" className="hover:text-primary">
                đăng nhập tại đây
              </Link>
            </p>
          </div>
          <div className="mb-[18px]">
            <div className="mb-[18px]">
              <input
                type="text"
                placeholder="Họ tên"
                className="w-[330px] border border-gray-200 px-4 py-3 mb-2"
                {...register("name")}
              />
              <p className="font-medium text-sm text-red-500">
                {errors.name && errors.name.message}
              </p>
            </div>
            <div className="mb-[18px]">
              <input
                type="email"
                placeholder="Email"
                className="w-[330px] border border-gray-200 px-4 py-3 mb-2"
                {...register("email")}
              />
              <p className="font-medium text-sm text-red-500">
                {errors.email && errors.email.message}
              </p>
            </div>
            <div className="mb-[18px]">
              <input
                type="password"
                placeholder="Mật khẩu"
                className="w-[330px] border border-gray-200 px-4 py-3 mb-2"
                {...register("password")}
              />
              <p className="font-medium text-sm text-red-500">
                {errors.password && errors.password.message}
              </p>
            </div>
            <div className="mb-[18px]">
              <input
                type="password"
                placeholder="Nhập lại mật khẩu"
                className="w-[330px] border border-gray-200 px-4 py-3 mb-2"
                {...register("confirmPassword")}
              />
              <p className="font-medium text-sm text-red-500">
                {errors.confirmPassword && errors.confirmPassword.message}
              </p>
            </div>
          </div>
          <button className="w-[330px] bg-primary text-white py-3 mb-4">
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
