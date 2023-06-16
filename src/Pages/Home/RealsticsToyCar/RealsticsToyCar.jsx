import React from "react";

const RealsticsToyCar = () => {
  const toyCars = [
    {
      id: 1,
      title: "Red Sports Car",
      image: "https://i.ibb.co/GH9FHN5/iamge-1.jpg",
    },
    {
      id: 2,
      title: "Blue Pickup Truck",
      image: "https://i.ibb.co/SdRkcdy/iamge-4.jpg",
    },
    {
      id: 3,
      title: "Yellow Convertible",
      image: "https://i.ibb.co/7x3sjpY/iamge-3.jpg",
    },
    {
      id: 4,
      title: "Pink Sports",
      image: "https://i.ibb.co/bJ5B904/iamge-5.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 py-8 mb-5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Realistic Toy Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5">
          {toyCars.map((toyCar) => (
            <div
              key={toyCar.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
            >
              <img
                src={toyCar.image}
                alt={toyCar.title}
                className="w-48 h-32 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{toyCar.title}</h3>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-800 ">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealsticsToyCar;
