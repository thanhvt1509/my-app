import { productForm, productSchema } from "@/model/product";
import { IRootState } from "@/store";
import { fetchCategoryAction } from "@/store/categories/Action";
import { editProductAction, fetOneProductAction } from "@/store/product/Action";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Dispatch } from "redux";

const UpdateProduct = () => {
  const { id } = useParams()
  const dispatch: Dispatch<any> = useDispatch()
  const productState = useSelector((state: IRootState) => state.product)
  const categotyState = useSelector((state: IRootState) => state.categories)

  const navigate = useNavigate();

  // console.log(productState?.product?.categoryId);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<productForm>({
    resolver: yupResolver(productSchema),
  });

  const onSubmit = async (product: productForm) => {
    const cf = confirm('Bạn xác nhận muốn hủy đơn hàng này ?')
    if (cf == true) {
      try {
        const imagesArray = product.images.split(",").map((url) => url.trim());
        const productWithArrayImages = { ...product, images: imagesArray };

        if (id) {
          await dispatch(editProductAction(id, productWithArrayImages));
        }
        console.log(product);
        navigate("/admin/product");
        alert("Sửa sản phẩm thành công");
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    dispatch(fetOneProductAction(id));
    dispatch(fetchCategoryAction())
  }, [])

  useEffect(() => {
    // Khi productState thay đổi, đặt giá trị mặc định cho form
    if (productState) {
      setValue("name", productState?.product?.name); // Gán giá trị cho trường 'name'
      setValue("price", productState?.product?.price); // Gán giá trị cho trường 'price'
      setValue("images", productState?.product?.images); // Gán giá trị cho trường 'price'
      setValue("categoryId", productState?.product?.categoryId?._id); // Gán giá trị cho trường 'price'
      setValue("description_long", productState?.product?.description_long); // Gán giá trị cho trường 'price'
      // Tiếp tục gán giá trị cho các trường khác (nếu có)
    }
  }, [productState, setValue]);
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
              // value={productState.product.name}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tai nghe airpod"
            />
            {/* <p className="text-xs text-red-500">
              {errors.name && errors.name.message}
            </p> */}
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
              id="image"
              {...register("images")}
              // value={productState.product.images}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
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
              // value={productState.product.price}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123.434.000"
            />
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
              {...register("categoryId")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Choose a category</option>
              {categotyState?.categories?.map((category) => (
                <option
                  // {...register("categoryId")}
                  value={category._id} selected={category._id == productState?.product?.categoryId?._id}>{category.name}</option>
              ))}
            </select>
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
          // placeholder="Write your thoughts here..."
          // value={productState.product.description_long}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
