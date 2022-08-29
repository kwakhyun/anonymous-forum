import React, { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { deletePost } from "../redux/modules/postSlice";

const DetailPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();

  /* 포스트 정보 가져오기 */
  const info = posts.reduce((acc, cur, idx) => {
    if (cur.id === params.id) {
      acc.num = idx + 1;
      acc.id = cur.id;
      acc.title = cur.title;
      acc.content = cur.content;
      acc.nickname = cur.nickname;
      acc.password = cur.password;
      acc.date = cur.date;
      acc.ip = cur.ip;
    }
    return acc;
  }, {});

  console.log(info);

  return (
    <div>
      <span>No.{info.num}</span>
      <h2>{info.title}</h2>
      <div>
        {info.nickname}
        ({info.ip}) | {info.date}
      </div>
      <hr />
      <p>{info.content}</p>
      <button
        onClick={() => {
          let input = prompt("비밀번호를 입력하세요.");
          if (input === info.password) {
            navigate("/update/" + info.id);
          } else {
            alert("비밀번호가 틀렸습니다.");
          }
        }}
      >
        수정
      </button>
      <button
        onClick={() => {
          let input = prompt("비밀번호를 입력하세요.");
          if (input === info.password) {
            dispatch(deletePost(info.id));
            navigate("/");
          } else {
            alert("비밀번호가 틀렸습니다.");
          }
        }}
      >
        삭제
      </button>
      <button onClick={() => navigate("/post")}>글쓰기</button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
};

export default DetailPage;
