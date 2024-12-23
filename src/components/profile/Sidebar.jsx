import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import Profile from "./Profile";
import Useraccount from "./Useraccount";
import UserPasswordUpdate from "./UserPasswordUpdate.jsx";
import axios from "axios";
const SideBarProfile = () => {
  const navigate = useNavigate();
  const [choice, setChoice] = useState({
    account: true,
    edit: false,
    password: false,
  });
  const onButtonClick = (select) => {
    setChoice((prev) => ({ [select]: true }));
  };
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}logout`
      );
      if (response.status === 200) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="grid profileEdit2 grid-cols-[20%_80%] bg-gray-100 text-black/85 w-[900px] model_container rounded-lg h-[700px] shadow-lg">
      <div className="flex flex-col w-full h-full items-center bg-gray-800 text-white border-r border-gray-700">
        <div className="w-full flex flex-col gap-6 py-10 px-4 h-full">
          <button
            className="py-3 px-4 rounded-lg bg-gray-700 hover:bg-green-700 transition-all sidebar_button text-sm font-bold duration-300 ease-in-out"
            onClick={() => onButtonClick("account")}
          >
            YOUR ACCOUNT
          </button>
          <button
            className="py-3 px-4 rounded-lg bg-gray-700 sidebar_button hover:bg-green-700 transition-all text-sm font-bold duration-300 ease-in-out"
            onClick={() => onButtonClick("edit")}
          >
            Edit Profile
          </button>
          {/* <button
            className="py-3 px-4 rounded-lg bg-gray-700 hover:bg-green-700 transition-all text-sm font-bold duration-300 ease-in-out"
            onClick={() => onButtonClick("password")}
          >
            Change Password
          </button> */}
          <button
            className="py-3 px-4 rounded-lg bg-gray-700 sidebar_button hover:bg-green-700 transition-all text-sm font-bold duration-300 ease-in-out"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="">
        {choice.account && <Useraccount />}
        {choice.edit && <Profile />}
        {/* {choice.password && <UserPasswordUpdate />} */}
      </div>
    </div>
  );
};

export default SideBarProfile;
