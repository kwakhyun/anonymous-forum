import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Posts = ({ post, postNum }) => {
  const { id, nickname, ip, date, title } = post;
  const navigate = useNavigate();
  const goToDeatil = () => {
    navigate(`/detail/${id}`);
  };

  const dateText = ["년", "월", "일"];
  let dateFormat = date.split(" ", 1)[0].split(".");
  let dateFormated = "";

  dateText.forEach(
    (_, idx) => (dateFormated += `${dateFormat[idx]}${dateText[idx]} `)
  );

  return (
    <PostContainer onClick={goToDeatil}>
      <PostId>{postNum}</PostId>
      <PostTitle>{title}</PostTitle>
      <PostNickname>
        {nickname} ({ip})
      </PostNickname>
      <PostDate>{dateFormated}</PostDate>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  display: flex;
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
  flex: 1 1 60%;
`;
const PostNickname = styled.div`
  flex: 1 1 15%;
  text-align: right;
  margin-right: 0.5em;
`;
const PostDate = styled.div`
  flex: 1 1 20%;
  text-align: center;
`;

export default Posts;
