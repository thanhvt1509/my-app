import { IRootState } from "@/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { fetchCategoryAction } from "@/store/categories/action";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { Dispatch } from "redux";
import { productForm, productSchema } from "@/model/product";
import { addNewProductAction } from "@/store/product/Action";

const AddProduct = () => {
  const dispatch: Dispatch<any> = useDispatch()
  const categotyState = useSelector((state: IRootState) => state.categories)
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<productForm>({
    resolver: yupResolver(productSchema),
  });

  const onSubmit = async (product: productForm) => {
    try {
      const imagesArray = product.images.split(",").map((url) => url.trim());
      const productWithArrayImages = { ...product, images: imagesArray };
      await dispatch(addNewProductAction(productWithArrayImages));
      // console.log(product);
      navigate("/admin/product");
      alert("Thêm sản phẩm thành công");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dispatch(fetchCategoryAction())
  }, [])
  return (
    <div className="">
      <Link
        to={"/admin/product"}
        className="px-5 py-4 font-medium text-white bg-green-500 rounded-lg shadow-lg shadow-green-500/50"
      >
        List product
      </Link>
      <h1 className="mb-10 text-3xl font-medium text-center text-white">
        Thông tin sản phẩm
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tên sản phẩm
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tai nghe airpod"
            />
            <p className="text-xs text-red-500">
              {errors.name && errors.name.message}
            </p>
          </div>
          <div>
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ảnh sản phẩm
            </label>
            <input
              type="text"
              id="images"
              {...register("images")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <p className="text-xs text-red-500">
              {errors.images && errors.images.message}
            </p>
          </div>
          <div>
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              {...register("price")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123.434.000"
            />
            <p className="text-xs text-red-500">
              {errors.price && errors.price.message}
            </p>
          </div>
          <div>
            <label
              htmlFor="origin"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Danh mục
            </label>
            <select
              id="categoryId"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("categoryId")}
            >
              <option>Choose a category</option>
              {categotyState?.categories?.map((category) => (
                <option value={category._id}>{category.name}</option>
              ))}
            </select>
            <p className="text-xs text-red-500">
              {errors.categoryId && errors.categoryId.message}
            </p>
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="description_long"
            {...register("description_long")}
            className="block p-2.5 h-52 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
          <p className="text-xs text-red-500">
            {errors.description_long && errors.description_long.message}
          </p>
        </div>
        <button
          type="submit"
          className="w-full px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
