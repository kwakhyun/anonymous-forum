import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/modules/postSlice";
import axios from "axios";
import styled from "styled-components";
import Button from "../components/mainButton/MainButton";

const PostPage = () => {
  const title = useRef(null);
  const content = useRef(null);
  const nickname = useRef(null);
  const password = useRef(null);

  const date = new Date();
  const year = date.getFullYear();
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const day = `0${date.getDate()}`.slice(-2);
  const time =
    `0${date.getHours()}`.slice(-2) +
    ":" +
    `0${date.getMinutes()}`.slice(-2) +
    ":" +
    `0${date.getSeconds()}`.slice(-2);
  const post_time = `${year}.${month}.${day} ${time}`;

  const [ip, setIp] = useState("");
  const userIp = ip.split(".").slice(0, 2).join(".");

  const getIp = async () => {
    const { data } = await axios.get("https://api.ipify.org?format=json");
    setIp(data.ip);
  };

  useEffect(() => {
    getIp();
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <PostPageStyle>
      <InlineInput>
        <input ref={nickname} placeholder="닉네임" />
        <input ref={password} type="password" placeholder="비밀번호" />
      </InlineInput>
      <input ref={title} placeholder="제목" />
      <textarea ref={content} placeholder="내용" />
      <ButtonDiv>
        <Button
          onClick={() => {
            if (nickname.current.value === "") {
              alert("닉네임을 입력하세요.");
              nickname.current.focus();
            } else if (password.current.value === "") {
              alert("비밀번호를 입력하세요.");
              password.current.focus();
            } else if (title.current.value === "") {
              alert("제목을 입력하세요.");
              title.current.focus();
            } else if (content.current.value === "") {
              alert("내용을 입력하세요.");
              content.current.focus();
            } else if (password.current.value.length < 4) {
              alert("비밀번호는 최소 4자리 이상 입력해주세요.");
              password.current.focus();
            } else if (title.current.value.length < 2) {
              alert("제목은 최소 2자 이상 입력해주세요.");
              title.current.focus();
            } else {
              dispatch(
                addPost({
                  id: v4(),
                  nickname: nickname.current.value,
                  password: content.current.value,
                  title: title.current.value,
                  content: content.current.value,
                  date: post_time,
                  ip: userIp,
                })
              );
              navigate("/");
            }
          }}
        >
          글 게시
        </Button>
        <Button onClick={() => navigate(-1)}>뒤로가기</Button>
      </ButtonDiv>
    </PostPageStyle>
  );
};

const PostPageStyle = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  input {
    width: 100%;
    height: 30px;
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 10px;
  }
  textarea {
    width: 100%;
    height: 300px;
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
  }
`;

const InlineInput = styled.div`
  display: flex;
  input {
    width: 200px;
    margin-right: 10px;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  button {
    margin-left: 10px;
  }
  /* button {
    width: 100px;
    height: 50px;
    margin-left: 10px;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;
    color: #000;
    cursor: pointer;
    &:hover {
      background-color: #000;
      color: #fff;
    }
  } */
`;

export default PostPage;
