import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { getPosts, deletePost, patchPost } from "../../api/posts";
import { useNavigate } from "react-router-dom";

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
  const updateMutation = useMutation(patchPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
      console.log("수정 성공!!!");
    },
  });

  if (isLoading) {
    return <div>로딩중!</div>;
  }

  if (isError) {
    return <div>에러 났당!</div>;
  }

  console.log("params.id", params.id);
  console.log("params", params);

  const detailPost = data.find((item) => item.id == params.id);
  // const detailPost = data.filter((item) => item.id == params.id)[0];
  console.log("data", data);
  console.log("detailPost", detailPost);

  const deleteBtnHandler = () => {
    deleteMutation.mutate(detailPost.id);
    alert("삭제 성공!");
    navigate("/");
  };

  const changeOnsubmitHandler = (e) => {
    e.preventDefault();
    const updatedPost = { id: detailPost.id, title, type, price, content };
    updateMutation.mutate(updatedPost);
    alert("수정 성공!");
  };

  return (
    <div>
      <div>{detailPost.title}</div>
      <div>{detailPost.type}</div>
      <div>{detailPost.price}</div>
      <div>{detailPost.content}</div>
      <button onClick={deleteBtnHandler}>삭제</button>

      <form onSubmit={changeOnsubmitHandler}>
        <input
          value={title}
          placeholder="title"
          onChange={(e) => {
            setTilte(e.target.value);
          }}
        />
        <input
          value={type}
          placeholder="type"
          onChange={(e) => {
            setType(e.target.value);
          }}
        />
        <input
          value={price}
          placeholder="price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <input
          value={content}
          placeholder="content"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button>수정</button>
      </form>
    </div>
  );
};

export default PostDetailBox;
