import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updatePost } from "../redux/modules/postSlice";

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
    <div>
      <div>
        {info.nickname}({info.ip}) | {info.date}
      </div>
      <hr />
      <div>
        <input type="text" defaultValue={info.title} ref={title} />
        <br />
        <textarea defaultValue={info.content} ref={content} />
      </div>
      <button
        onClick={() => {
          console.log({
            ...info,
            title: title.current.value,
            content: content.current.value,
          });
          dispatch(
            updatePost(info.id, {
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
    </div>
  );
};

export default UpdatePage;
