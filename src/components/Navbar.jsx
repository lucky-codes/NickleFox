import React, { useContext, useState } from "react";
import logo from "../assets/Logo.png";
import { DataContext } from "../context/UserContex";

const Navbar = () => {
  const { setModel, setIsMenuOpen, isMenuOpen } = useContext(DataContext);
  const handleModel = () => {
    setModel(true);
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-between p-5 relative">
      <div className="flex gap-2 items-center">
        <img src={logo} alt="Nothing" className="w-[30px] h-[30px]" />
        <h1 className="text-4xl font-bold">FASHION</h1>
      </div>

      <button
        className="burger-button text-3xl font-bold focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      <div
        className={`navbar-menu flex gap-[30px] items-center ${
          isMenuOpen ? "active" : ""
        }`}
      >
        <p className="text-xl font-semibold px-5 py-2 select">CATALOGUE</p>
        <p className="text-xl font-semibold  px-5 py-2 select">FASHION</p>
        <p className="text-xl font-semibold  px-5 py-2 select">FAVOURITE</p>
        <p className="text-xl font-semibold  px-5 py-2 select">LIFESTYLE</p>
        <button
          onClick={handleModel}
          className="text-[18px] font-semibold bg-black w-[100.5px] h-[46.5px] rounded-[5.25px] text-white"
        >
          Profile
        </button>
      </div>
    </div>
  );
};

export default Navbar;
