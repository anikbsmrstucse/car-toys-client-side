import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AllToys = () => {

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
  const [toys, setToys] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [loading,setlaoding] = useState(true);
  useEffect(() => {
    fetchToys(currentPage);
  }, [currentPage]);

  const fetchToys = (page) => {
    fetch(`http://localhost:5000/cars?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
        setlaoding(false);
      })
      .catch((error) => {
        console.error("Error fetching toy data:", error);
      });
  };


  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  if(loading){
    return <div className="h-[100vh] flex items-center justify-center"><span className="loading loading-ring loading-lg"></span></div>
  }
  return (
    <div>
      <h1 className="text-3xl font-bold py-10 text-center">Toy List</h1>
      <table className="min-w-full bg-white">
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
            <th className="py-3 px-4 border-b border-gray-200 font-bold uppercase">
              View Details
            </th>
          </tr>
        </thead>
        {toys.map((toy,index) => (
          <tbody className="text-center" key={index}>
            <tr>
              <td className="py-4 px-6 border-b border-gray-200">{index + 1}</td>
              <td className="py-4 px-6 border-b border-gray-200">{toy?.seller_name}</td>
              <td className="py-4 px-6 border-b border-gray-200">{toy?.toy_name}</td>
              <td className="py-4 px-6 border-b border-gray-200">{toy?.toy_sub_category}</td>
              <td className="py-4 px-6 border-b border-gray-200">${toy?.price}</td>
              <td className="py-4 px-6 border-b border-gray-200">{toy?.available_quantity}</td>
              <td className="py-4 px-6 border-b border-gray-200">
                <Link to={`/toy/${toy._id}`}><button className="text-blue-500 btn btn-outlien">View Details</button></Link>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    

      <div className="space-x-5 text-center py-10">
        <button
          className="btn btn-outline btn-primary"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="btn btn-outline  btn-primary"
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllToys;
