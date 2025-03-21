import React from 'react';
import WishItem from './WishItem';

const Wishlist = ({wishCards, removeWish}) => { 
    return (
        <>
        <div className="col-span-6 pl-6">
          <h1 className="text-3xl font-bold">WishList:</h1>
        </div>
        <div className='mt-20'>
            {
                wishCards.map(item =>  <WishItem removeWish={removeWish} wishCard={item}/>)
            }
        </div>
        </>
    );
};

export default Wishlist;