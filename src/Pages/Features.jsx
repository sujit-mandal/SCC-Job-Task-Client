import { FaPen } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { MdAccessAlarms } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
import { GoFileDirectory } from "react-icons/go";
import { GiPentarrowsTornado } from "react-icons/gi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
const Features = () => {
  return (
    <div className="bg-[#00AAFF] max-w-screen-2xl  mx-auto px-4 py-2  lg:py-20 gap-10 mb-10">
      <div className="text-center text-white mx-auto">
      <p className=" text-3xl font-medium mb-3">FEATURED</p>
      <h2 className="text-6xl font-bold w-[70%] mx-auto">Boost Team Productivity with Shared Task Spaces</h2>
      </div>

      <div className="grid grid-cols-4 gap-10 mt-20 ">
        <div className="flex flex-col justify-center items-center gap-5">
          <FaPen className="text-4xl text-white"></FaPen>
          <p className="text-2xl font-medium text-white">Task Creation</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <FaRegStar className="text-4xl text-white"></FaRegStar>
          <p className="text-2xl font-medium text-white">Task View</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <MdAccessAlarms className="text-4xl text-white"></MdAccessAlarms>
          <p className="text-2xl font-medium text-white">Deadline Alert's</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <FaUserGroup className="text-4xl text-white"></FaUserGroup>
          <p className="text-2xl font-medium text-white">Collaborative Task</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <IoIosLink className="text-4xl text-white"></IoIosLink>
          <p className="text-2xl font-medium text-white">Task Dependencies</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <GoFileDirectory className="text-4xl text-white"></GoFileDirectory>
          <p className="text-2xl font-medium text-white">Project Management</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <GiPentarrowsTornado className="text-4xl text-white"></GiPentarrowsTornado>
          <p className="text-2xl font-medium text-white">Custom Workflow</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <TbBrandGoogleAnalytics className="text-4xl text-white"></TbBrandGoogleAnalytics>
          <p className="text-2xl font-medium text-white">Task Analytics</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
