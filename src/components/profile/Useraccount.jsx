import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../context/UserContex";
import axios from "axios";
const Useraccount = () => {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const dataRequest = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}profile/view`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res.data);
        if (res.status === 200) {
          setUser(res.data);
        }
      } catch (error) {
        console.log({ error });
      }
    };
    dataRequest();
  }, []);
  return (
    <div className="w-full h-full p-8 bg-white rounded-lg shadow-md">
      {user ? (
        <div className="flex flex-col items-center gap-6">
          <div className="w-32 h-32 useracc_img rounded-full bg-gray-300 overflow-hidden shadow-md">
            <img
              src="https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <h2 className="text-xl useracc_header font-bold text-gray-800">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>

          <div className="w-full max-w-md border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Profile Details
            </h3>
            <div className="flex flex-col gap-4 overflow-y-auto hide-scrollbar shadow-lg rounded-md h-[250px] mr-[100px] p-2 border text-left">
              <div>
                <span className="font-semibold text-gray-800">First Name:</span>
                <span className="ml-2 text-gray-600">{user.firstName}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">Last Name:</span>
                <span className="ml-2 text-gray-600">{user.lastName}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">Email:</span>
                <span className="ml-2 text-gray-600">{user.email}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">Phone:</span>
                <span className="ml-2 text-gray-600">
                  {user.phone || "Not Provided"}
                </span>
              </div>
              <div>
                <p className="font-bold text-black">Address Details</p>
                <span className="font-semibold text-gray-800">
                  Address :
                  <span className="ml-2 text-gray-600">
                    {user?.address || "Not Provided"}
                  </span>
                </span>
                <p className="font-semibold text-gray-800">
                  city :
                  <span className="ml-2 text-gray-600">
                    {user?.city || "Not Provided"}
                  </span>
                </p>
                <p className="font-semibold text-gray-800">
                  state :
                  <span className="ml-2 text-gray-600">
                    {user?.state || "Not Provided"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-600">
          <p>No user data available.</p>
        </div>
      )}
    </div>
  );
};

export default Useraccount;
