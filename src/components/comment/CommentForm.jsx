import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetTime } from "../../hook/useGetTime";
import styled from "styled-components";
import { v4 } from "uuid";
import { postComment } from "../../redux/modules/commentSlice";
import { MainButton } from "../mainButton";

const CommentForm = ({ formData }) => {
  const time = useGetTime();
  const [ip, setIp] = useState();
  const { id, list } = useSelector((state) => state.comment);
  const [form, setForm] = useState(formData);

  const dispatch = useDispatch();

  const nicknameRef = useRef();
  const passwordRef = useRef();
  const contentRef = useRef();

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    setForm({
      nickname: nicknameRef.current.value,
      password: passwordRef.current.value,
      content: contentRef.current.value,
    });
  };

  const getIp = async () => {
    const { data } = await axios.get("https://api.ipify.org?format=json");
    setIp(data.ip.split(".").slice(0, 2).join("."));
  };

  useEffect(() => {
    getIp();
  });

  const handlePutComment = async () => {
    if (!form.nickname || !form.password || !form.content) {
      return alert("빈칸을 모두 입력해 주세요.");
    }

    const newList = list ? [...list] : [];

    if (newList) {
      newList.push({
        id: v4(),
        ip: ip,
        comment: form.content,
        nickname: form.nickname,
        password: form.password,
        date: time,
      });
    } else {
      return;
    }

    await axios
      .put(`${process.env.REACT_APP_URL}/comments/${id}`, {
        list: newList,
      })
      .then(() => {
        dispatch(postComment({ id: id, list: newList }));
        nicknameRef.current.value = "";
        passwordRef.current.value = "";
        contentRef.current.value = "";
      });
  };
  return (
    <Form>
      <Div>
        <DivText>
          <input
            placeholder="닉네임"
            name="nickname"
            type="text"
            ref={nicknameRef}
            onChange={onChange}
          />
          <input
            type="password"
            placeholder="비밀번호"
            ref={passwordRef}
            onChange={onChange}
          />
        </DivText>
        <DivContent>
          <textarea ref={contentRef} placeholder="내용" onChange={onChange} />
        </DivContent>
      </Div>
      <ButtonDiv>
        <MainButton
          type="button"
          onClick={handlePutComment}
          width="150px"
          height="100px"
        >
          등록
        </MainButton>
      </ButtonDiv>
    </Form>
  );
};

const Form = styled.form`
  border: none;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  padding: 20px;
  background-color: #f5f5f5;
  margin-top: 50px;
  margin-bottom: 200px;
`;

const Div = styled.div`
  display: flex;
  width: 80%;
  min-width: 800px;
  max-width: 1200px;
  height: 100px;
`;

const DivText = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
  height: 100%;
  width: 200px;
  padding: 0 10px;
  input {
    border-radius: 4px;
    border: 1px solid #888;
  }
`;

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  textarea {
    height: 100px;
    margin-left: auto;
    width: 100%;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 10px;
  button {
    width: 90px;
    height: 30px;
    font-size: 14px;
  }
`;

export default CommentForm;
