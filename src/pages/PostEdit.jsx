import React from "react";
import { useLocation } from "react-router-dom";
import PostWriteBox from "../components/PostWriteBox/PostWriteBox";

const PostEdit = () => {
  const { state } = useLocation();
  const post = state.detailPost;

  return (
    <div>
      <PostWriteBox filteredPost={post} />
    </div>
  );
};

export default PostEdit;
