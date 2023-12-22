import { useNavigate } from "react-router-dom";
import heroImg from "../assets/Hero-2.png";
import { TfiMouse } from "react-icons/tfi";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  console.log(user)
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-2  lg:py-20 flex flex-col lg:flex-row gap-10">
      <div className="flex-1 pr-10">
        <h1 className="text-3xl md:text-4xl lg:text-7xl  font-medium pt-6">
          Manage All Of Your Work In One Place,{" "}
          <span className="font-extrabold  text-[#00AAFF]">Efficiently</span>
        </h1>
        <p className="pr-20 mt-10 font-medium">
          Become focused, organized and calm with Todolist. The world's{" "}
          <span className="font-bold ">#1</span> task manager and to-do list
          site.
        </p>
      </div>
      <div className="flex-1 relative">
        <img src={heroImg} alt="" className="" />
        <div
          onClick={() => navigate("/login")}
          className="shadow-lg shadow-blue-gray-600 -left-[28%]  absolute px-5 py-8 rounded-lg font-bold cursor-pointer"
        >
          <TfiMouse size={24} className="inline-block"></TfiMouse>Explore
          Features
        </div>
      </div>
    </div>
  );
};

export default Home;
