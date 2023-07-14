import React from "react";
import { Navigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getUsers } from "../api/user";
import { getCookie, removeCookie } from "../cookie/cookies";

const PrivateRoute = ({ children }) => {
  let accessToken = getCookie("accessToken");

  const { isError } = useQuery("users", getUsers);

  if (isError) {
    removeCookie("accessToken");
    accessToken = null;
    alert("토큰이 만료되었습니다. \n다시 로그인해주세요.");
    window.location.reload();
  }

  return accessToken ? (
    children
  ) : (
    <Navigate to="/" {...alert("접근할 수 없는 페이지입니다.")} />
  );
};

export default PrivateRoute;
