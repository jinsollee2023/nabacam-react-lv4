import React, { useEffect, useState } from "react";
import Header from "../components/common/Header/Header";
import { styled } from "styled-components";
import useUserQueries from "../hooks/useUsersQueries";

const Layout = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);

  const { data } = useUserQueries();

  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/register" ||
    !data
  ) {
    return (
      <>
        <StLayout>{children}</StLayout>
      </>
    );
  } else
    return (
      <>
        <StHeader
          style={
            scrollPosition > 50 ? { boxShadow: "0 1px 20px 1px #EB455F" } : null
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

// const { data, isError, isLoading } = useUserQueries();

//   if (isLoading) {
//     return <div>로딩중...</div>;
//   }

//   if (isError) {
//     return (
//       <>
//         <div>로그인 후에 확인 가능합니다</div>
//         <Link to="/">로그인하러 가기!</Link>
//       </>
//     );
//   }
