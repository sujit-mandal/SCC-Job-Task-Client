import {
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import logo from "../assets/logo.png";
const Menubar = () => {
  const [openNav, setOpenNav] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Home
      </NavLink>
      {user && (
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Dashboard
        </NavLink>
      )}
      <NavLink
        to="/price"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        How it works
      </NavLink>
      <NavLink
        to="/features"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Features
      </NavLink>
      <NavLink
        to="/aboutus"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        About Us
      </NavLink>
    </ul>
  );
  return (
    <div className="sticky border-b  top-0 z-10  rounded-none ">
      <div className="h-max max-w-screen-2xl mx-auto px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <img src={logo} alt="" />
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {!user && (
              <div className="flex items-center gap-x-1">
                <Link to={"/login"}>
                  <Button
                    variant="text"
                    size="sm"
                    className="hidden lg:inline-block"
                  >
                    <span>Log In</span>
                  </Button>
                </Link>
                <Link to={"/signup"}>
                  <Button
                    variant="gradient"
                    size="sm"
                    className="hidden lg:inline-block"
                  >
                    <span>Sign in</span>
                  </Button>
                </Link>
              </div>
            )}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <div className="flex items-center gap-x-1">
          <Link to={"/login"}>
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
          </Link>
          <Link to={"/signup"}>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </Link>
        </div>
      </MobileNav>
    </div>
  );
};

export default Menubar;
