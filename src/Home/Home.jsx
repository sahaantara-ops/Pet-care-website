import React from 'react';
import { useLoaderData } from 'react-router';
import HeroSection from '../components/HeroSection';
import Services from '../Pages/Services';

const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <HeroSection></HeroSection>
            <Services data={data}></Services>
        </div>
    );
};

export default Home;