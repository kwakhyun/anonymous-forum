import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/modules/postSlice";

const PostPage = () => {
  const title = useRef(null);
  const content = useRef(null);
  const nickname = useRef(null);
  const password = useRef(null);
  const date = new Date();
  const y = date.getFullYear();
  const m = `0${date.getMonth() + 1}`.slice(-2);
  const d = `0${date.getDate()}`.slice(-2);
  const today = `${y}년 ${m}월 ${d}일`;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      닉네임
      <input ref={nickname} />
      비밀번호
      <input ref={password} type="password" />
      <span>제목</span>
      <input ref={title} />
      <span>내용</span>
      <textarea ref={content} />
      <button
        onClick={() => {
          dispatch(
            addPost({
              id: v4(),
              nickname: nickname.current.value,
              password: content.current.value,
              title: title.current.value,
              content: content.current.value,
              date: today,
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
