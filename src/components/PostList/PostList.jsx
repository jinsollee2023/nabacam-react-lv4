import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getPosts } from "../../api/posts";
import Post from "../Post/Post";

const PostList = () => {
  const { isLoading, isError, data } = useQuery("posts", getPosts, {
    keepPreviousData: true,
  });
  const [searchTxt, setSearchTxt] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(data);
  }, [data]);

  console.log("posts", posts);

  if (isLoading) {
    return <div>로딩중!</div>;
  }

  if (isError) {
    return <div>에러 났당!</div>;
  }

  const searchHandler = (e) => {
    e.preventDefault();
    const searchPost = data.filter((item) => {
      return item.title.replace(" ", "").includes(searchTxt.replace(" ", ""));
    });
    setPosts(searchPost);
    setSearchTxt("");
  };

  const filterBtnHandler = (type) => {
    const filteredPost = data.filter((item) => item.type === type);
    setPosts(filteredPost);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <form onSubmit={searchHandler}>
          <input
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button>검색</button>
        </form>

        <div>
          <button
            onClick={() => {
              setPosts(data);
            }}
          >
            전체
          </button>
          <button
            onClick={() => {
              filterBtnHandler("goodItem");
            }}
          >
            잘산템
          </button>
          <button
            onClick={() => {
              filterBtnHandler("badItem");
            }}
          >
            못산템
          </button>
        </div>
      </div>
      {posts?.map((item) => {
        return <Post key={item.id} item={item} />;
      })}
    </>
  );
};

export default PostList;
