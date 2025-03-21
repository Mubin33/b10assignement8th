import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from '../AllCardsSection/Slider';
import Cards from '../AllCardsSection/Cards';

const MainBody = () => {
    let params = useParams();
    let [fullCardList, setFullCardList] = useState([]); 
    let [cards, setCards] = useState([]);  
    let [sliderItems, setSliderItems] = useState([]); 

    useEffect(() => { 
        fetch("/device.json")
            .then(res => res.json())
            .then(data => {
                setFullCardList(data);
                setCards(data); 
            });
    }, []);

    useEffect(() => { 
        if (params.category) {
            let filtering = fullCardList.filter(item => item.category === params.category);
            setCards(filtering);
        } else { 
            setCards(fullCardList);
        }
    }, [params.category, fullCardList]);

    useEffect(() => { 
        fetch("/category.json")
            .then(res => res.json())
            .then(data => setSliderItems(data));
    }, []);

    return (
        <div className='grid grid-cols-12 gap-4 '>
            <div className='lg:col-span-3 col-span-5 lg:pl-8  '>
                {
                    sliderItems.map(item => <Slider key={item.id} slider={item} />)
                }
            </div>
            <div className='lg:col-span-9 col-span-7 grid lg:grid-cols-3 gap-5'>
                {
                    cards.map(item => <Cards key={item.id} card={item} />)
                }
                <div className={`text-4xl font-bold ${cards.length ===0? 'col-span-7 mt-20': ''}  text-purple-600`}>
                {`${cards.length === 0? "Here any product is not Available Now....!  " :"" }`}    
                </div>
            </div>
        </div>
    );
};

export default MainBody;
