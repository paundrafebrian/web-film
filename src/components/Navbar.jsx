import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Movielist from "../Movielist/Movielist.jpeg"; 


const Navbar = (props) => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const [inputan,setInputan]=useState("")
  
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex item-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
      <img src={Movielist} className="p-4" alt="Movielist"></img>
        
      </Link>
      <div className="search_btn">
      <form onSubmit={(e) => {
          e.preventDefault();
          props.setSearch(inputan)
      }}>
                <input
                  className="focus:ring-0 rounded-full cursor-pointer outline outline-offset-2 outline-red-500 hover:outline-red-400 font-semibold hover:text-white-400 px-10 py-2 p-4"
                  type="search"
                  placeholder="What do you want?"
                  autoComplete="/"
                  onChange={function(e){
                    setInputan(e.target.value)
                }}
                />
      </form>
      </div>
    
      {user?.email ? (
        <div>
        </div>
      ) : (
        <div>
          <Link to="/Login">
            <button className="inline-block px-6 py-3 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out pr-7 " >Login</button>
          </Link>
          <Link to="/Register">
            <button className="inline-block px-6 py-3.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out ">
              Register
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
