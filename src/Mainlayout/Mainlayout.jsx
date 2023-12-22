
import { Outlet } from "react-router-dom";
import Menubar from "../Components/Menubar";


const Mainlayout = () => {
    return (
        <div className="font-poppins">
            <Menubar></Menubar>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;