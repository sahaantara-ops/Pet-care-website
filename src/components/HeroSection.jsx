
import React from 'react';
import image from '../assets/bg-image.webp';
import ServiceCard from '../Pages/ServiceCard';
import { useNavigate } from 'react-router-dom'; // fixed
import { useAuth } from '../contexts/AuthContext.jsx';

const HeroSection = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleOrderClick = () => {
        const serviceId = 'winter-coat';
        if (user) {
            navigate(`/services/${serviceId}`);
        } else {
            navigate('/login', { state: { from: `/services/${serviceId}` } });
        }
    };

    return (
        <div className='flex justify-between bg-[#dacd91] p-20 rounded-lg gap-10'>
            <div className='max-w-full max-h-full'>
                <h2 className='font-extrabold text-4xl text-blue-950 ml-10'>
                    Your pet Deserves <br /> the Best Care
                </h2>
                <p className='font-light text-xl text-blue-950 ml-10 mt-2'>
                    We offer professional Pet care services in Dhaka
                </p>
                <button onClick={handleOrderClick} className='bg-amber-400 rounded-3xl text-white mt-4 ml-8'>
                    Order Services ~
                </button>
            </div>
            <div>
                <img src={image} className='w-full rounded-lg mt-4' alt="Pet care" />
            </div>
        </div>
    );
};

export default HeroSection;
