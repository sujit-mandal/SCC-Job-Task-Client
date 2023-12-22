import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { AuthContext } from "../Provider/AuthProvider";
import logo from "../assets/logo.png";
const Userdashboard = () => {
  const { user } = useContext(AuthContext);
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const navigate = useNavigate();
  const handleMobileMenuClick = () => {
    setIsAsideOpen(!isAsideOpen);
  };
  console.log(user);
  const { logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  return (
    <div>
      <aside
        className={`${
          isAsideOpen ? "ml-0" : "ml-[-100%]"
        } fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]`}
      >
        <div>
          <div className="-mx-6 px-6 py-4">
            <a href="#" title="home">
              <img src={logo} className="w-32" alt="tailus logo" />
            </a>
          </div>

          <div className="mt-8 text-center">
            <img
              src={user?.photoURL}
              alt=""
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
              {user?.displayName}
            </h5>
            <span className="hidden text-gray-400 lg:block">User</span>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            <li>
              <NavLink
                to={"/dashboard"}
                onClick={handleMobileMenuClick}
                end
                className={({ isActive, isPending }) =>
                  isPending
                    ? " "
                    : isActive
                    ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-cyan-700 to-cyan-400"
                    : "relative px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                }
              >
                <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                    className="fill-current text-cyan-400 dark:fill-slate-600"
                  ></path>
                  <path
                    d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                    className="fill-current text-cyan-200 group-hover:text-cyan-300"
                  ></path>
                  <path
                    d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                    className="fill-current group-hover:text-sky-300"
                  ></path>
                </svg>
                <span className="-mr-1 font-medium">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/"}
                onClick={handleMobileMenuClick}
                end
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-cyan-700 to-cyan-400"
                    : "relative px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                    clipRule="evenodd"
                  />
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600"
                    d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                  />
                </svg>
                <span className="group-hover:text-gray-700">Home</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <button
            onClick={handleLogOut}
            className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className="group-hover:text-gray-700">Logout</span>
          </button>
        </div>
      </aside>

      <div className="ml-auto lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
          <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5 hidden className="text-2xl text-gray-600 font-medium lg:block font-poppins">
              Wellcome to Taskboard
            .</h5>
            <button
              className="w-12 h-16 -mr-2 border-r lg:hidden"
              id="mobilemenu"
              onClick={handleMobileMenuClick}
            >
              {isAsideOpen ? (
                <GrClose className="text-4xl"></GrClose>
              ) : (
                <GiHamburgerMenu className="text-4xl"></GiHamburgerMenu>
              )}
            </button>
            <div className="flex space-x-4">
              <button
                aria-label="notification"
                className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 m-auto text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userdashboard;
