import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { getPosts, deletePost, patchPost } from "../../api/posts";
import { useNavigate } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const PostDetailBox = () => {
  const { isLoading, isError, data } = useQuery("posts", getPosts);
  const params = useParams();
  const navigate = useNavigate();
  const [title, setTilte] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");

  const queryClient = useQueryClient();
  const deleteMutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
      console.log("삭제 성공!!!");
    },
  });
  // const updateMutation = useMutation(patchPost, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries("posts");
  //     console.log("수정 성공!!!");
  //   },
  // });

  if (isLoading) {
    return <div>로딩중!</div>;
  }

  if (isError) {
    return <div>에러 났당!</div>;
  }

  const detailPost = data.find((item) => item.id == params.id);

  const deleteBtnHandler = () => {
    deleteMutation.mutate(detailPost.id);
    alert("삭제 성공!");
    navigate("/");
  };

  // const changeOnsubmitHandler = (e) => {
  //   e.preventDefault();
  //   const updatedPost = { id: detailPost.id, title, type, price, content };
  //   updateMutation.mutate(updatedPost);
  //   alert("수정 성공!");
  // };

  return (
    <>
      <div>{detailPost.title}</div>
      <div>{detailPost.type}</div>
      <div>{detailPost.price}</div>
      <div>{ReactHtmlParser(detailPost.content)}</div>
      <button onClick={() => navigate("/post-edit", { state: { detailPost } })}>
        수정
      </button>
      <button onClick={deleteBtnHandler}>삭제</button>
    </>
  );
};

export default PostDetailBox;
