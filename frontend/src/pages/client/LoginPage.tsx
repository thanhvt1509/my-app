import BreadCrumb from "@/components/BreadCrumb";
import { signIn } from "@/store/user/Action";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Dispatch } from "redux";
import { useForm } from "react-hook-form";
import { SigninForm, signinSchema } from "@/models/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useSelector } from "react-redux";
import { IRootState } from "@/store";

const LoginPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninForm>({
    resolver: yupResolver(signinSchema),
  });

  const [user, setUser] = useLocalStorage("user", null);

  const dispatch: Dispatch<any> = useDispatch();

  const signin = async (data: SigninForm) => {
    // const userState = useSelector((state: IRootState) => state.users);
    try {
      const datas = await dispatch(signIn(data));
      const { accessToken, user } = datas;
      setUser({ accessToken, ...user });
      toast.success("Đăng nhập thành công");
      navigate("/admin");
    } catch (error) {
      toast.error("Đăng nhập thất bại");
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="mb-10">
        <BreadCrumb></BreadCrumb>
        <form className="text-center mt-[80px]" onSubmit={handleSubmit(signin)}>
          <div className="heading">
            <h1 className="text-[26px] mb-[25px]">Đăng nhập</h1>
            <p className="mb-5">
              Nếu bạn chưa có tài khoản,{" "}
              <Link to="/register" className="hover:text-primary">
                đăng kí tại đây
              </Link>
            </p>
          </div>
          <div className="mb-[18px]">
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
          </div>
          <button className="w-[330px] bg-primary text-white py-3 mb-4">
            Đăng nhập
          </button>
          <Link to="" className="block">
            Quên mật khẩu
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
