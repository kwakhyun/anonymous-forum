import { useGetData } from "../../hook";
import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import styled from "styled-components";

const CommentList = ({ data }) => {
  const [value, setValue] = useState([]);
  let id = "";
  data.then((res) => {
    id = res.id;
    setValue(res.list);
  });
  return (
    <Div>
      {value &&
        value.map((comment) => {
          return (
            <CommentCard
              key={comment.id}
              postId={id}
              comment={comment}
            ></CommentCard>
          );
        })}
    </Div>
  );
};

const Div = styled.div`
  width: 80%;
  min-width: 800px;
  max-width: 1200px;
`;

export default CommentList;
