import { useEffect } from "react";
import styled from "styled-components";
import { CommentForm, CommentList } from "../components";
import { useGetData } from "../hook";
import { postComment } from "../redux/modules/commentSlice";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
const CommentPage = () => {
  const dispatch = useDispatch();
  const param = useParams().id;
  const data = useGetData("comments", param);
  const [length, setLength] = useState(0);
  useEffect(() => {
    data.then((res) => {
      dispatch(postComment({ id: res.id, list: res.list }));
      setLength(res.list.length);
    });
  }, [data, dispatch]);
  return (
    <DivPage>
      <h3>전체 댓글 : {length}</h3>
      <CommentForm />
      <CommentList />
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
