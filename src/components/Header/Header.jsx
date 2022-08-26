import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { MainButton } from "../MainButton";
// import { img_home } from "../../public/home_icon.png";
import img_home from "./home_icon.png";

const Header = () => {
  const navigate = useNavigate();

  const goToPost = () => {
    navigate("/api/post");
  };
  const goToHome = () => {
    navigate("/");
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
  border-bottom: 2px solid grey;
`;

const Title = styled.h1``;

const HomeImg = styled.img`
  height: 3em;
  cursor: pointer;
`;

export default Header;
