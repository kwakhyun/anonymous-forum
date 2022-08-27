import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Posts = ({ post }) => {
  const { id, nickname, password, date, title, content, commtents } = post;
  const navigate = useNavigate();
  const goToDeatil = () => {
    navigate(`/posts/${id}`);
  };
  const postNum = 0;
  return (
    <PostContainer onClick={goToDeatil}>
      <PostId>{postNum}</PostId>
      <PostTitle>{title}</PostTitle>
      <PostNickname>{nickname}</PostNickname>
      <PostDate>{date}</PostDate>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  display: flex;
  /* background-color: beige; */
  box-sizing: border-box;
  padding: 1em;
  border-bottom: 1px solid lightgrey;
  cursor: pointer;
  &:hover {
    background-color: lightgrey;
  }
`;

const PostId = styled.div`
  flex: 1 1 5%;
  margin-right: 0.5em;
`;
const PostTitle = styled.div`
  flex: 1 1 70%;
`;
const PostNickname = styled.div`
  flex: 1 1 5%;
  text-align: right;
  margin-right: 1em;
`;
const PostDate = styled.div`
  flex: 1 1 20%;
`;

export default Posts;
