import { useEffect } from "react";
import styled from "styled-components";
import { CommentForm, CommentList } from "../components";
import { useGetData } from "../hook";
import { postComment } from "../redux/modules/commentSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../components/Header";

const CommentPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = useGetData("comments", id);
  const formData = { nickname: "", password: "", content: "" };

  console.log(id);
  useEffect(() => {
    data.then((res) => {
      dispatch(postComment({ id: res.id, list: res?.list }));
    });
  }, [data]);

  return (
    <DivPage>
      <Header />
      <CommentForm formData={formData} />
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
