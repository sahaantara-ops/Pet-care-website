import React, { Suspense } from 'react';
import image from '../assets/bg-image.webp';
import Services from '../Pages/Services';




const HeroSection = () => {
    const handleOnClick = () => {
    console.log("Order Services button clicked!"); 
    }
    return (
        <div className='flex justify-between bg-[#dacd91]  p-20 rounded-lg gap-10'>
            <div className='max-width-[auto] max-height-[auto] '>
                <h2 className='font-extrabold text-4xl text-blue-950 ml-10'>Your pet Deserves <br></br>the Best Care</h2>
                <p className='font-light text-1xl text-blue-950 ml-10 mt-2'>We offer professional Pet care services in Dhaka</p>
                 <Suspense fallback = {<span className="loading loading-ring loading-xl"></span>
}>
                 <Services></Services>
                 </Suspense>
                <button  onClick={handleOnClick} className='bg-amber-400 rounded-3xl text-white mt-15 ml-8'>Order Services ~</button>
                 
                 
            </div>
            <div>
                <img src={image} className='w-full rounded-lg mt-4'></img>
            </div>
            
        </div>
    );
};


export default HeroSection;
