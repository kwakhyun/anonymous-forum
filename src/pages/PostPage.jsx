import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/modules/postSlice";
import axios from "axios";

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
    <div>
      <input ref={nickname} placeholder="닉네임" />
      <input ref={password} type="password" placeholder="비밀번호" />
      <br />
      <input ref={title} placeholder="제목" />
      <br />
      <textarea ref={content} placeholder="내용" />
      <button
        onClick={() => {
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
        }}
      >
        글 게시
      </button>
    </div>
  );
};

export default PostPage;
