import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Button from "../common/Button/Button";

const Main = () => {
  const navigate = useNavigate();
  const scrollRef = useRef();

  const scrollToPost = () => {
    scrollRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const goToWriteBtnHandler = () => {
    navigate("/post-write");
  };

  return (
    <div>
      <S.MainContainer>
        <S.MainTitle>🛍 내돈내산 🛍</S.MainTitle>
        <S.SubTitle>오늘의 잘산템은? 오늘의 못산템은?</S.SubTitle>
        <div>
          <Button
            onClick={goToWriteBtnHandler}
            title={"작성하러 가기"}
            type={"main"}
          />
          <Button
            onClick={scrollToPost}
            title={"구경하러 가기"}
            type={"main"}
          />
        </div>
      </S.MainContainer>
      <div ref={scrollRef}></div>
    </div>
  );
};

export default Main;

const S = {
  MainContainer: styled.div`
    height: 80vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  MainTitle: styled.h1`
    font-size: 90px;
    font-weight: 1000;
  `,
  SubTitle: styled.p`
    font-size: 30px;
    margin: 50px;
  `,
};
