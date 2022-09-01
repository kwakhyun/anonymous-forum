import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updatePost, getPost } from "../redux/modules/postSlice";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Button from "../components/mainButton/MainButton";

const UpdatePage = () => {
  const title = useRef(null);
  const content = useRef(null);

  const params = useParams();
  const navigate = useNavigate();

  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

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
    <>
      <Header />
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
          <Button
            onClick={() => {
              if (title.current.value === "") {
                alert("제목을 입력해주세요.");
                title.current.focus();
              } else if (content.current.value === "") {
                alert("내용을 입력해주세요.");
                content.current.focus();
              } else if (title.current.value.length < 2) {
                alert("제목은 최소 2자 이상 입력해주세요.");
                title.current.focus();
              } else {
                dispatch(
                  updatePost({
                    ...info,
                    title: title.current.value,
                    content: content.current.value,
                  })
                ).then(() => {
                  navigate("/");
                });
              }
            }}
          >
            등록
          </Button>
          <Button
            onClick={() => {
              if (window.confirm("수정을 취소하시겠습니까?")) navigate(-1);
            }}
          >
            취소
          </Button>
        </ButtonDiv>
      </UpdatePageStyle>
    </>
  );
};

const UpdatePageStyle = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  min-width: 500px;
  max-width: 800px;
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
`;

export default UpdatePage;
