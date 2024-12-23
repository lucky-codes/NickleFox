import React from "react";
import model from "../assets/model.png";
import star from "../assets/star1.png"
const Landingpage = () => {
  return (
    <div className="W-full   flex justify-center">
      <div className="mx-[100px] w-full h-[752px] landing_cont flex justify-center items-center relative bg-[#F4F6F5] ">
        <div className=" w-[474px] h-[473px] absolute top-[100px] landingpage_heading_container left-[241px]">
          <h1 className="font-bold text-[74px] landingpage_heading ">
            LET’S EXPLORE
            <p className="bg-[#EBD96B] pl-5 transform -rotate-2">UNIQUE</p>
            CLOTHES
          </h1>
          <div className="">
            <h3 className="text-xl">
              Live for Influential and Innovative fashion!
            </h3>
            <button className="w-[221px] h-[82px] landingpage_button rounded-[10px] mt-5 font-semibold text-[30px] text-white bg-black">
              Shop Now
            </button>
          </div>
        </div>

        <div className="absolute top-[130px] left-[868px] landingpage_img_container">
          <img src={model} className="w-[622px] h-[622px] landingpage_img" alt="" />
          <img src={star} className="absolute z-10 top-2 star" alt="" />
          <img src={star} className="absolute z-10 bottom-4 star" alt="" />
          <img src={star} className="absolute z-10 bottom-4 right-4 star" alt="" />
          <img src={star} className="absolute z-10 top-2 right-4 star" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
