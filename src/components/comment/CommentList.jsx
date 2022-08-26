import { useGetData } from "../../hook";
import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";

const CommentList = ({ id }) => {
  const [datas] = useGetData("comments", id);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(datas.data);
  }, [datas]);

  return (
    <div>
      {data &&
        data.list.map((comment) => {
          return <CommentCard key={comment.id} comment={comment}></CommentCard>;
        })}
    </div>
  );
};

export default CommentList;
