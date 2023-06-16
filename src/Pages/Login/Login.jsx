import React, { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SocialSignIn from "../SharedPages/SocialSignIn/SocialSignIn";


const Login = () => {
  const [type, setType] = useState(true);
  const [error, setError] = useState("");
  const { userLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const showPassword = () => {
    setType(false);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    userLogin(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          title: "Login Successfully",
          icon: "success",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="py-5 mb-5 mt-5">
      <div className="card w-full md:w-1/2 mx-auto shadow-lg bg-base-100">
        <h3 className="text-center text-2xl font-semibold mt-5">Login</h3>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
              name="email"
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <FaEye
              onClick={showPassword}
              className="absolute right-0 mt-10 top-3 mr-5"
            ></FaEye>
            <input
              type={type ? "password" : "text"}
              placeholder="password"
              className="input input-bordered"
              name="password"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
          </div>
          <small className="text-error">
            <p>{error}</p>
          </small>
          <p>
            Don't Have an account?{" "}
            <Link className="text-primary underline" to="/register">
              Register
            </Link>
          </p>
        </form>
        <SocialSignIn></SocialSignIn>
      </div>
    </div>
  );
};

export default Login;
