import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { auth } from "../FireBase/Firebase";
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import { FaGoogle } from "react-icons/fa";

import { useRef } from 'react';


const provider = new GoogleAuthProvider();

const LogIn = () => {
    const navigate = useNavigate();
     const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const emailRef = useRef(null);

    
  const [ email, setEmail ] = useState("");

   const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Google Sign-in Successful!");
        navigate(from, { replace: true });
      })
      .catch(() => toast.error("Google Sign-in Failed"));
  };
  const handleForgotPassword = (e) =>{
    console.log();
    
    const email = emailRef.current ;
    sendPasswordResetEmail(auth, email).then ((res) => {
      toast.success ("check your email to reset password")
    }) .catch((e) => {
      toast .error (e.message)
    });
  };
    
  
  console.log(location);

    return (
        <div className='flex justify-center mt-30 items-center'>
         <div className="card bg-base-200 w-full max-w-sm shadow-2xl py-5">
            <h2 className='text-2xl font-semibold text-center'>Login Your Account</h2>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name="email" value ={email}
           onChange={(e) => setEmail(e.target.value)}
          className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <button 
          className="link  link-hover" onClick={handleForgotPassword } type='button'>Forget Password?</button>
          
          <Link to = "/services/:id" className="btn btn-outline btn-primary btn-sm">Login</Link>
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
