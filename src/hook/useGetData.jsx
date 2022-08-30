import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/**
 * postId : "고유 값"
 * nickname : "이름"
 * date : "작성일"
 * title : "제목"
 * content : "내용"
 */
const useGetData = async (table, id) => {
  const [url, setUrl] = useState(`http://localhost:3001/${table}/${id}`);
  const [value, setValue] = useState("");

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(url)
        .then((res) => setValue(res.data))
        .catch(() => setValue({ id: id, list: [] }));
    };
    getData();
  }, [url]);

  return value;
};

export default useGetData;
