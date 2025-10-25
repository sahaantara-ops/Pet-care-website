import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import LogIn from '../Pages/LogIn';

const AuthLayout = () => {
    return (
        <div>
            <header>
            <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
                {/* <LogIn></LogIn> */}
            </main>
        </div>
    );
};

export default AuthLayout;