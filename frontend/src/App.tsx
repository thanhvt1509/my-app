import { Route, Routes } from "react-router-dom";
import "swiper/css";
import "react-toastify/dist/ReactToastify.css";
import LayoutClient from "./components/layouts/layout-client/LayoutClient";
import HomePage from "./pages/client/HomePage";
import ProductDetail from "./pages/client/productDetail";
import LoginPage from "./pages/client/LoginPage";
import RegisterPage from "./pages/client/RegisterPage";
import CartPage from "./pages/client/CartPage";
import ProductList from "./pages/client/ProductList";
import Menus from "./pages/client/Menus";
import LayoutAdmin from "./components/layouts/layout-admin/LayoutAdmin";
import ListProduct from "./pages/admin/product/ListProduct";
import AddProduct from "./pages/admin/product/AddProduct";
import UpdateProduct from "./pages/admin/product/UpdateProduct";
import ListCategory from "./pages/admin/category/ListCategory";
import AddCategory from "./pages/admin/category/AddCategory";
import UpdateCategory from "./pages/admin/category/UpdateCategory";
import ListUser from "./pages/admin/user/ListUser";
import ListOrder from "./pages/admin/order/ListOrder";
import UpdateOrder from "./pages/admin/order/UpdateOrder";
import Checkout from "./pages/client/Checkout";
import Billconfirm from "./pages/client/Billconfirm";
import MyOrder from "./pages/client/MyOrder";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutClient />}>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route index element={<HomePage />}></Route>
          <Route path="/productDetail/:id" element={<ProductDetail />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/billConfirm" element={<Billconfirm />}></Route>
          <Route path="/product-all" element={<ProductList />}></Route>
          <Route path="/menus" element={<Menus />}></Route>
          <Route path="/my-order" element={<MyOrder />}></Route>
        </Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route path="product" element={<ListProduct />}></Route>
          <Route path="add-product" element={<AddProduct />}></Route>
          <Route path="update-product/:id" element={<UpdateProduct />}></Route>
          <Route path="category" element={<ListCategory />}></Route>
          <Route path="add-category" element={<AddCategory />}></Route>
          <Route path="update-category/:id" element={<UpdateCategory />}></Route>
          <Route path="user" element={<ListUser />}></Route>
          <Route path="order" element={<ListOrder />}></Route>
          <Route path="order/:id" element={<UpdateOrder />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
