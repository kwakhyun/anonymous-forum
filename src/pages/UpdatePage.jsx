import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updatePost } from "../redux/modules/postSlice";
import styled from "styled-components";

const UpdatePage = () => {
  const title = useRef(null);
  const content = useRef(null);

  const params = useParams();
  const navigate = useNavigate();

  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();

  const info = posts.reduce((acc, cur, idx) => {
    if (cur.id === params.id) {
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

  return (
    <UpdatePageStyle>
      <div>
        {info.nickname}({info.ip}) | {info.date}
      </div>
      <hr />
      <div>
        <input type="text" defaultValue={info.title} ref={title} />
        <br />
        <textarea defaultValue={info.content} ref={content} />
      </div>
      <ButtonDiv>
        <button
          onClick={() => {
            dispatch(
              updatePost({
                ...info,
                title: title.current.value,
                content: content.current.value,
              })
            );
            navigate("/");
          }}
        >
          등록
        </button>
        <button onClick={() => navigate(-1)}>취소</button>
      </ButtonDiv>
    </UpdatePageStyle>
  );
};

const UpdatePageStyle = styled.div`
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
    font-size: 14px;
  }
  textarea {
    width: 100%;
    height: 300px;
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    font-size: 14px;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  button {
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
  }
`;

export default UpdatePage;
