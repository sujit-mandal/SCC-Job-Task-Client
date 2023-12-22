
import { Outlet } from "react-router-dom";
import Menubar from "../Components/Menubar";
import { Toaster } from "react-hot-toast";
import Footer from "../Pages/Footer";


const Mainlayout = () => {
    return (
        <div className="font-poppins ">
            <Toaster></Toaster>
            <Menubar></Menubar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;