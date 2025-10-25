import React from 'react';
import { Link } from 'react-router';

const SignUp = () => {
    return (
            <div className='flex justify-center mt-30 items-center'>
         <div className="card bg-base-200 w-full max-w-sm shadow-2xl py-5">
            <h2 className='text-2xl font-semibold text-center'>SignUp Your Account</h2>
      <div className="card-body">
        <fieldset className="fieldset">
            <label className="Name">Name</label>
             <input type="name" className="input" placeholder="Name" />
            <label className="Photo URL">Photo URL</label>
            <input type="photo URL" className="input" placeholder="Photo URL" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
         
          
          <button className="btn btn-neutral mt-4">SignUp</button>
          <p className=' font-extrabold text-center p-5'>Already have an account?<Link className='text-red-600' to="/auth/Login">Login</Link >  </p>
        </fieldset>
      </div>
      </div>
      </div>
    );
};

export default SignUp;