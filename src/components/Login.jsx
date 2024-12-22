import React, { useContext, useState } from "react";
import logo from "../assets/Logo.png";
import { DataContext } from "../context/UserContex";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const { setUser } = useContext(DataContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [validation, setValidation] = useState(null);
  const handleError = () => {
    const error = {};
    const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const password_regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (!data.email.trim()) {
      error.email = "Field is required";
    } else if (!email_regex.test(data.email)) {
      error.email = "Invalid Email";
    }
    if (!data.password.trim()) {
      error.password = "Field is required";
    } else if (!password_regex.test(data.password)) {
      error.password = "Invalid Password";
    }
    if (Object.keys(error).length > 0) {
      setValidation(error);
    } else {
      setValidation(null);
    }
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    handleError();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validation) {
      alert("Please enter all fields correctly");
      return;
    }
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}login`,data);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        setUser(response.data.user);
        navigate("/");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="card bg-white w-[500px] h-auto p-6 shadow-lg rounded-md">
        <div className="flex items-center mb-6">
          <img className="w-10 h-10" src={logo} alt="Logo" />
          <p className="ml-4 text-xl font-semibold">NickleFox</p>
        </div>

        <h2 className="text-2xl font-bold mb-2">Sign in</h2>
        <p className="mb-4 text-sm text-gray-600">
          Don&apos;t have an account?
          <Link
            to="/signup"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Signup
          </Link>
        </p>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email ID
            </label>
            <input
              type="email"
              value={data.email}
              name="email"
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
            {validation?.email && (
              <p className="text-red-500 text-sm">{validation.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              value={data.password}
              name="password"
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
            {validation?.password && (
              <p className="text-red-500 text-sm">{validation.password}</p>
            )}
          </div>

          <div className="text-right">
            <Link
              to=""
              className="text-sm text-blue-500 underline hover:text-blue-700"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign in
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-600">
          or sign in with
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <button className="focus:outline-none">
            <img
              src="https://imagepng.org/wp-content/uploads/2019/08/google-icon.png"
              className="h-8 w-8"
              alt="Google"
            />
          </button>
          <button className="focus:outline-none">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.6-Etwy2306AInODxxbDK6gHaHY&pid=Api&P=0&h=180"
              className="h-8 w-8"
              alt="Facebook"
            />
          </button>
          <button className="focus:outline-none">
            <img
              src="https://s.yimg.com/fz/api/res/1.2/_Q6zhu372kE__Fkv7np8Jg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTEyMDtxPTgwO3c9MTIw/https://s.yimg.com/zb/imgv1/2cc2074d-9408-3c85-a3a8-6bc85315781d/t_500x300"
              className="h-8 w-8"
              alt="LinkedIn"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
