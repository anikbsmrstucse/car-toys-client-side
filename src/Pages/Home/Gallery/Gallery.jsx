import React from "react";

const Gallery = () => {
  const images = [
    "https://i.ibb.co/G9VvCWx/iamge-15.jpg",
    "https://i.ibb.co/fFsygbZ/iamge-16.jpg",
    "https://i.ibb.co/hLwb9HR/iamge-14.jpg",
    "https://i.ibb.co/nMdZpLp/iamge-13.jpg",
    "https://i.ibb.co/K2Qtm4j/iamge-12.jpg",
    "https://i.ibb.co/mc9pTV1/iamge-11.jpg",
  ];

  return (
    <div className="container mx-auto py-10 mt-5">
      <h2 className="text-4xl font-bold mb-4 text-center">Gallery</h2>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-[280px] object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
