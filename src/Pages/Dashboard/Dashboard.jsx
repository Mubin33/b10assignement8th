import React, { useEffect, useState } from 'react';
import Title from '../../Components/Title/Title';
import Cart from '../../Components/Cart/Cart';
import Wishlist from '../../Components/Wishlist/Wishlist'; 
import { searchCartItem } from '../Utilitis/CartUtilitis';
import { removeCartItem } from "../../Pages/Utilitis/CartUtilitis"; 
import CartLength from '../../CartLength';
import { removeWishItem, searchWishItem } from '../Utilitis/Wishlist';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../UseTitleHook';
 

const Dashboard = () => {
    useTitle("Dashboard || Gadget Heaven")
    let [isActive, setIsActive] = useState(true)

    const handel=(data)=>{
        if(data === "cart"){
            setIsActive(true)
        }else{
            setIsActive(false)
        }
    }


    const [cards, setCards] = useState([])
    useEffect(()=>{
        let item = searchCartItem() 
         setCards(item) 
    },[])

    const removeCart=(id)=>{
        removeCartItem(id)
        let item = searchCartItem() 
         setCards(item) 
         toast.warn('Remove from cart', {
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



      const [wishCards, setWishCards] = useState([])
    useEffect(()=>{
        let item = searchWishItem() 
        setWishCards(item) 
    },[searchWishItem, setWishCards])

    const removeWish=(id)=>{
        removeWishItem(id)
        let item = searchWishItem() 
        setWishCards(item) 
        toast.warn('Remove from Cart', {
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



      
 
    return (
        <>
        <ToastContainer />
        <div>
             <Title title="Dashboard" subTitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"/> 
        </div>
        <div className='flex justify-center my-10 space-x-3'>
            <button onClick={()=> handel("cart")} className={`px-3 py-1 rounded-3xl font-semibold border-2 text-lg border-gray-300 ${isActive? "bg-white text-purple-700":"text-black"}`}>Cart</button>
            <button onClick={()=> handel("wishlist")} className={` px-3 py-1 rounded-3xl font-semibold border-2 text-lg border-gray-300 ${isActive? "text-black":"bg-white text-purple-700"}`}>Wishlist</button>
        </div>

        <div className='pt-10'>
            {isActive ? <Cart cards={cards}   removeCart={removeCart}/> : <Wishlist wishCards={wishCards} removeWish={removeWish}/>}
        </div> 
        <div className='text-black hidden'>
            <CartLength cards={cards}  setCards={setCards}/>
        </div>
        </>
    );
};

export default Dashboard;