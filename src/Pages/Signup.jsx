import { useForm } from "react-hook-form";
import SocialLogin from "../Components/SocialLogin";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const { createUser, logOut } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        toast.success("Account Created Successfully");
        updateProfile(auth.currentUser, {
          displayName: data.fullname,
          photoURL: data.image,
        })
          .then(() => {
            logOut()
              .then(() => {
                navigate("/login");
              })
              .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);
              });
          })
          .catch((error) => {
            toast.error("Error occurred in profile updating");
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return (
    <>
      <div className="bg-[#F3F7F9] min-h-screen flex flex-col">
        <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <SocialLogin></SocialLogin>
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                {...register("fullname", { required: true })}
                placeholder="Full Name"
              />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                {...register("image", { required: true })}
                placeholder="Photo URL"
              />
              <input
                type="email"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                {...register("email", { required: true })}
                placeholder="Email"
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                {...register("password", { required: true, minLength: 6 })}
                placeholder="Password"
              />

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-700 focus:outline-none my-1"
              >
                Create Account
              </button>
            </form>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <a
              className="no-underline border-b border-blue-400 text-blue-400"
              href="../login/"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
