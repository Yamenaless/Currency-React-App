import React from "react";
import Developer from "../assets/terminal.jpg";

const Developers = () => {
  return (
    <div className="w-full text-white bg-black">
      <div className="max-w-[1240px] h-[50%] mx-auto px-4 py-16 gap-5 md:flex sm:block text-center sm:text-left">
        <div className="py-10 space-y-15">
          <h1 className="text-4xl mb-10 font-bold">
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
          <img
            className="rounded-3xl w-[300] max-h-[250px] shadow-lg shadow-cyan-500"
            src={Developer}
            alt="developer"
          />
        </div>
      </div>
    </div>
  );
};

export default Developers;
