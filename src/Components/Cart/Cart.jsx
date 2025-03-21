import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import { allRemove, searchCartItem } from "../../Pages/Utilitis/CartUtilitis";
import { useNavigate } from "react-router-dom";

const Cart = ({ cards, removeCart, setCards }) => {
  let [hello, setHello] = useState(cards);
  const sortByPrice = () => {
    let sort = [...cards].sort((a, b) => b.price - a.price);
    setHello(sort);
  };

  useEffect(() => {
    setHello(cards);
  }, [cards]);


  
  const removerItem = () => {
    allRemove();
    setHello([]);
    setCards([]);
  };
  
  let navigate = useNavigate()
  const navi=()=>{
    navigate("/")
  }




  const totalPrice = hello.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <div className="grid grid-cols-12 p-4">
        <div className="col-span-6">
          <h1 className="text-3xl font-bold">Cart</h1>
        </div>
        <div className="col-span-3">
          <h1 className="text-3xl font-bold">
            Total cost: {totalPrice.toFixed(2)}$
          </h1>
        </div>
        <div className="col-span-3 space-x-2">
          <button
            onClick={sortByPrice}
            className="border-2 py-2 px-3 font-semibold border-purple-700 rounded-3xl text-purple-600"
          >
            Sort by Price
          </button>
          <button disabled={totalPrice === 0}
            onClick={removerItem}
            className={`${totalPrice === 0 ? "bg-gray-500 border-2 text-white border-gray-600 " : "bg-purple-600  border-purple-400 border-2 text-white"} rounded-3xl py-2 font-semibold px-3 `}
          >
            <div
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Purchase
            </div>
          </button>
        </div>
      </div>
      <div className="mt-20">
        {hello.map((item) => (
          <CartItem key={item.product_id} removeCart={removeCart} card={item} />
        ))}
      </div>

      {/*  */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
            <div className="h-20 flex justify-center ">
          <img className="h-full" src="https://cdn-icons-png.flaticon.com/512/4436/4436481.png" alt="" />

            </div>
          <h1 className="text-center my-3 text-2xl font-bold">Payment Successfully</h1>
          <p className="font-semibold text-gray-500 text-center">Thanks for purchasing.</p> 
          <div className="my-4">
            <form method="dialog">
              <button onClick={navi} className="w-full btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Cart;



