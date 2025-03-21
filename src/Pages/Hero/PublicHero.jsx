import React from 'react';
import { useLocation } from 'react-router-dom';

const PublicHero = () => {
    let {pathname} = useLocation()

    const pathsToHighlight = [
        "/device/Laptops",
        "/device/Airpods",
        "/device/Home%20Appliances",
        "/device/Televisions",
        "/device/Smartphones"
      ];

    return (
        <div className={`  w-full -z-10 bg-purple-600 absolute ${pathname === "/" || pathsToHighlight.includes(pathname) ? "h-[550px]":"h-[300px]" }`}>
            
        </div>
    );
};

export default PublicHero;