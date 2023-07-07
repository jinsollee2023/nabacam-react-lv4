import React from "react";
import { useNavigate } from "react-router-dom";

const Post = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      key={item.id}
      style={{ backgroundColor: "skyblue", marginBottom: "20px" }}
    >
      <div>{item.title}</div>
      <div>{item.type}</div>
      <div>{item.price}</div>
      <button onClick={() => navigate(`/post/${item.id}`)}>상세</button>
    </div>
  );
};

export default Post;
