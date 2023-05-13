import React from 'react';
import coffeeShop from '../../assets/coffee_shop.mp4';

const Banner = () => {
    return (
        <div className="  w-[100%]">
            <video autoPlay loop muted className="h-[80vh] w-[100%] object-cover">
                <source src={coffeeShop} type="video/mp4" />
                Your browser does not support the video
            </video>
        </div>
    );
};

export default Banner;