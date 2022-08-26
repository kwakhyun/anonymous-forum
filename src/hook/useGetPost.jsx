import axios from "axios";
import { useEffect, useState } from "react";
/**
 * postId : "고유 값"
 * nickname : "이름"
 * date : "작성일"
 * title : "제목"
 * content : "내용"
 */
const useGetPost = (id) => {
  const [url, setUrl] = useState(`/api/posts/${id}`);
  const [value, setValue] = useState("");

  useEffect(() => {
    const getData = () => axios.get(url).then((data) => setValue(data));
    getData();
  }, [url]);

  return [value];
};

export default useGetPost;
