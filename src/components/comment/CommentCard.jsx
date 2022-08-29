import styled from "styled-components";
import { MainButton } from "../mainButton";

const CommentCard = ({ postId, comment }) => {
  return (
    <DivComment>
      <h3>{comment.nickname}</h3>
      <h3>내용:{comment.comment}</h3>
      <h3>작성일:{comment.date}</h3>
      <DivButton>
        <MainButton onClick={() => alert("수정하기")}>수정하기</MainButton>
        <MainButton color="error" onClick={() => {}}>
          삭제하기
        </MainButton>
      </DivButton>
    </DivComment>
  );
};

const DivComment = styled.div`
  width: 100%;
  border: 1px solid black;
  height: 100px;
  display: flex;
  justify-content: space-between;
`;

const DivButton = styled.div`
  height: 100%;

  button {
    height: 100%;
  }
`;

export default CommentCard;
