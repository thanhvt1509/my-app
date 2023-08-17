import BreadCrumb from "@/components/BreadCrumb";
import { IRootState } from "@/store";
import { fetchProductAction } from "@/store/product/Action";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";

const ProductList = () => {
  const dispatch: Dispatch<any> = useDispatch()
  const productState = useSelector((state: IRootState) => state.products)
  const onecategoryState = useSelector((state: IRootState) => state.category)

  // const [showAllProducts, setShowAllProducts] = useState(true);

  useEffect(() => {
    // if (!onecategoryState) {
    dispatch(fetchProductAction())
    // }
  }, [])

  return (
    <div className="container">
      <BreadCrumb></BreadCrumb>
      <div>
        <h1 className="text-[28px] font-bold mb-5 uppercase mt-[50px]">
          Tất cả sản phẩm
        </h1>
        <div className="product-list flex justify-between flex-wrap">
          {(onecategoryState.category?.products || productState.products).map(product => (
            <div className="product-item w-[263px] mb-[75px] relative" key={product._id}>
              <div className="border border-gray-200 mb-5">
                <Link to={`/productDetail/${product._id}`}>
                  <img src={product.images} className="w-[261px] h-[261px]" />
                </Link>
                <Link
                  to=""
                  className="add-to-cart-btn absolute bottom-[77px] left-0 w-full bg-primary opacity-0 text-white text-center py-2 text-lg font-semibold transition-opacity"
                >
                  Thêm vào giỏ hàng
                </Link>
              </div>
              <div className="text-center">
                <Link
                  to={`/productDetail/${product._id}`}
                  className="uppercase font-bold text-lg hover:text-primary"
                >
                  {product.name}
                </Link>
                <p className="text-lg font-medium">
                  Giá: <span className="font-bold">{product.price}₫</span>
                </p>
              </div>
            </div>
          ))}
          {/* {(productState.products || onecategoryState.category?.products).map((product) =>
            <div className="product-item w-[263px] mb-[75px] relative" key={product._id}>
              <div className="border border-gray-200 mb-5">
                <Link to={`/productDetail/${product._id}`}>
                  <img src={product.images} className="w-[261px] h-[261px]" />
                </Link>
                <Link
                  to=""
                  className="add-to-cart-btn absolute bottom-[77px] left-0 w-full bg-primary opacity-0 text-white text-center py-2 text-lg font-semibold transition-opacity"
                >
                  Thêm vào giỏ hàng
                </Link>
              </div>
              <div className="text-center">
                <Link
                  to={`/productDetail/${product._id}`}
                  className="uppercase font-bold text-lg hover:text-primary"
                >
                  {product.name}
                </Link>
                <p className="text-lg font-medium">
                  Giá: <span className="font-bold">{product.price}₫</span>
                </p>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
