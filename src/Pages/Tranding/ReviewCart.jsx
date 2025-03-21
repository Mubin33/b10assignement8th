import React from "react";

const ReviewCart = ({ card }) => {
  let { id, author_img, rating,author_name, review,product_image } = card;
  return (
    <div>
      <div className="card bg-base-100 h-full w-full shadow-xl">
        <figure>
          <img
          className="h-52"
            src={product_image}
            alt="author img"
          />
        </figure>
        <div className="card-body mt-5">
          <h2 className="card-title">{author_name}</h2>
          <p>{review}</p>
          <p className="font-bold"> Rating: {rating}.0</p>
        </div>
        <div className="absolute rounded-full border-4 border-green-500 top-40 left-24 h-24 w-24">
            <img className="w-full h-full rounded-full" src={author_img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ReviewCart;
