
import Menubar from "../Components/Menubar";
import Home from "../Pages/Home";


const Mainlayout = () => {
    return (
        <div className="font-poppins">
            <Menubar></Menubar>
            <Home></Home>
        </div>
    );
};

export default Mainlayout;