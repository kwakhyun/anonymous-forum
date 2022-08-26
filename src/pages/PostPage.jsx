import { useParams } from "react-router-dom";
import { useGetData } from "../hook";

const PostPage = () => {
  const { id } = useParams();
  const value = useGetData(id);
  console.log(value);

  return <div>{id}</div>;
};

export default PostPage;
