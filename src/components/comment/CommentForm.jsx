import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const CommentForm = ({ data }) => {
  const handlePutComment = async () => {
    const newList = { ...data.list };
    newList.push({
      id: newList[newList.length - 1],
      comment: "댓글",
      nickname: "닉네임",
      password: "패스워드",
      date: "작성일",
    });
    const res = await axios.put(`http://localhost:3001/comments/${data.id}`, {
      list: newList,
    });
    console.log(res);
  };
  return (
    <Form>
      <div>
        닉네임
        <input type="text" />
        비밀번호
        <input type="password" />
      </div>
      내용
      <textarea />
      <button type="button" onClick={handlePutComment}>
        달기
      </button>
    </Form>
  );
};

const Form = styled.form`
  width: 80%;
  min-width: 800px;
  max-width: 1200px;
  border: 1px solid black;
`;

export default CommentForm;
