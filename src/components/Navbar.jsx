import React, { useContext, useState } from "react";
import logo from "../assets/Logo.png";
import { DataContext } from "../context/UserContex";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { setModel } = useContext(DataContext);

  return (
    <div className="flex justify-between p-5">
      <div className="flex gap-2 items-center">
        <img src={logo} alt="Nothing" className="w-[30px] h-[30px]" />
        <h1 className="text-4xl font-bold ">FASHION</h1>
      </div>
      <div className="flex gap-[30px] items-center ">
        <p className="text-xl font-semibold select ">CATALOGUE</p>
        <p className="text-xl font-semibold select ">FASHION</p>
        <p className="text-xl font-semibold select ">FAVOURITE</p>
        <p className="text-xl font-semibold select ">LIFESTYLE</p>
        <button
          onClick={() => setModel(true)}
          className="text-[18px] font-semibold bg-black w-[100.5px] h-[46.5px] rounded-[5.25px] text-white"
        >
          Profile
        </button>
      </div>
    </div>
  );
};

export default Navbar;
