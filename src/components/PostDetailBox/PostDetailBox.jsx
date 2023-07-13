import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import usePosts from "../../hooks/usePosts";
import Button from "../common/Button/Button";
import { styled } from "styled-components";
import { BiLike, BiDislike } from "react-icons/bi";

const PostDetailBox = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError, mutationDelete } = usePosts();

  if (isLoading) {
    return <div>로딩중!</div>;
  }

  if (isError) {
    return <div>에러 났당!</div>;
  }

  const detailPost = data.find((item) => item.id == params.id);

  const deleteBtnHandler = () => {
    mutationDelete.mutate(detailPost.id);
    alert("삭제 성공!");
    navigate("/home");
  };

  const editBtnHandler = () => {
    navigate("/post-edit", { state: { detailPost } });
  };

  return (
    <>
      <S.MainInfoContainer>
        <S.Type>
          {detailPost.type == "goodItem" ? <BiLike /> : <BiDislike />}
        </S.Type>
        <S.Title>{detailPost?.title}</S.Title>
        <S.Price>{Number(detailPost?.price).toLocaleString()} 원</S.Price>
      </S.MainInfoContainer>
      <S.Content>{ReactHtmlParser(detailPost?.content)}</S.Content>
      <S.BtnContainer>
        <Button onClick={editBtnHandler} title={"수정"} type={"detail"} />
        <Button onClick={deleteBtnHandler} title={"삭제"} type={"detail"} />
      </S.BtnContainer>
    </>
  );
};

export default PostDetailBox;

const S = {
  MainInfoContainer: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  Type: styled.span`
    width: 10%;
    height: 50px;
    border: solid black 1px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Title: styled.span`
    width: 65%;
    height: 50px;
    margin: 10px;
    border: solid black 1px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Price: styled.span`
    width: 25%;
    height: 50px;
    border: solid black 1px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Content: styled.div`
    height: 500px;
    border: solid black 1px;
    padding: 2%;
    margin-bottom: 20px;
    overflow: auto;
  `,
  BtnContainer: styled.div`
    display: flex;
    justify-content: center;
  `,
};
