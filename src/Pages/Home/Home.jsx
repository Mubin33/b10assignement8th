import React from 'react'; 
import FirstHero from '../Hero/FirstHero';
import MainBody from '../../Components/MainBody/MainBody';
import useTitle from '../../UseTitleHook';

const Home = () => {
    useTitle("Home || Gadget Heaven")

    // useTitle("Home - My Website");
    return (
        <div> 
            <FirstHero/>
            <div className='my-28'>
                <h1 className='text-3xl text-center underline font-semibold'>Explore Cutting-Edge Gadgets</h1>
            </div>
            <MainBody/>
        </div>
    );
};

export default Home;