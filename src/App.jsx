import React from "react";
import Body from "./components/Body";
import { Route, Routes } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateRoutes from "./private/PrivateRoutes";
const App = () => {
   const token = localStorage.getItem("token")
  return (
    <div className="overflow-hidden">
      <Routes>
        <Route path="/login" element={token?<Body/>:<Login />} />
        <Route path="/signup" element={token?<Body/>:<Signup />} />
        <Route
          path="/"
          element={
            <PrivateRoutes>
              <Body />
            </PrivateRoutes>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
