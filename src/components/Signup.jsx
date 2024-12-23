import React, { useContext, useState } from "react";
import { DataContext } from "../context/UserContex";
import logo from "../assets/Logo.png";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { handleError } from "../utils/validation";
const Signup = () => {
  const navigate = useNavigate();
  const [validation, setValidation] = useState(null);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
  });
  const { setSignupData } = useContext(DataContext);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    handleError({ data, setValidation });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleError({ data, setValidation });
    if (data.password !== data.confirmPassword) {
      alert("Password does not match");
      return;
    }
    if (validation) {
      console.log("Validation failed", validation);
      return;
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}signup`,
        data
      );
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        setSignupData(response.data.newUser);
        alert("Account created");
        navigate("/");
      } else {
        throw new Error("Request Failed");
      }
    } catch (error) {
      console.log({ error: error.message });
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div className="flex flex-col items-center p-8 h-[700px] bg-white rounded-lg shadow-lg w-[600px]">
        <div className="flex items-center mb-6">
          <img className="w-10 h-10 mr-2" src={logo} alt="Logo" />
          <p className="text-2xl font-semibold">NickleFox</p>
        </div>
        <h1 className="text-2xl font-bold mb-4">Create an account</h1>
        <p className="mb-4 text-sm text-gray-600">
          Already registered
          <Link
            to="/login"
            className="text-blue-500 underline hover:text-blue-700"
          >
            login
          </Link>
        </p>

        <form className="flex flex-col space-y-5 w-full overflow-y-auto">
          <div className="flex gap-5">
            <div className="flex flex-col w-1/2">
              <label className="text-lg font-medium mb-1">First name</label>
              <input
                type="text"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="border px-4 py-2 rounded-md focus:outline-none"
              />
              {validation?.firstName && (
                <p className="text-red-500 text-sm">{validation.firstName}</p>
              )}
            </div>
            <div className="flex flex-col w-1/2">
              <label className="text-lg font-medium mb-1">Last name</label>
              <input
                type="text"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="border px-4 py-2 rounded-md focus:outline-none"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col w-1/2">
              <label className="text-lg font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="border px-4 py-2 rounded-md focus:outline-none"
              />
              {validation?.email && (
                <p className="text-red-500 text-sm">{validation.email}</p>
              )}
            </div>
            <div className="flex flex-col w-1/2">
              <label className="text-lg font-medium mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                value={data.phone}
                maxLength={10}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="border px-4 py-2 rounded-md focus:outline-none"
              />
              {validation?.phone && (
                <p className="text-red-500 text-sm">{validation.phone}</p>
              )}
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col w-1/2">
              <label className="text-lg font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="border px-4 py-2 rounded-md focus:outline-none"
              />
              {validation?.password && (
                <p className="text-red-500 text-sm">{validation.password}</p>
              )}
            </div>
            <div className="flex flex-col w-1/2">
              <label className="text-lg font-medium mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="border px-4 py-2 rounded-md focus:outline-none"
              />
              {validation?.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {validation.confirmPassword}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-1">Address</label>
            <input
              name="address"
              value={data.address}
              onChange={handleChange}
              placeholder="Enter your address"
              className="border px-4 py-2 rounded-md focus:outline-none"
            />
            {validation?.address && (
              <p className="text-red-500 text-sm">{validation.address}</p>
            )}
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col w-1/2">
              <label className="text-lg font-medium mb-1">City</label>
              <input
                type="text"
                name="city"
                value={data.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className="border px-4 py-2 rounded-md focus:outline-none"
              />
              {validation?.city && (
                <p className="text-red-500 text-sm">{validation.city}</p>
              )}
            </div>
            <div className="flex flex-col w-1/2">
              <label className="text-lg font-medium mb-1">State</label>
              <input
                type="text"
                name="state"
                value={data.state}
                onChange={handleChange}
                placeholder="Enter your state"
                className="border px-4 py-2 rounded-md focus:outline-none"
              />
              {validation?.state && (
                <p className="text-red-500 text-sm">{validation.state}</p>
              )}
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="px-5 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
