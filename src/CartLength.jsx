import React from 'react';

const CartLength = ({cards}) => {
     
    return (
        <div>
           {
            cards.length 
           }
        </div>
    );
};

export default CartLength;