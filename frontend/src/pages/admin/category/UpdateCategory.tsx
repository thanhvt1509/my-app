import { categoryForm, categorySchema } from "@/model/category";
import { productForm } from "@/model/product";
import { IRootState } from "@/store";
import { editCategoryAction, fetchOneCategoryAction } from "@/store/categories/Action";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dispatch, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateCategory = () => {
  const { id } = useParams()
  const dispatch: Dispatch<any> = useDispatch()
  const categotyState = useSelector((state: IRootState) => state.category)

  const navigate = useNavigate();

  // console.log(productState.product.categoryId);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<categoryForm>({
    resolver: yupResolver(categorySchema),
  });

  const onSubmit = async (category: categoryForm) => {
    const cf = confirm('Bạn có xác nhận muốn sửa danh mục không ?')
    if (cf == true) {
      try {
        if (id) {
          await dispatch(editCategoryAction(id, category));
        }
        navigate("/admin/category");
        alert("Sửa danh mục thành công");
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    dispatch(fetchOneCategoryAction(id));
  }, [])

  useEffect(() => {
    // Khi productState thay đổi, đặt giá trị mặc định cho form
    if (categotyState) {
      setValue("name", categotyState.category.name); // Gán giá trị cho trường 'name'
      setValue("image", categotyState.category.image); // Gán giá trị cho trường 'price'
      setValue("description_long", categotyState.category.description_long); // Gán giá trị cho trường 'price'
      // Tiếp tục gán giá trị cho các trường khác (nếu có)
    }
  }, [categotyState, setValue]);
  return (
    <div className="">
      <Link
        to={"/admin/category"}
        className="px-5 py-4 font-medium text-white bg-green-500 rounded-lg shadow-lg shadow-green-500/50"
      >
        List category
      </Link>
      <h1 className="mb-10 text-3xl font-medium text-center text-white">
        Thông tin danh mục
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tên danh mục
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tai nghe airpod"
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ảnh danh mục
            </label>
            <input
              type="text"
              id="image"
              {...register("image")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Mô tả
          </label>
          <textarea
            id="description_long"
            {...register("description_long")}
            className="block p-2.5 h-52 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update category
        </button>
      </form>
    </div>
  );
};

export default UpdateCategory;
