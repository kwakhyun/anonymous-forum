import axios from "axios";
import { useEffect, useState } from "react";
/**
 * postId : "고유 값"
 * nickname : "이름"
 * date : "작성일"
 * title : "제목"
 * content : "내용"
 */
const useGetData = (table, id) => {
  const [url, setUrl] = useState(`http://localhost:3001/${table}/${id}`);
  const [value, setValue] = useState("");

  useEffect(() => {
    axios.get(url).then((data) => setValue(data));
  }, [url]);

  return [value];
};

export default useGetData;
