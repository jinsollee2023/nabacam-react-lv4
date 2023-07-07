import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addPost } from "../api/posts";

const PostWrite = () => {
  const [title, setTilte] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");

  const queryClient = useQueryClient();
  const mutation = useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("post");
      console.log("성공!!!");
    },
  });

  const onsubmitHandler = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      type,
      price,
      content,
    };

    // todo를 추가하는 reducer 호출
    // 인자 : payload
    // dispatch(addTodo(newTodo));
    mutation.mutate(newPost);

    // state 두 개를 초기화
  };
  return (
    <div>
      <form onSubmit={onsubmitHandler}>
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
        <button>추가</button>
      </form>
    </div>
  );
};

export default PostWrite;
