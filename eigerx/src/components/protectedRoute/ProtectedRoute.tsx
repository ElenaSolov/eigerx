import React from "react";
import { Navigate, useLocation } from "react-router-dom";

interface IProtectedRoot {
  children: JSX.Element;
  redirectPath?: string;
}
function ProtectedRoute({
  children,
  redirectPath = "/",
}: IProtectedRoot): JSX.Element {
  const user = localStorage.getItem('email');
  const location = useLocation();
  if (!user) {
    return <Navigate to={redirectPath} replace state={location.pathname} />;
  }
  return children;
}

export default ProtectedRoute;
