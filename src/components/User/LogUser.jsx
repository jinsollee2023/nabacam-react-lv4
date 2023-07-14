import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserQueries from "../../hooks/useUsersQueries";
import { styled } from "styled-components";

const LogUser = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { loginUserMutation, addUserMutation } = useUserQueries();

  const loginBtnHandler = (e) => {
    e.preventDefault();
    const newUser = { id, password };
    if (id && password) {
      loginUserMutation.mutate(newUser);
    } else alert("id와 password 모두 입력해주세요!");
  };

  const registerBtnHandler = (e) => {
    e.preventDefault();
    const newUser = { id, password };
    if (id && password) {
      addUserMutation.mutate(newUser);
    } else alert("id와 password 모두 입력해주세요!");
  };

  const navigateBtnHandler = () => {
    if (window.location.pathname === "/") {
      navigate("/register");
    } else {
      navigate("/");
    }
  };
  return (
    <S.LoginContainer>
      <S.Title>🛍 내돈내산 🛍</S.Title>
      <S.LoginBox
        onSubmit={
          window.location.pathname === "/"
            ? loginBtnHandler
            : registerBtnHandler
        }
      >
        <S.LoginInput
          placeholder="id"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <S.LoginInput
          placeholder="pw"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div>
          <S.LogBtn>
            {window.location.pathname === "/" ? "로그인" : "회원가입"}
          </S.LogBtn>
          <S.LogBtn onClick={navigateBtnHandler}>
            {window.location.pathname === "/" ? "회원가입" : "돌아가기"}
          </S.LogBtn>
        </div>
      </S.LoginBox>
    </S.LoginContainer>
  );
};

export default LogUser;

const S = {
  LoginContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 15%;
  `,
  Title: styled.div`
    font-size: 50px;
    margin-bottom: 30px;
  `,
  LoginBox: styled.form`
    width: 400px;
    height: 300px;

    background-color: #eb455f;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 20px;
  `,
  LoginInput: styled.input`
    width: 300px;
    height: 35px;
    margin: 10px;
    border: white 0px solid;
    border-radius: 5px;
  `,
  LogBtn: styled.button`
    width: 100px;
    height: 35px;
    background-color: white;
    border: white 0px solid;
    border-radius: 5px;
    margin: 30px 5px;
  `,
};
