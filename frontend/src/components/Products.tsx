import { IRootState } from "@/store";
import { fetchCategoryAction, fetchOneCategoryAction } from "@/store/categories/Action";
import { fetchProductAction } from "@/store/product/Action";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";
const Products = () => {
  const dispatch: Dispatch<any> = useDispatch();
  // const productState = useSelector((state: IRootState) => state.products)
  const categoryState = useSelector((state: IRootState) => state.category)
  const categoriesState = useSelector((state: IRootState) => state.categories)
  // console.log(categoryState.categories);
  const productCate = async (id: string | undefined) => {
    await dispatch(fetchOneCategoryAction(id))
  }

  useEffect(() => {
    // dispatch(fetchProductAction())
    // dispatch(fetchCategoryAction())
    // productCate(categoryState.categories._id)
    // productCate
  }, [dispatch])
  return (
    <div className="products mb-5">
      <div className="container">
        <div className="text-center mb-10">
          <img src="/title_base.png" className="mx-auto " />
          <h2 className="uppercase tracking-tighter text-[40px] font-bold">
            menu hôm nay
          </h2>
        </div>
        <div className="flex justify-center items-center gap-5 mb-[45px]">
          {categoriesState?.categories?.map((category, index) => {
            return <div key={index} className="rounded-full py-3 px-7 tab-active border border-gray-200 transition-all font-bold text-lg hover:text-white hover:bg-primary">
              <Link to="" onClick={() => productCate(category._id)} >{category.name}</Link>
            </div>
          })}
        </div>
        <div className="product-list flex justify-between flex-wrap">
          {categoryState?.category?.products?.map((product, index) => {
            return <div key={index} className="product-item w-[263px] mb-[75px] relative">
              <div className="border border-gray-200 mb-5">
                <Link to={`/productDetail/${product._id}`}>
                  <img src={product.images?.[0]} className="w-[261px] h-[261px]" />
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
                  to=""
                  className="uppercase font-bold text-lg hover:text-primary"
                >
                  {product.name}
                </Link>
                <p className="text-lg font-medium">
                  Giá: <span className="font-bold">{product.price}</span>
                </p>
              </div>
            </div>
          })}

        </div>
      </div>
    </div>
  );
};

export default Products;
