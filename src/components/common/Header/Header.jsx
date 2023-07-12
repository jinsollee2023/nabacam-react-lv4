import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { TbSmartHome } from "react-icons/tb";

const Header = () => {
  const navigate = useNavigate();
  return (
    <S.HeaderContainer>
      <S.HomeBox onClick={() => navigate("/")}>
        <TbSmartHome size={45} />
      </S.HomeBox>
      <S.ProfileBox>
        <S.Img src="https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfMTgy/MDAxNjA0MjI4ODc1NDMw.Ex906Mv9nnPEZGCh4SREknadZvzMO8LyDzGOHMKPdwAg.ZAmE6pU5lhEdeOUsPdxg8-gOuZrq_ipJ5VhqaViubI4g.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%ED%95%98%EB%8A%98%EC%83%89.jpg?type=w800" />
        <span>익명의 구매자님 안녕!</span>
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
  Img: styled.img`
    width: 40px;
    border-radius: 100%;
    margin-right: 15px;
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
  `,
};
