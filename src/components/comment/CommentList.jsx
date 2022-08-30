import CommentCard from "./CommentCard";
import styled from "styled-components";
import { useSelector } from "react-redux";

const CommentList = () => {
  const { list } = useSelector((state) => state.comment);

  return (
    <Div>
      {list &&
        list.map((comment) => {
          return <CommentCard key={comment.id} comment={comment} />;
        })}
      {!list && <div>댓글이 없습니다.</div>}
    </Div>
  );
};

const Div = styled.div`
  width: 80%;
  margin-top: 10px;
  min-width: 800px;
  max-width: 1200px;

  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;

export default CommentList;
