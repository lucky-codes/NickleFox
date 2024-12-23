import React, { useState } from "react";
import { createContext } from "react";
export const DataContext = createContext();
const UserContex = ({ children }) => {
  const [model, setModel] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [signupData, setSignupData] = useState({
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
  const [user, setUser] = useState(null);
  const value = {
    model,
    setModel,
    isMenuOpen,
    setIsMenuOpen,
    signupData,
    setSignupData,
    user,
    setUser,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default UserContex;
