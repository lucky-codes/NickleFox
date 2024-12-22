import React from "react";
import Appstore from "../assets/Apptore.png";
import Googleplay from "../assets/GooglePlay.png";
import Mobile from "../assets/Mobile.png";
const Mobileapp = () => {
  return (
    <div className="flex justify-center mt-[10%]">
      <div className="w-[507px] flex flex-col justify-center gap-8">
        <h1 className="font-bold text-[40px]">
          DOWNLOAD APP & GET THE VOUCHER!
        </h1>
        <p className="text-[24px] text-[#7C7C7C]">
          Get 30% off for first transaction using Rondovision mobile app for
          now.
        </p>
        <div className=" flex justify-start items-start ">
          <img className="w-[204px] h-[71px] cursor-pointer" src={Appstore} alt="appstore" />
          <img className="w-[204px] h-[71px] cursor-pointer" src={Googleplay} />
        </div>
      </div>
      <div>
        <img src={Mobile} alt="" />
      </div>
    </div>
  );
};

export default Mobileapp;
