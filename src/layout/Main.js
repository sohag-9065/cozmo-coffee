import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import FooterSection from '../components/FooterSection';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Header />
            <Outlet />
            <FooterSection />
        </div>
    );
};

export default Main;