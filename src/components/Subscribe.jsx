import React from "react";

const Subscibe = () => {
  return (
    <div id={"platform"} className="w-full px-4 py-16 bg-black text-center text-white">
      <h1 className="text-5xl">Join our Community</h1>
      <div className=" py-4 space-x-5">
        <input
          className="p-3 text-black rounded-3xl outline-none "
          type="email"
          placeholder="Enter Your Email"
        />
        <button className="bg-blue-900 py-3 px-5 text-white rounded-full font-bold">
          Sign Up
        </button>
      </div>
      <div className="flex items-center justify-center py-2">
        <input className="mr-2" type="checkbox" />
        <p className="font-thin">
          Yes I agree to receive email communications form Logo
        </p>
      </div>
    </div>
  );
};

export default Subscibe;
