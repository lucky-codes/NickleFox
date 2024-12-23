import React from "react";
import insta from "../assets/insta.png";
import i from "../assets/in.png";
import fb from "../assets/Fb.png";
import twit from "../assets/Twit.png";
const Footer = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center gap-8 text-white footer_cont1 items-center h-[623px] w-full bg-[#E5C643]">
        <h1 className="text-[55px] footer_text text-center font-bold">
          JOIN SHOPPING COMMUNITY TO
          <br /> GET MONTHLY PROMO
        </h1>
        <h3 className="text-[32px] subfooter_text font-semibold">
          Type your email down below and be young wild generation
        </h3>
        <div className="flex relative footer_input w-[574px]">
          <input
            type="text"
            className="w-[574px] h-[87px] px-4 rounded-[10px] text-black text-xl placeholder:text-2xl"
            placeholder="Add your email here"
          />
          <button className="bg-black footer_button absolute right-2 top-3 text-white w-[161px] h-[67px] rounded-[8px]">
            SEND
          </button>
        </div>
      </div>
      <div className="h-[545px] w-full bg-black footer_cont2 flex justify-between items-center">
        <div className="ml-[100px] footer_text2 flex flex-col gap-5">
          <h1 className="font-bold sub text-[40px] text-white">FASHION</h1>
          <h3 className="text-[#8E8E8E] sub2 text-[24px]">
            Complete your style with awesome <br /> clothes from us.
          </h3>
          <div className="flex gap-2">
            <div className="w-[52px] footer_img flex justify-center cursor-pointer items-center h-[52px] bg-[#EBD96B]  rounded-[15px]">
              <img src={fb} />
            </div>
            <div className="w-[52px] footer_img flex justify-center cursor-pointer items-center h-[52px] bg-[#EBD96B] rounded-[15px]">
              <img src={insta} />
            </div>
            <div className="w-[52px] footer_img flex justify-center cursor-pointer items-center h-[52px] bg-[#EBD96B] rounded-[15px]">
              <img src={twit} />
            </div>
            <div className="w-[52px] footer_img flex justify-center cursor-pointer items-center h-[52px] bg-[#EBD96B] rounded-[15px]">
              <img src={i} />
            </div>
          </div>
        </div>
        <div className="flex gap-20 footer_link_cont mr-[300px]">
          <div className="text-[#8E8E8E]  flex flex-col gap-5">
            <h2 className="text-[#D9D9D9] footer_subheading text-[24px]">Company</h2>
            <p className="cursor-pointer">About</p>
            <p className="cursor-pointer">Contact us</p>
            <p className="cursor-pointer">Support</p>
            <p className="cursor-pointer">Careers</p>
          </div>
          <div className="text-[#8E8E8E] flex flex-col gap-5">
            <h2 className="text-[#D9D9D9] footer_subheading text-[24px]">Quick Link</h2>
            <p className="cursor-pointer">Share Location</p>
            <p className="cursor-pointer">Orders Tracking</p>
            <p className="cursor-pointer">Size Guide</p>
            <p className="cursor-pointer">FAQs</p>
          </div>
          <div className="text-[#8E8E8E] flex flex-col gap-5">
            <h2 className="text-[#D9D9D9] footer_subheading text-[24px]">Legal</h2>
            <p className="cursor-pointer">Terms & Conditions</p>
            <p className="cursor-pointer">Privacy Policy </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
