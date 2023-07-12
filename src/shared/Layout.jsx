import React, { useEffect, useState } from "react";
import Header from "../components/common/Header/Header";
import { styled } from "styled-components";

const Layout = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);

  return (
    <>
      <StHeader
        style={
          scrollPosition > 100 ? { boxShadow: "0 1px 20px 1px #EB455F" } : null
        }
      >
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
  box-shadow: ${(props) => props.color || null};
`;

const StLayout = styled.div`
  width: 80%;
  margin: 0 auto;
`;
