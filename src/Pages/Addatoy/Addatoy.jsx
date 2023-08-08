import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaCar } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Addatoy = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const {available_quantity,
        detail_description,
        image,
        price,
        rating,
        seller_email,
        seller_name,
        toy_category,
        toy_name,
        toy_sub_category,} = data;

        const saveInfo = {
        image,
        toy_name,
        seller_name,
        seller_email,
        toy_sub_category,
        price:parseInt(price),
        rating:parseFloat(rating),
        available_quantity:parseInt(available_quantity),
        detail_description,
        }
        console.log(saveInfo);
        fetch(`https://toy-cars-assignment-11-server.vercel.app/cars`,{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body: JSON.stringify(saveInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: "Car Insert Successfully",
                    icon: "success",
                    showClass: {
                      popup: "animate__animated animate__fadeInDown",
                    },
                    hideClass: {
                      popup: "animate__animated animate__fadeOutUp",
                    },
                })
            }
            reset();
        })
  };
  return (
    <div className="md:w-3/5 w-full mx-auto py-10 my-5">
        <Helmet>
            <title>Toys Cars | Add Toy</title>
        </Helmet>
      <h1 className="text-3xl text-center font-bold">Add A Toy</h1>
      <div className="divider"></div>
      <div className="w-full bg-gray-300 shadow-xl py-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-3/4 mx-auto space-y-5"
        >
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Toy Name*</span>
            </label>
            <input
              type="text"
              placeholder="Toy name"
              className="input input-bordered w-full"
              {...register("toy_name", { required: true, maxLength: 80 })}
            />
          </div>
          <div className="flex gap-3">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-bold">Seller Name*</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-md"
                defaultValue={user?.displayName}
                readOnly
                {...register("seller_name", { required: true, maxLength: 80 })}
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-bold">Seller Email*</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-md"
                defaultValue={user?.email}
                readOnly
                {...register("seller_email", { required: true, maxLength: 80 })}
              />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-bold">Price*</span>
              </label>
              <input
                type="number"
                className="input input-bordered w-full max-w-md"
                placeholder="Type Price"
                {...register("price", { required: true })}
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-bold">rating*</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-md"
                placeholder="Rating"
                {...register("rating", { required: true })}
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-bold">
                  Available Quantity*
                </span>
              </label>
              <input
                type="number"
                className="input input-bordered w-full max-w-md"
                placeholder="Type Seat Number"
                {...register("available_quantity", { required: true })}
              />
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Toy Image*</span>
            </label>
            <input
              type="text"
              placeholder="Give Your Toy URL"
              className="input file-input-bordered w-full"
              {...register("image", { required: true })}
            />
          </div>
          <div className="flex gap-3">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="text-sm font-bold">
                  Pick One Sub-Category*
                </span>
              </label>
              <select
                className="select select-bordered"
                {...register("toy_sub_category", {
                  required: true,
                  maxLength: 80,
                })}
              >
                Off-Road Vehicles Monster Trucks Police Cars Race Cars Race Car
                Sets
                <option selected>Pick one</option>
                <option>Remote Control Cars</option>
                <option>Off-Road Vehicles</option>
                <option>Classic Cars</option>
                <option>Race Cars</option>
                <option>Sports Cars</option>
                <option>Fire Trucks</option>
              </select>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-bold">
                  Details Description*
                </span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-md"
                placeholder="Type your toy details"
                {...register("detail_description", {
                  required: true,
                  maxLength: 120,
                })}
              />
            </div>
          </div>
          <button className="btn btn-outline btn-primary" type="submit">
            <FaCar></FaCar> Add Car Toy
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addatoy;
