import React from "react";
import { useQuery } from "react-query";
import { getPosts } from "../../api/posts";
import Post from "../Post/Post";

const PostList = () => {
  const { isLoading, isError, data } = useQuery("posts", getPosts);
  console.log(data);

  if (isLoading) {
    return <div>로딩중!</div>;
  }

  if (isError) {
    return <div>에러 났당!</div>;
  }

  return (
    <>
      {data.map((item) => {
        return <Post key={item.id} item={item} />;
      })}
    </>
  );
};

export default PostList;
