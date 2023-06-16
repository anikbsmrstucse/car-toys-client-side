import React from "react";
import { FaLocationArrow, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <section className="bg-gray-100 py-8 mb-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold">Our Location</h3>
                <FaLocationArrow className="ml-[210px] md:ml-[290px] h-[30px] w-[30px]"></FaLocationArrow>
              <p className="text-gray-600">
                123 Main Street <br />
                City, State, ZIP Code
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">
                Contact Information
              </h3>
                <FaPhone className="ml-[210px] md:ml-[290px] h-[30px] w-[30px]"></FaPhone>
              <p className="text-gray-600">
                Email: info@example.com <br />
                Phone: 123-456-7890
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Have any questions or need assistance? Reach out to us!
            </p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
