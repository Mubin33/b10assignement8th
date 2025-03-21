import React from "react";
import Title from "../../Components/Title/Title";
import { Link } from "react-router-dom";

const FirstHero = () => {
  let title = "Upgrade Your Tech Accessorize with Gadget Heaven Accessories";
  let subtitle =
    "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!";

  return (
    <div className="z-10">
      <Title title={title} subTitle={subtitle} />
      <div className="flex justify-center">
        <Link to={"/dashboard"}>
          <button className="my-10 px-3 py-2 rounded-3xl bg-white text-purple-600 font-semibold">
            Shop Now
          </button>
        </Link>
      </div>
      <div className="h-auto mt-2  w-8/12 mx-auto">
        <div className="bg-gray-100 p-4 rounded-2xl">
          <img
            className="w-full rounded-2xl"
            src="/banner.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FirstHero;
