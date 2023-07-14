import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import Button from "../common/Button/Button";
import { styled } from "styled-components";
import usePosts from "../../hooks/usePostsQueries";

const PostList = () => {
  const { isLoading, isError, data } = usePosts();
  const [searchTxt, setSearchTxt] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(data);
  }, [data]);

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

  const allBtnHandler = () => {
    setPosts(data);
  };

  return (
    <>
      <S.BtnContainer>
        <form onSubmit={searchHandler}>
          <S.SearchInput
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <Button title={"검색"} type={"filter"} />
        </form>
        <div>
          <Button onClick={allBtnHandler} title={"전체"} type={"filter"} />
          <Button
            onClick={() => filterBtnHandler("goodItem")}
            title={"잘산템"}
            type={"filter"}
          />
          <Button
            onClick={() => filterBtnHandler("badItem")}
            title={"못산템"}
            type={"filter"}
          />
        </div>
      </S.BtnContainer>
      {posts?.map((item) => {
        return <Post key={item.id} item={item} />;
      })}
    </>
  );
};

export default PostList;

const S = {
  BtnContainer: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 10px;
  `,
  SearchInput: styled.input`
    width: 300px;
    height: 30px;
  `,
};
