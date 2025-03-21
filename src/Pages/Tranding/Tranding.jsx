import React, { useEffect, useState } from 'react';
import useTitle from '../../UseTitleHook';
import ReviewCart from './ReviewCart';
import Title from '../../Components/Title/Title';

const Tranding = () => {
    useTitle("Review  ||  Gadget Heaven")

    
    let [cards, setCards] = useState([])
    useEffect(()=>{
        fetch("/review.json")
        .then(res => res.json())
        .then(data => setCards(data))
    },[]) 
    return (
        <>
        <Title title="Customer Review"
        subTitle="Discover honest feedback from our valued customers. Hear firsthand how our products and services have made a difference. Your satisfaction drives us, and every review helps us improve and grow."
        />
        <div className='grid grid-cols-4 gap-4 p-7 mt-16'>
            {
                cards.map(item => <ReviewCart  card={item}/>)
            }
        </div>
        </>
    );
};

export default Tranding;