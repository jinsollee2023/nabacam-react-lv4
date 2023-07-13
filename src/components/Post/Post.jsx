import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { BiLike, BiDislike } from "react-icons/bi";

const Post = ({ item }) => {
  const navigate = useNavigate();
  const detailBtnHandler = () => {
    navigate(`/post/${item.id}`);
  };
  return (
    <S.PostContainer key={item.id} onClick={detailBtnHandler}>
      <S.Type>{item.type == "goodItem" ? <BiLike /> : <BiDislike />}</S.Type>
      <S.Title>{item.title}</S.Title>
      <S.Price>{Number(item.price).toLocaleString()}원</S.Price>
    </S.PostContainer>
  );
};

export default Post;

const S = {
  PostContainer: styled.div`
    height: 70px;

    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: #eb455f 1.5px solid;

    cursor: pointer;
  `,
  Type: styled.span`
    width: 10%;
    display: flex;
    justify-content: center;
  `,
  Title: styled.span`
    width: 70%;
    margin-left: 50px;
  `,
  Price: styled.span`
    margin-left: auto;
    margin-right: 3%;
  `,
};
