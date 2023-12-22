import { useNavigate } from "react-router-dom";
import heroImg from "../assets/Hero-2.png";
import { TfiMouse } from "react-icons/tfi";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import featureImg from "../assets/Feature.png";
import { PiPuzzlePiece } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GrDocumentPerformance } from "react-icons/gr";
const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className=" px-4 py-2  lg:py-20 flex flex-col lg:flex-row gap-10">
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
      <div className="m-20 flex items-center justify-center gap-10">
        <img src={featureImg} alt="" className="flex-1" />
        <div className="flex-1">
          <h5 className="text-[#2ED7D8] text-2xl uppercase mb-5">
            A new era of productivity
          </h5>
          <h1 className="text-5xl font-semibold w-[80%] mb-8">
            Get Started with Personalized Advice
          </h1>
          <div className="space-y-6">
            <div className="flex items-start gap-5">
              <FaRegCalendarAlt size={40}></FaRegCalendarAlt>
              <div>
                <h3 className="text-3xl font-semibold mb-3">
                  Task Availability
                </h3>
                <p className="text-lg font-medium">
                  Instantly view team member's task schedules to assign work to
                  those with open slots in their calendars.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <PiPuzzlePiece size={40}></PiPuzzlePiece>
              <div>
                <h3 className="text-3xl font-semibold mb-3">
                  Optimal Assignment
                </h3>
                <p className="text-lg font-medium">
                  Maximize team productivity by assigning task to members with
                  availability, reducing bottlenecks.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <GrDocumentPerformance size={40}></GrDocumentPerformance>
              <div>
                <h3 className="text-3xl font-semibold mb-3">
                  Performance Insights
                </h3>
                <p className="text-lg font-medium">
                  Leverage performance data to make informed decisions and
                  continuously improve your productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
