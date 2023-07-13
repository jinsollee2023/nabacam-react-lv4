import React from "react";
import { Navigate } from "react-router-dom";
import useUserQueries from "../hooks/useUsersQueries";

const PrivateRoute = ({ children }) => {
  const { data } = useUserQueries();
  return data ? (
    children
  ) : (
    <Navigate to="/" {...alert("접근할 수 없는 페이지입니다.")} />
  );
};

export default PrivateRoute;
