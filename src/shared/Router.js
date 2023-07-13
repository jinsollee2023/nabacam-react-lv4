import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";
import GlobalStyle from "../style/GlobalStyles";
import Layout from "./Layout";
import PostEdit from "../pages/PostEdit";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/post-write"
            element={
              <PrivateRoute>
                <PostWrite />
              </PrivateRoute>
            }
          />
          <Route
            path="/post-edit"
            element={
              <PrivateRoute>
                <PostEdit />
              </PrivateRoute>
            }
          />
          <Route
            path="/post/:id"
            element={
              <PrivateRoute>
                <PostDetail />
              </PrivateRoute>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;

{
  /* 만일 인증정보가 없다면 redirect Login */
}
{
  /* {!isAuthorized ? <Redirect to="/login" /> : <Redirect to="/"  } */
}

{
  /* {!isAuthorized ? <Redirect to="/login" /> : <Redirect to="/" />}
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/">
          <Layout />
        </Route>
      </Switch> */
}
