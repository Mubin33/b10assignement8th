import React, { useState, useEffect } from 'react';
import Header from './Pages/Header/Header';
import { Outlet } from 'react-router-dom';
import PublicHero from './Pages/Hero/PublicHero'; 
import { searchCartItem } from './Pages/Utilitis/CartUtilitis';
import { searchWishItem } from './Pages/Utilitis/Wishlist';
import Footer from './Pages/Footer/Footer';



const App = () => {
    let [local, setLocal] = useState([])
    useEffect(()=>{
        let localData = searchCartItem()
        setLocal(localData)
    },[searchCartItem(), setLocal])

    let [wishLocal, setWishLocal] = useState([])
    useEffect(()=>{
        let localData = searchWishItem()
        setWishLocal(localData)
    },[searchWishItem(), setWishLocal])
  return (
    <div>
      <div className='sticky top-0 z-10'>
      <Header local={local} wishLocal={wishLocal}/> 
      </div>
      <PublicHero/> 
      <div className='min-h-[600px] container mx-auto'>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  );
};

export default App;