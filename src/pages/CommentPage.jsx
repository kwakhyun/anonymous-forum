import { useParams } from "react-router-dom";
import { useGetPost } from "../hook";

const DetailPage = () => {
  const { id } = useParams();
  const value = useGetPost(id);
  console.log(value);

  return <div>{id}</div>;
};

export default DetailPage;
