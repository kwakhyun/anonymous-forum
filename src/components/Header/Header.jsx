import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MainButton from "../mainButton/MainButton";
// import { img_home } from "../../../public/home_icon.png";
// import img_home from "";
import img_home from "./home_icon.png";

const Header = () => {
  const navigate = useNavigate();

  const pathname = window.location.pathname;

  const goToPost = () => {
    navigate("/post");
  };

  const goToHome = () => {
    window.location.replace("/");
  };

  return (
    <div>
      <HeaderContainer>
        <HomeImg src={img_home} onClick={goToHome} />
        <Title>모두의 게시판</Title>
        <MainButton
          width="6em"
          onClick={goToPost}
          children="새 글 작성"
          display={pathname === "/" ? "block" : "none"}
        />
      </HeaderContainer>
      <Empty></Empty>
    </div>
  );
};

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em 0 1em;
  border-bottom: 2px solid grey;
  background-color: #fff;
  z-index: 1;
`;

const Empty = styled.div`
  height: 80px;
`;

const Title = styled.h1`
  /* width: 100%; */
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
`;

const HomeImg = styled.img`
  height: 3em;
  cursor: pointer;
`;

export default Header;
