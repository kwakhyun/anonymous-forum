import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteComment } from "../../redux/modules/commentSlice";
import { MainButton } from "../mainButton";

const CommentCard = ({ comment }) => {
  const dispatch = useDispatch();
  const { id, list } = useSelector((state) => state.comment);
  const handleDeleteComment = async () => {
    const newList = list.filter((v) => v.id !== comment.id);
    await axios.put(`http://localhost:3001/comments/${id}`, {
      list: newList,
    });
    dispatch(deleteComment({ list: newList }));
  };

  return (
    <DivComment>
      <h3>{comment.nickname}</h3>
      <h3>{comment.comment}</h3>
      <p>{comment.date}</p>
      <DivButton>
        <MainButton onClick={() => alert("수정하기")}>수정하기</MainButton>
        <MainButton color="error" onClick={handleDeleteComment}>
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
  border: none;
  border-bottom: 1px solid grey;
  padding: 5px 0;
  justify-content: space-between;
  align-items: center;
`;

const DivButton = styled.div`
  height: 100%;

  button {
    height: 100%;
  }
`;

export default CommentCard;
