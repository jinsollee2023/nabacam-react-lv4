// axios 요청 들어가는 모든 모듈
import axios from "axios";
import { getCookie, setCookie } from "../cookie/cookies";

// 회원가입
const addUser = async (newUser) => {
  await axios.post("http://3.38.191.164/register", newUser);
};

// 로그인
const loginUser = async (user) => {
  const response = await axios.post("http://3.38.191.164/login", user);
  setCookie("accessToken", response.data.token, {
    path: "/",
    secure: "/",
    // expires: new Date().getMinutes() + 10,
  });
};

// 유저 확인
const getUsers = async () => {
  const accessToken = getCookie("accessToken");
  const response = await axios.get("http://3.38.191.164/user", {
    headers: { authorization: `Bearer ${accessToken}` },
  });
  return response.data;
};

export { addUser, loginUser, getUsers };
