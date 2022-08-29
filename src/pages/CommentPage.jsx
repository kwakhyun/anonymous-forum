import { useEffect } from "react";
import styled from "styled-components";
import { CommentForm, CommentList } from "../components";
import { useGetData } from "../hook";

const CommentPage = () => {
  const data = useGetData("comments");
  console.log(data);
  return (
    <DivPage>
      <CommentForm data={data} />
      <CommentList data={data} />
    </DivPage>
  );
};

const DivPage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default CommentPage;
