import { IRootState } from "@/store";
import { fetchOrderDetailAction } from "@/store/oder-detail/Action";
import { editOrderAction, fetchOneOrderAction } from "@/store/order/Action";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Dispatch } from "redux";

const UpdateOrder = () => {
  const { id } = useParams()
  const dispatch: Dispatch<any> = useDispatch()
  const orderState = useSelector((state: IRootState) => state.order)
  const orderDetailState = useSelector((state: IRootState) => state.orderDetails)
  console.log(orderState);
  console.log(orderDetailState);

  const OrderStatus = (status: number): string => {
    let tt: string = ''
    switch (status) {
      case 0:
        tt = "Đã hủy"
        break;
      case 1:
        tt = "Xác nhận đơn hàng"
        break;
      case 2:
        tt = "Đang chuẩn bị hàng"
        break;
      case 3:
        tt = "Đang giao hàng"
        break;
      case 4:
        tt = "Đã nhận hàng"
        break;
    }
    return tt
  }

  // const navigate = useNavigate();

  // console.log(productState.product.categoryId);

  // const {
  //   register,
  //   handleSubmit,
  //   setValue,
  //   formState: { errors },
  // } = useForm<productForm>({
  //   resolver: yupResolver(productSchema),
  // });
  const update = () => {
    const cf = confirm('Bạn có chắc chắn với xác nhận này này ?')
    if (cf == true) {
      try {
        const order = {
          status: orderState.order.status + 1
        }
        if (id) {
          dispatch(editOrderAction(orderState.order._id, order))
        }
        alert("Xác nhận thành công");
      } catch (error) {
        console.log(error);
      }
    }
  }

  const remove = () => {
    const cf = confirm('Bạn xác nhận muốn hủy đơn hàng này ?')
    if (cf == true) {
      try {
        const order = {
          status: 0
        }
        if (id) {
          dispatch(editOrderAction(orderState.order._id, order))
        }
        alert("Đã hủy đơn hàng");
      } catch (error) {
        console.log(error);
      }
    }
  }

  // const onSubmit = async (product: productForm) => {
  //   try {
  //     const imagesArray = product.images.split(",").map((url) => url.trim());
  //     const productWithArrayImages = { ...product, images: imagesArray };

  //     if (id) {
  //       await dispatch(editProductAction(id, productWithArrayImages));
  //     }
  //     console.log(product);
  //     navigate("/admin/product");
  //     alert("Thêm sản phẩm thành công");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    dispatch(fetchOneOrderAction(id));
    dispatch(fetchOrderDetailAction(id))
  }, [])

  // useEffect(() => {
  //   // Khi productState thay đổi, đặt giá trị mặc định cho form
  //   if (productState) {
  //     setValue("name", productState.product.name); // Gán giá trị cho trường 'name'
  //     setValue("price", productState.product.price); // Gán giá trị cho trường 'price'
  //     setValue("images", productState.product.images); // Gán giá trị cho trường 'price'
  //     setValue("categoryId", productState?.product?.categoryId?._id); // Gán giá trị cho trường 'price'
  //     setValue("description_long", productState.product.description_long); // Gán giá trị cho trường 'price'
  //     // Tiếp tục gán giá trị cho các trường khác (nếu có)
  //   }
  // }, [productState, setValue]);
  return (<div className="">
    <Link
      to={"/admin/order"}
      className="px-5 py-4 font-medium text-white bg-green-500 rounded-lg shadow-lg shadow-green-500/50"
    >
      List order
    </Link>
    <h1 className="mb-10 text-3xl font-medium text-center text-white">
      Thông tin đơn hàng
    </h1>
    <form >
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Tên người nhận
          </label>
          <input
            type="text"
            id="name"
            disabled
            // {...register("name")}
            value={orderState.order.fullName}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Tai nghe airpod"
          />
        </div>
        <div>
          <label
            htmlFor="image"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Địa chỉ
          </label>
          <input
            type="text"
            id="image"
            disabled
            // {...register("images")}
            value={orderState.order.address}
            // value={productState.product.images}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Số điện thoại
          </label>
          <input
            type="number"
            id="price"
            disabled
            // {...register("price")}
            // value={productState.product.price}
            value={orderState.order.phoneNumber}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123.434.000"
          />
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Tên sản phẩm
              </th>
              <th scope="col" className="px-6 py-3">
                Giá tiền
              </th>
              <th scope="col" className="px-6 py-3">
                Số lượng
              </th>
              <th scope="col" className="px-6 py-3">
                Tổng tiền
              </th>
              {/* <th scope="col" className="px-6 py-3">
              Trạng thái
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th> */}
            </tr>
          </thead>
          <tbody>
            {orderDetailState?.orderDetails?.map((orderDetail) => (
              <tr
                key={orderDetail._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-32 p-4">
                  <img
                    src={orderDetail.productId.images}
                    className="rounded-2xl object-cover w-[97px] h-[97px]"
                    alt=""
                  />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {orderDetail.productId.name}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {orderDetail.productId.price}đ
                  {/* {order.address} */}
                </td>
                <td className="px-6 py-4 max-w-[350px] whitespace-nowrap overflow-hidden text-ellipsis">
                  {orderDetail.quantity}
                  {/* {order.totalMoney}đ */}
                </td>
                {/* <td className="px-6 py-4">{OrderStatus(order.status)}</td> */}
                {/* <td className="px-6 py-4">{showOrderDetails(order._id)}</td> */}
                <td className="px-6 py-4">{orderDetail.totalMoney}đ</td>
              </tr>
            ))}
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="w-32 p-4">
                Tổng cộng
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td className="px-6 py-4">{orderState.order.totalMoney}đ</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mb-6 mt-5">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Ghi chú
        </label>
        <textarea
          id="description_long"
          disabled
          // {...register("description_long")}
          className="block p-2.5 h-52 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          // placeholder="Write your thoughts here..."
          value={orderState.order.note}

        ></textarea>
      </div>
      <button
        disabled={orderState.order.status == 0 || orderState.order.status == 3 || orderState.order.status == 4}
        type="submit"
        onClick={update}
        className='w-full px-5 py-3 text-sm font-medium text-center  text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '
      >
        {OrderStatus(orderState.order.status)}
      </button>
      {orderState.order.status == 1 && <button
        type="submit"
        onClick={remove}
        className="w-full mx-5 px-5 py-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Hủy đơn hàng
      </button>}
    </form>
  </div >)
};

export default UpdateOrder;
