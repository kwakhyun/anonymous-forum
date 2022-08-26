import styled from "styled-components";
import { MainButton } from "../mainButton";

const CommentCard = ({ comment }) => {
  return (
    <DivComment>
      <h3>{comment.nickname}</h3>
      <h3>내용:{comment.comment}</h3>
      <h3>작성일:{comment.date}</h3>
      <MainButton onClick={() => alert("수정하기")}>수정하기</MainButton>
    </DivComment>
  );
};

const DivComment = styled.div`
  width: 800px;
  border: 1px solid black;
  height: 100px;
  display: flex;
  justify-content: space-between;
`;

export default CommentCard;
