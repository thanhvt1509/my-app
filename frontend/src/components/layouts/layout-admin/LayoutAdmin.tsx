import AsideAdmin from "@/components/AsideAdmin";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const LayoutAdmin = () => {
  const user = JSON.parse(localStorage.getItem("user") as string);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role !== "admin") {
      return navigate("/");
    }
  }, [navigate]);
  return (
    <div>
      <AsideAdmin></AsideAdmin>
      <div className="py-24 px-6  sm:ml-64 h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default LayoutAdmin;
