import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import MainButton from "../mainButton/MainButton";
// import { img_home } from "../../public/home_icon.png";
import img_home from "./home_icon.png";

const Header = () => {
  const navigate = useNavigate();

  const goToPost = () => {
    navigate("/post");
  };

  // TODO: 새로고침하는 방식 말고 부모만 렌더링되게
  const goToHome = () => {
    // navigate("/");
    window.location.replace("/");
  };

  return (
    <HeaderContainer>
      <HomeImg src={img_home} onClick={goToHome} />
      <Title>유머 게시판</Title>
      <MainButton onClick={goToPost} children="새 글 작성" />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em 0 1em;
  border-bottom: 2px solid grey;
  /* background-color: rebeccapurple; */
`;

const Title = styled.h1``;

const HomeImg = styled.img`
  height: 3em;
  cursor: pointer;
`;

export default Header;
