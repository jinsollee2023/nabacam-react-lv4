import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { TbSmartHome } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import { removeCookie } from "../../../cookie/cookies";

const Header = () => {
  const navigate = useNavigate();
  const logOutBtnHandler = () => {
    removeCookie("accessToken");
    navigate("/");
    window.location.reload();
  };

  return (
    <S.HeaderContainer>
      <S.HomeBox onClick={() => navigate("/home")}>
        <TbSmartHome size={45} />
      </S.HomeBox>
      <S.ProfileBox onClick={logOutBtnHandler}>
        <BiLogOut size={30} />
        <S.ProfileSpan>Log Out</S.ProfileSpan>
      </S.ProfileBox>
    </S.HeaderContainer>
  );
};

export default Header;

const S = {
  HeaderContainer: styled.div`
    padding: 0 10%;
    height: 70px;
    background-color: white;

    display: flex;
    justify-content: space-between;
  `,

  HomeBox: styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
  `,
  ProfileBox: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  `,
  ProfileSpan: styled.span`
    margin-left: 10px;
  `,
};
