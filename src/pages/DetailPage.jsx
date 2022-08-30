import React, { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../redux/modules/postSlice";
import styled from "styled-components";

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
    <DetailPageWrapper>
      <span>No.{info.num}</span>
      <h2>{info.title}</h2>
      <div>
        {info.nickname}({info.ip}) | {info.date}
      </div>
      <hr />
      <p>{info.content}</p>
      <ButtonDiv>
        <button
          onClick={() => {
            let input = prompt("비밀번호를 입력하세요.");
            if (input === info.password) {
              navigate("/update/" + info.id);
            } else if (input === null) {
              alert("취소되었습니다.");
            } else if (input !== info.password) {
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
              if (window.confirm("게시글을 삭제하시겠습니까?")) {
                dispatch(deletePost(info.id));
                navigate("/");
              } else {
                alert("취소되었습니다.");
              }
            } else if (input === null) {
              alert("취소되었습니다.");
            } else if (input !== info.password) {
              alert("비밀번호가 틀렸습니다.");
            }
          }}
        >
          삭제
        </button>
        <button onClick={() => navigate("/post")}>글쓰기</button>
        <button onClick={() => navigate(-1)}>뒤로가기</button>
      </ButtonDiv>
    </DetailPageWrapper>
  );
};

const DetailPageWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  span {
    font-size: 1.5rem;
    font-weight: bold;
  }
  h2 {
    font-size: 2rem;
    font-weight: bold;
  }
  hr {
    border: 1px solid #ccc;
    margin: 20px 0;
  }
  p {
    font-size: 1.5rem;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 200px;
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

export default DetailPage;
