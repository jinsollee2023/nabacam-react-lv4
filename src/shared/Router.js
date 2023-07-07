import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";
import GlobalStyle from "../style/GlobalStyles";
import Layout from "./Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post-write" element={<PostWrite />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
