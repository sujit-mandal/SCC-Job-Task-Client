import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Userlayout from "../Mainlayout/Userlayout";
import Task from "../Components/Task";
import Features from "../Pages/Features";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/features",
        element: <Features></Features>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Userlayout></Userlayout>,
    children: [
      {
        path: "/dashboard",
        element: <Task></Task>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
]);

export default route;
