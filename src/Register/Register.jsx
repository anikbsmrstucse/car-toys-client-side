import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import SocialSignIn from "../Pages/SharedPages/SocialSignIn/SocialSignIn";


const Register = () => {
  const [type, setType] = useState(true);
  const navigate = useNavigate();
  const showPassword = () => {
    setType(false);
  };

  const { createUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { name, email, password, confirmPassword, photourl } = data;
    setError("");
    if (email && password) {
      if (password !== confirmPassword) {
        setError("password is not matched");
        return;
      }
      createUser(email, password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);

          updateUser(name, photourl).then(() => {
            const saveUser = {
              name: name,
              email: email,
            };
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="py-5 mt-5 mb-5">
      <div className="card w-full md:w-1/2 mx-auto shadow-lg bg-base-100">
        <h3 className="text-center text-2xl font-semibold mt-5">Register</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
              {...register("name", { required: true })}
            />
            {errors.name?.type === "required" && (
              <p className="text-error">Name is required</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
              {...register("email", { required: true })}
            />
            {errors.email?.type === "required" && (
              <p className="text-error">Email is required</p>
            )}
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
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password?.type === "minLength" && (
              <p className="text-error">password must be six character</p>
            )}
            {errors.password?.type === "required" && (
              <p className="text-error">password must be required</p>
            )}
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <FaEye
              onClick={showPassword}
              className="absolute right-0 mt-10 top-3 mr-5"
            ></FaEye>
            <input
              type={type ? "password" : "text"}
              placeholder="confirm password"
              className="input input-bordered"
              {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword?.type === "minLength" && (
              <p className="text-error">password must be six character</p>
            )}
            {errors.confirmPassword?.type === "required" && (
              <p className="text-error">password must be required</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              {...register("photourl", { required: true })}
            />
            {errors.photourl?.type === "required" && (
              <p className="text-error"> photo url is required</p>
            )}
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Register" />
          </div>
          <small>
            <p className="text-error">{error}</p>
          </small>
          <p>
            Already Have an account?{" "}
            <Link className="text-primary underline" to="/login">
              Login
            </Link>
          </p>
        </form>
        <SocialSignIn></SocialSignIn>
      </div>
    </div>
  );
};

export default Register;
