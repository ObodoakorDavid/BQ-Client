import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

const PrivateRoute = () => {
  const { token, handleGetUser } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      toast.error("You have to sign in first", {
        id: "unique",
      });
      setLoading(false);
      return;
    }

    const validateUser = async () => {
      await handleGetUser();
      setLoading(false);
    };

    validateUser();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return token ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
