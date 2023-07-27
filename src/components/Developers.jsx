import React from "react";
import Developer from "../assets/pexels-cottonbro-studio-4709292.jpg";

const Developers = () => {
  return (
    <div className="w-full text-white bg-black">
      <div className="max-w-[1240px] mx-auto px-4 py-16 gap-5 sm:flex text-center sm:text-left">
        <div className="py-10">
          <h1 className="text-4xl font-bold">
            Superpowers for Defi Developers
          </h1>
          <p>
            Checkout the <span className="text-blue-500">documentation</span> ,
            the <span className="text-blue-500"> quick start</span> or a guide
            below to integrate your project with thousands of tokens and
            billions of liquidity.
          </p>
        </div>
        <div className="rounded-xl text-center w-full flex justify-center">
          <image
            className=" rounded-3xl max-w-[250px] shadow-lg shadow-cyan-500"
            src={Developer}
            alt="developer-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Developers;
