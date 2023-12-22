import { Outlet } from "react-router-dom";
import Userdashboard from "../Pages/Userdashboard";
import { Toaster } from "react-hot-toast";

const Userlayout = () => {
  return (
    <div>
      <Toaster></Toaster>
      <Userdashboard></Userdashboard>
      <Outlet></Outlet>
    </div>
  );
};

export default Userlayout;
