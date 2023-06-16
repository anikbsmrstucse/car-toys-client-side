import React, { useContext, useEffect, useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [toys, myToys] = useState([]);
  const location = useLocation();
  const {new_id} = location.state;
  

  const [loading, setlaoding] = useState(true);
  useEffect(() => {
    fetchToys(toys);
  }, []);

  const fetchToys = () => {
    fetch(`http://localhost:5000/cars/mycar?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => {
        myToys(data);
        setlaoding(false);
      })
      .catch((error) => {
        console.error("Error fetching toy data:", error);
      });
  };

  const handledelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/cars/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Car Insert Successfully",
            icon: "success",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
          const remaining = toys.filter((toy) => toy._id !== id);
          myToys(remaining);
        }
      });
  };

  if (loading) {
    return (
      <div className="h-[100vh] flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto py-10">
      <h1 className="text-3xl font-bold py-10 text-center">My Toy List</h1>
      <table className="min-w-full mx-auto bg-white">
        <thead>
          <tr>
            <th>index</th>
            <th className="py-3 px-4 border-b border-gray-200 font-bold uppercase">
              Seller
            </th>
            <th className="py-3 px-4 border-b border-gray-200 font-bold uppercase">
              Toy Name
            </th>
            <th className="py-3 px-4 border-b border-gray-200 font-bold uppercase">
              Sub-category
            </th>
            <th className="py-3 px-4 border-b border-gray-200 font-bold uppercase">
              Price
            </th>
            <th className="py-3 px-4 border-b border-gray-200 font-bold uppercase">
              Available Quantity
            </th>
            <th>Update Toy</th>
            <th>Delete Toy</th>
          </tr>
        </thead>
        {toys.map((toy, index) => (
          <tbody className="text-center" key={index}>
            <tr>
              <td className="py-4 px-6 border-b border-gray-200">
                {index + 1}
              </td>
              <td className="py-4 px-6 border-b border-gray-200">
                {toy?.seller_name}
              </td>
              <td className="py-4 px-6 border-b border-gray-200">
                {toy?.toy_name}
              </td>
              <td className="py-4 px-6 border-b border-gray-200">
                {toy?.toy_sub_category}
              </td>
              <td className="py-4 px-6 border-b border-gray-200">
                ${toy?.price}
              </td>
              <td className="py-4 px-6 border-b border-gray-200">
                {toy?.available_quantity}
              </td>
              <td>
                <Link state={{new_id:toy._id}}>
                  <a
                    href="#my_modal_8"
                    className="btn btn-circle btn-outline btn-success"
                  >
                    <FaPen></FaPen>
                  </a>
                </Link>
              </td>
              <td>
                <button
                  onClick={() => handledelete(toy._id)}
                  className="btn btn-circle btn-outline btn-error"
                >
                  <FaTrash></FaTrash>
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <div className="modal" id="my_modal_8">
        <div className="modal-box">
          <form onSubmit={() => handleUpdate(new_id)}>
            <div className="form-control w-full max-w-xs border-primary">
              <label className="label">
                <span className="label-text">Update Price</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input w-full max-w-xs border-primary-focus"
                name="price"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Available Quantity update</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input  w-full max-w-xs border-primary-focus"
                name="quantity"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Detail Description update</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input  w-full max-w-xs border-primary-focus"
                name="detail"
              />
            </div>
            <input
              type="submit"
              value="Update"
              className="btn btn-primary btn-outline mt-5"
            />
          </form>

          <div className="modal-action">
            <a href="#" className="btn">
              Yay!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* The button to open modal */
}

{
  /* Put this part before </body> tag */
}

export default MyToy;
