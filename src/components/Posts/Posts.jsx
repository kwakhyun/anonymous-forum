import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Posts = ({ post }) => {
  const { post_id, nickname, password, date, title, content, commtents } = post;
  const navigate = useNavigate();
  const goToDeatil = () => {
    navigate(`/api/posts/${post_id}`);
  };
  return (
    <PostContainer onClick={goToDeatil}>
      <PostId>{post_id}</PostId>
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
  flex: 1 1 2%;
  margin-right: 0.5em;
`;
const PostTitle = styled.div`
  flex: 1 1 80%;
`;
const PostNickname = styled.div`
  flex: 1 1 5%;
  text-align: right;
  margin-right: 1em;
`;
const PostDate = styled.div`
  flex: 1 1 5%;
`;

export default Posts;