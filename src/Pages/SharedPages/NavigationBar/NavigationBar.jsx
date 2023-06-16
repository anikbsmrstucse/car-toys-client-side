import React, { useContext, useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut,loading} = useContext(AuthContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logOut()
    .then(()=>{})
    .catch(error => {
        console.log(error);
    })
  }
 
  if(loading){
    return <div className="h-[100vh] flex items-center justify-center"><span className="loading loading-ring loading-lg"></span></div>
  }
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4 relative">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">
            Toy <span className="text-pink-500">Store</span>
          </span>
          <div className="flex items-center">
            <div
              className={`menu hover:delay-500 ${
                isMenuOpen ? "block" : "hidden"
              } md:block md:ml-4 absolute right-0 top-1/2 md:relative md:bg-[#1F2937] bg-slate-500 md:mt-0 mt-12`}
            >
              {/* Add your menu items here */}
              <NavLink
                to="/"
                className="block md:mt-0 mt-2 md:inline-block text-white hover:text-gray-400 duration-1000 mr-4"
              >
                Home
              </NavLink>
              <NavLink
                to='/alltoys'
                className="block md:mt-0 md:inline-block mt-2 text-white hover:text-gray-400 mr-4"
              >
                All Toys
              </NavLink>
              {
                user ? 
                <>
                <NavLink
                href="#"
                className="block md:mt-0 md:inline-block mt-2 text-white hover:text-gray-400 mr-4"
              >
                My Toys
              </NavLink>
              <NavLink
                to='/addatoy'
                className="block md:mt-0 md:inline-block mt-2  text-white hover:text-gray-400"
              >
                Add A Toy
              </NavLink>
                </>
                :
                ""
              }
              
              <NavLink
                href="#"
                className="block md:mt-0 md:inline-block mt-2 md:ml-4  text-white hover:text-gray-400"
              >
                Blogs
              </NavLink>
            </div>
            <div className="search-box ml-4 flex md:flex-row">
              <input
                type="text"
                placeholder="Search toys"
                className="px-4 py-2 rounded-lg border-none md:w-full w-3/4 text-black "
              />
              <button className="bg-gray-700  text-white px-4 py-2 rounded-lg ml-2">
                <FaSearch></FaSearch>
              </button>
            </div>
            {user ? (
              <>
                <div className="ml-2 mr-2 mx-auto">
                  <img
                    className="w-[38px] h-[38px] rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                </div>
                <NavLink onClick={handleLogout}>
                  <button className="btn btn-sm btn-success">Logout</button>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/login">
                  <button className="btn btn-sm btn-success ml-2">Login</button>
                </NavLink>
              </>
            )}
            <div onClick={toggleMenu} className="ml-2 cursor-pointer">
              <FaBars className="md:hidden w-[28px] h-[28px]"></FaBars>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
