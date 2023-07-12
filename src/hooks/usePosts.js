import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addPost, deletePost, getPosts, patchPost } from "../api/posts";

const usePosts = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery("posts", getPosts);

  const mutationAdd = useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("post");
      alert("등록 완료!!!");
    },
  });

  const mutationUpdate = useMutation(patchPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
      alert("수정 성공!");
    },
  });

  const mutationDelete = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
      console.log("삭제 성공!!!");
    },
  });

  return {
    data,
    isLoading,
    isError,
    mutationAdd,
    mutationUpdate,
    mutationDelete,
  };
};

export default usePosts;
