import React from 'react';
import { useLoaderData } from 'react-router';
import HeroSection from '../components/HeroSection';

const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            
        </div>
    );
};

export default Home;