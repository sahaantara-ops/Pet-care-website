import React from 'react';
import { Link } from 'react-router';
import toast from 'react-hot-toast';





const SignUp = () => {

  




    const handleSignUp=(e)=>{
      e.preventDefault();
      console.log(e.target);
      const form = e.target;
      const name = form.name.value;
      const photo = form.photoURL.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log ({name,photo,email,password});
      toast.success("Sign up form submitted! (Implement Firebase next)");
};

    
    return (
            <div className='flex justify-center mt-30 items-center'>
         <div className="card bg-base-200 w-full max-w-sm shadow-2xl py-5">
            <h2 className='text-2xl font-semibold text-center'>SignUp Your Account</h2>
      <form onSubmit={handleSignUp} className="card-body">
        <fieldset className="fieldset">
            <label className="Name">Name</label>
             <input
             type="Name" 
             className="input" 
             placeholder="Name" 
             required/>
            <label className="Photo URL">Photo URL</label>
            <input 
            name="photoURL"
            type="photo URL" 
            className="input" 
            placeholder="Photo URL" 
            required/>
          <label className="label">Email</label>
          <input 
          name="email"
          type="email" 
          className="input"
           placeholder="Email" 
           required/>
          <label className="label">Password</label>
          <input
          name="password"
           type="password"
            className="input" 
            placeholder="password" 
            required/>
         
          
          <button type='submit' className="btn btn-neutral mt-4">SignUp</button>
          <p className=' font-extrabold text-center p-5'>Already have an account?<Link className='text-red-600' to="/auth/Login">Login</Link >  </p>
        </fieldset>
      </form>
      </div>
      </div>
    );
};

export default SignUp;