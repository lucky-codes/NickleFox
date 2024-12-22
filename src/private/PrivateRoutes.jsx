import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      setLoading(false);
    }
  }, [navigate]); 

  return loading ? <div>Loading.........</div> : <>{children}</>;
};

export default PrivateRoutes;
