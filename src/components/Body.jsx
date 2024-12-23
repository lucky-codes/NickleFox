import React, { useContext, useEffect, useRef } from "react";
import Landingpage from "./Landingpage";
import Logolabel from "./Logolabel";
import Newarivals from "./Newarivals";
import Sale from "./Sale";
import Favourite from "./Favourite";
import Mobileapp from "./Mobileapp";
import Footer from "./Footer";
import { DataContext } from "../context/UserContex";

import Navbar from "./Navbar";
import SideBarProfile from "./profile/Sidebar";
const Body = () => {
  const { model, setModel } = useContext(DataContext);
  const modelRef = useRef(null);
  useEffect(() => {
    const modelToggle = (e) => {
      if (modelRef.current && !modelRef.current.contains(e.target)) {
        setModel(false);
      }
    };
    document.addEventListener("mousedown", modelToggle);
    return () => document.removeEventListener("mousedown", modelToggle);
  }, [model]);
  useEffect(() => {
    if (model) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [model]);
  return (
    <div className="">
      <Navbar />
      <Landingpage />
      <Logolabel />
      <Newarivals />
      {model && (
        <>
          <div
            ref={modelRef}
            className="bg-white absolute model  top-[10%] left-[30%] rounded-lg shadow-lg shadow-black overflow-hidden z-20 w-[700px] h-[600px]"
          >
            <SideBarProfile />
          </div>
          <div className="absolute z-10 top-0 w-screen h-screen bg-black/50"></div>
        </>
      )}
      <Sale />

      <Favourite />
      <Mobileapp />
      <Footer />
    </div>
  );
};

export default Body;
