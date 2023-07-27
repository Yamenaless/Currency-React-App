import React from "react";
import heroVid from "../assets/video (2160p).mp4";
const Hero = () => {
  return (
    <div id="community" className="w-full h-[90vh] flex flex-col items-center justify-center">
      <video
        className="object-cover h-full w-full absolute -z-10"
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div className=" w-full h-[90%] text-white text-center  flex flex-col space-y-4 justify-center items-center font-bold text-5xl ">
        <h1>Decentralized</h1>
        <h1 className="py-2"><span className="blue">Trading</span> Protocol</h1>
        <p className="text-xl py-4 text-white">Guaranteed liquidity trading for millions of users and top ethereum applications</p>
      </div>
      <div>
        <p className="text-center text-white font-bold text-2xl">Total Volume Secured:$42,104,783,662.47</p>
      </div>
    </div>
  );
};

export default Hero;
