import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FaGoogle } from "react-icons/fa";

const provider = new GoogleAuthProvider();

const LogIn = () => {
    const navigate = useNavigate();
     const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    


   const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Google Sign-in Successful!");
        navigate(from, { replace: true });
      })
      .catch(() => toast.error("Google Sign-in Failed"));
  };


    return (
        <div className='flex justify-center mt-30 items-center'>
         <div className="card bg-base-200 w-full max-w-sm shadow-2xl py-5">
            <h2 className='text-2xl font-semibold text-center'>Login Your Account</h2>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          
          <button className="btn btn-neutral mt-4">Login</button>
          <p className=' font-extrabold text-center p-5'>Don't have an account?<Link className='text-red-600' to="/auth/SignUp">SignUp</Link>  </p>
           <p className='text-center'>or</p>
        <button onClick={handleGoogle} className="btn mt-4">Sign in with Google <FaGoogle /></button>
        
        </fieldset>
      </div>
      </div>
      </div>
    );
};

export default LogIn;
