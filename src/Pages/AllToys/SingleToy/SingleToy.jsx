import React from "react";
import ReactStars from "react-rating-stars-component";
import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
  const toy = useLoaderData();
  const {
    available_quantity,
    detail_description,
    image,
    price,
    rating,
    seller_email,
    seller_name,
    toy_category,
    toy_name,
    toy_sub_category,
    _id,
  } = toy;
  console.log(toy);
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold text-center py-10">{toy_name}</h1>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden md:max-w-2xl">
        <img
          className="object-cover object-center h-80 w-full"
          src={image}
          alt="Toy"
        />
        <div className="p-6">
          <h1 className="text-xl font-semibold mb-4">{toy_name}</h1>
          <h3 className="text-lg font-medium mb-2">Seller: {seller_name}</h3>
          <h3 className="text-lg font-medium mb-2">
            Seller Email: {seller_email}
          </h3>
          <p className="mb-2">Sub-category: {toy_sub_category}</p>
          <p className="mb-2">Price: ${price}</p>
          <p className="mb-2 flex items-center gap-2">
            Rating:
            <ReactStars
                edit={false}
              count={5}
              value={rating}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </p>
          <p className="mb-2">Available Quantity: {available_quantity}</p>
          <p className="mb-4">Detail Description: {detail_description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
