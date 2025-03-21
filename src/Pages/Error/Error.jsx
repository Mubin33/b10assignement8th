import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className=' pt-60'> 
            <h1 className='text-7xl text-center font-bold'>404</h1>
            <p className='mt-2 text-center text-gray-700 font-bold'>Page can not found</p> 
            <div className='flex justify-center mt-10'>
            <Link to={"/"}><button className='btn btn-primary'>Go to Home</button></Link>
            </div>
        </div>
    );
};

export default Error;