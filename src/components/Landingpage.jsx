import React from "react";
import model from "../assets/model.png";
import star from "../assets/star1.png"
const Landingpage = () => {
  return (
    <div className="W-full   flex justify-center">
      <div className="mx-[100px] w-full h-[752px] flex justify-center items-center relative bg-[#F4F6F5] ">
        <div className=" w-[474px] h-[473px] absolute top-[100px] left-[241px]">
          <h1 className="font-bold text-[74px] ">
            LET’S EXPLORE
            <p className="bg-[#EBD96B] pl-5 transform -rotate-2">UNIQUE</p>{" "}
            CLOTHES
          </h1>
          <div className="">
            <h3 className="text-xl">
              Live for Influential and Innovative fashion!
            </h3>
            <button className="w-[221px] h-[82px] rounded-[10px] mt-5 font-semibold text-[30px] text-white bg-black">
              Shop Now
            </button>
          </div>
        </div>

        <div className="absolute top-[130px] left-[868px]">
          <img src={model} className="w-[622px] h-[622px] " alt="" />
          <img src={star} className="absolute z-10 top-2" alt="" />
          <img src={star} className="absolute z-10 bottom-4" alt="" />
          <img src={star} className="absolute z-10 bottom-4 right-4" alt="" />
          <img src={star} className="absolute z-10 top-2 right-4" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
