import React from 'react';

const WishItem = ({wishCard, removeWish}) => {
    let {
        product_id,
        price,
        availability,
        category,
        description,
        product_image,
        product_title,
        rating,
        Specification,
      } = wishCard;
    return (
        <div>
      <div className="flex space-x-8 p-5 rounded-xl bg-gray-100 mt-10 w-10/12 mx-auto      ">
        <div className="w-40 ">
          <img className="h-32 w-full rounded-xl " src={product_image} alt="" />
        </div>
        <div className="w-[66%]">
          <h1 className="text-2xl font-semibold">{product_title}</h1>
          <p className="my-2 text-sm  text-gray-600">{description}</p>
          <p className="font-bold my-4">Price: $ {price}</p>
        </div>
        <button onClick={()=> removeWish(wishCard)} className="flex pt-12">
          <img className="h-9   w-9" src="https://cdn-icons-png.flaticon.com/512/3817/3817209.png" alt="" />
        </button>
      </div>
    </div>
    );
};

export default WishItem;