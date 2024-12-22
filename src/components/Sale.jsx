import React from "react";
import scrol from "../assets/Scrolimg.png";
const Sale = () => {
  return (
    <div className="w-full h-[678px] relative flex bg-[#E0C340]">
      <div>
        <img className="h-[678px]" src={scrol} alt="" />
      </div>
      <div className="absolute top-[10%] my-3 right-[8%]">
        <h1 className="font-bold text-[80.61px] bg-white px-4 transform -rotate-2">
          PAYDAY
        </h1>
        <h1 className="font-bold text-[80.61px]">SALE NOW</h1>
        <div className="w-[643px]">
          <p className="text-[24.04px]">
            Spend minimal $100 get 30% off voucher code for your next purchase
          </p>
        </div>
        <div className="text-[25px] my-3">
          <h1 className="font-bold">1 June - 10 June 2025</h1>
          <h2>*Terms & Conditions apply</h2>
        </div>
        <button className="w-[260.62px] text-[24px] h-[90.33px] bg-black rounded-[8.14px] mt-4 text-white">Shop Now</button>
      </div>
    </div>
  );
};

export default Sale;
