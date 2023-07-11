import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { BiLike, BiDislike } from "react-icons/bi";

const Post = ({ item }) => {
  const navigate = useNavigate();
  return (
    <S.PostContainer key={item.id}>
      <div>{item.type == "goodItem" ? <BiLike /> : <BiDislike />}</div>
      <div>{item.title}</div>
      <button onClick={() => navigate(`/post/${item.id}`)}>상세</button>
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
    border-bottom: skyblue 2px solid;
  `,
};
