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
    </Div>
  );
};

const Div = styled.div`
  width: 80%;
  margin-top: 10px;
  min-width: 800px;
  max-width: 1200px;
  border: none;
  border-top: 2px solid blue;
  border-bottom: 2px solid blue;
`;

export default CommentList;
