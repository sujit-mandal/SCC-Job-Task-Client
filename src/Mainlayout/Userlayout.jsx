import { Outlet } from "react-router-dom";
import Userdashboard from "../Pages/Userdashboard";

const Userlayout = () => {
    return (
        <div>
            <Userdashboard></Userdashboard>
            <Outlet></Outlet>
        </div>
    );
};

export default Userlayout;