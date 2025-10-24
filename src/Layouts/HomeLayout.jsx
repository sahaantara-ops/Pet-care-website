import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import TipsSection from '../Pages/tipSection';
import ExpertVets from '../Pages/ExpertVets';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <section className='main'> 
                    <Outlet></Outlet>
                    <TipsSection></TipsSection>
                    <ExpertVets></ExpertVets>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;