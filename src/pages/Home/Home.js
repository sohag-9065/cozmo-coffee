import React from 'react';
import Banner from './Banner';
import HomeMenu from './HomeMenu';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <HomeMenu />
            <h3 className="text-3xl text-center text-white font-bold bg-primary ">
                <Link to="/menu" className="border-b-4" > See More </Link>
            </h3>
        </div>
    );
};

export default Home;