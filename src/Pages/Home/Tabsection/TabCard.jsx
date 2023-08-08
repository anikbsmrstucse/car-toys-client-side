import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const TabCard = ({item}) => {
    const {user} = useContext(AuthContext);
    const {image, price,rating,toy_name,_id} = item;
    const navigate = useNavigate();

    const handleDetails=(id)=>{
        if(user && user?.email){
            navigate(`/toy/${id}`);
        }
        else{
            Swal.fire({
                title: 'Order Add to Cart',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login First'
            })
            .then(result => {
              if(result.isConfirmed){
                navigate('/login');
              }
            })
            
        }
    }

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-[200px]"
        src={image}
        alt="Product"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{toy_name}</div>
        <div className="text-gray-700 text-base">${price}</div>
        <div className="flex items-center mt-4">
          <span className="text-green-500 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 1l2.928 6.755L20 7.36l-5.002 4.587L16.142 19 10 15.567 3.858 19l1.144-7.053L0 7.36l6.072.395L10 1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="text-gray-700">{rating}</span>
        </div>
      </div>
      <div className="px-6 py-4">
        <button onClick={()=>handleDetails(_id)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          View Details
        </button>
      </div>
    </div>
  );
};

export default TabCard;
