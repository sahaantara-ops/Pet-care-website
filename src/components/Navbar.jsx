import React, { useState } from 'react';
import image from '../assets/pets.png';
import { NavLink } from 'react-router';

const Navbar = () => {
    const [user, setUser] = useState({
        displayName:"Antara Saha",
         photoURL: "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp",
         isLoggedIn: true,
    });
    const handleLogout = () => {
        console.log("User logged out");
    setUser({ isLoggedIn: false });
    };
    return (
        <div className="navbar bg-[#ffeb89]  mx-auto   gap-5">
  <div className="navbar-start p-3">
    <div className="dropdown">
      
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/auth">My Profile</NavLink>
    </ul>
    </div>
    <img src={image} className='w-[30px] '></img>
    <a className="btn btn-ghost text-xl">Best.Pet</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/auth">My Profile</NavLink>
    </ul>
  </div>
 <div className="navbar-end">
        {user.isLoggedIn ? (
          <div className="navbar-end">
            <div className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="User Avatar" src={user.photoURL} />
              </div>
            </div>

            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow"
            >
              <li className="text-center font-semibold text-primary">
                {user.displayName}
              </li>
              <li>
                <button onClick={handleLogout} className="btn btn-error btn-sm mt-2 text-white">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-3">
            <a href="/login" className="btn btn-outline btn-primary btn-sm">
              Login
            </a>
            <a href="/register" className="btn btn-primary btn-sm text-white">
              Register
            </a>
          </div>
        )}
      </div>
    </div>
  );
};







export default Navbar;