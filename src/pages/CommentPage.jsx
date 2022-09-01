import { useEffect } from "react";
import styled from "styled-components";
import { CommentForm, CommentList } from "../components";
import { useGetData } from "../hook";
import { postComment } from "../redux/modules/commentSlice";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const CommentPage = () => {
  const dispatch = useDispatch();
  const param = useParams().id;
  const data = useGetData("comments", param);
  const formData = { nickname: "", password: "", content: "" };

  useEffect(() => {
    data.then((res) => {
      dispatch(postComment({ id: res.id, list: res?.list }));
    });
  }, [data]);

  return (
    <DivPage>
      <CommentList />
      <CommentForm formData={formData} />
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
  margin-top: 50px;
`;

export default CommentPage;
