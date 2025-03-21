import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ReactStarsRating from "react-awesome-stars-rating";
import Title from "../../Components/Title/Title";
import { addedToCart, searchCartItem } from "../Utilitis/CartUtilitis";
import { addedToWish, searchWishItem } from "../Utilitis/Wishlist";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  import { CiHeart } from "react-icons/ci";
import useTitle from "../../UseTitleHook";
const Details = () => {
  useTitle("Details || Gadget Heaven")
  let data = useLoaderData();
  let params = useParams();
  let [card, setCard] = useState([]);

  useEffect(() => {
    let finding = data.find((item) => item.product_id === params.id);
    setCard(finding);
  }, [params.product_id, data]);

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
  } = card;

  const addCart=(id)=>{
    let have = searchCartItem()
    let finding = have.find(item => item.product_id === id.product_id)
    if(finding){
      toast.error('This product is already added', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored", 
        });
    }
    else{
      addedToCart(id) 
      toast.success('This product successfully added to Cart', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored" 
        });
    } 
  }


  const addWish=(id)=>{
    let have = searchWishItem()
    let finding = have.find(item => item.product_id === id.product_id)
    if(finding){
      toast.error('This product is already added', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored", 
        });
    }
    else{
      addedToWish(id) 
      toast.success('This product successfully added to WishList', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored" 
        });
    } 
  }

  const [ratings, setRatings] = useState(""); 
  const handleRatingChange = (newRating) => {
    setRatings(newRating);
    console.log(`New rating is: ${newRating}`);
  };

  return (
    <>
    <ToastContainer />
      <div>
        <Title
          title="Product Details"
          subTitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        />
      </div>
      <div className="flex space-x-8 p-5 rounded-xl bg-gray-100 mt-28 w-10/12 mx-auto      ">
        <div className="w-96 ">
          <img className="h-full rounded-xl " src={product_image} alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">{product_title}</h1>
          <p className="font-bold my-4">Price: $ {price}</p>
          <p className={`p-1  ${availability? "bg-green-50  border-green-500" : "bg-red-50  border-red-500"} text-sm font-semibold border-2 inline rounded-2xl`}>{`${
            availability ? "In Stock" : "Sold Out"
          }`}</p>
          <p className="my-2 text-sm  text-gray-600">{description}</p>
          <p className="font-bold  text-sm">Specification: </p>
          {Array.isArray(Specification) && Specification.length > 0 ? (
            Specification.map((spec, index) => (
              <p key={index} className="ml-3 mt-1 text-sm">
                =/ {spec}
              </p>
            ))
          ) : (
            <p className="ml-3 mt-1 text-sm">No specifications available</p>
          )}
          <div className="flex  mt-3">
            <p className="inline">
              <ReactStarsRating
                value={rating}
                onChange={handleRatingChange}
                isEdit={false}
              />
            </p>
            <div>
              <div className="flex mb-6 mt-3">
                <p className="font-bold ml-10 text-xl">Rating: </p>
                <p className="font-bold  text-lg"> {rating}</p>
              </div>
              <div>
                <button onClick={()=> addCart(card)} className="btn btn-primary mx-5">Add to Cart</button>
                <button onClick={()=> addWish(card)} className="btn btn-ghost   btn-circle">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn bg-gray-800  text-white  btn-ghost btn-circle"
                  >
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <CiHeart size={25}/> 
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
