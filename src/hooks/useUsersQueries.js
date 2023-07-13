import { useMutation, useQuery, useQueryClient } from "react-query";
import { addUser, getUsers, loginUser } from "../api/user";
import { useNavigate } from "react-router-dom";

const useUserQueries = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery("users", getUsers, {
    onError: () => {
      alert("토큰이 만료되었습니다. \n다시 로그인해주세요.");
    },
  });

  const addUserMutation = useMutation(addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
      alert("회원가입 완료!!!");
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
      alert("이미 존재하는 유저 id 입니다.");
    },
  });

  const loginUserMutation = useMutation(loginUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
      alert("로그인 완료!!!");
      navigate("/home");
    },
    onError: (error) => {
      console.log(error);
      alert("id 또는 password가 존재하지 않습니다.");
    },
  });

  return {
    data,
    isLoading,
    isError,
    addUserMutation,
    loginUserMutation,
  };
};

export default useUserQueries;
