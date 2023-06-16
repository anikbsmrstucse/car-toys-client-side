import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner-img">
      <div className="flex items-center h-[600px] w-1/2 pl-10 ">
        <div className="space-y-6">
          <h3 className="text-5xl font-bold">Welcome to <span className="text-[#EC4899]">Car Toys</span></h3>
          <p className="text-7xl font-semibold">Special Edition </p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
            expedita amet nemo aspernatur quod reprehenderit enim id atque
            inventore numquam placeat animi vel doloremque, aut tempore libero
            rerum minima ratione.
          </p>
          <button className="btn btn-error text-white">Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
