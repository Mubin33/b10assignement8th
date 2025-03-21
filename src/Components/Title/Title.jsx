import React from 'react';

const Title = ({title,subTitle}) => {
    return (
        <div className='mt-14 w-6/12 mx-auto'>
            <h1 className={`text-center text-4xl mb-7 font-bold text-white`}>{title}</h1>
            <p className={`text-center text-sm font-thin text-white`}>{subTitle}</p>
        </div>
    );
};

export default Title;