import { useParams } from "react-router-dom";
import { CommentList } from "../components";

const CommentPage = () => {
  const { id } = useParams();
  return <CommentList id={id}></CommentList>;
};

export default CommentPage;
