import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  // Replace with actual authentication logic
  const user = { loggedIn: true, role: "admin" };
  return user && user.loggedIn && user.role === "admin";
};

const AdminRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminRoute;