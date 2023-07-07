import React from "react";
import Header from "../components/Header/Header";
import { styled } from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <StHeader>
        <Header />
      </StHeader>

      <StLayout>{children}</StLayout>
    </>
  );
};

export default Layout;

const StHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
`;

const StLayout = styled.div`
  width: 80%;
  margin: 0 auto;
`;
