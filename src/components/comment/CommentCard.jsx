import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  editComment,
  updateComment,
  deleteComment,
  getComment,
} from "../../redux/modules/commentSlice";
import { useGetTime } from "../../hook/useGetTime";
import { MainButton } from "../mainButton";
import PasswordModal from "./PasswordModal";

const CommentCard = ({ comment }) => {
  const time = useGetTime();
  const [editFormHide, setEditFormHide] = useState(true);
  const [deleteModalHide, setDeleteModalHide] = useState(true);
  const [editModalHide, setEditModalHide] = useState(true);

  const [content, setContent] = useState(comment.comment);
  const { id, list } = useSelector((state) => state.comment);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getComment(id));
  // }, [dispatch, id]);

  const handleDeleteComment = async () => {
    const newList = list.filter((v) => v.id !== comment.id);
    await axios.put(`${process.env.REACT_APP_URL}/comments/${id}`, {
      list: newList,
    });
    dispatch(editComment({ list: newList }));
    setDeleteModalHide(false);
  };

  const handleEditModeToggle = () => {
    setEditFormHide(false);
    setEditModalHide(true);
  };

  const handleEditModeClear = () => {
    setEditFormHide(true);
  };

  const handleEditComment = async () => {
    const edit = {
      id: comment.id,
      ip: comment.ip,
      comment: content,
      nickname: comment.nickname,
      password: comment.password,
      date: time,
    };
    
    const newList = list.map((v) => (v.id === comment.id ? edit : v));
    console.log(newList);

    await axios
      .put(`${process.env.REACT_APP_URL}/comments/${id}`, {
        list: newList,
      })
      .then(() => {
        dispatch(editComment({ list: newList }));
        handleEditModeClear();
      });
  };

  return (
    <div>
      {editFormHide && (
        <DivComment>
          <DivContent>
            <p>
              {comment.nickname}({comment.ip})
            </p>
            <p>{comment.comment}</p>
            <p>{comment.date}</p>
          </DivContent>

          <DivButton>
            <DivRelative>
              <MainButton onClick={() => setEditModalHide(false)}>
                수정
              </MainButton>
              {!editModalHide && (
                <PasswordModal
                  onBlur={() => setEditModalHide(true)}
                  onHide={() => setEditModalHide(true)}
                  comment={comment}
                  onClick={() => handleEditModeToggle()}
                >
                  수정
                </PasswordModal>
              )}
            </DivRelative>
            <DivRelative>
              <MainButton onClick={() => setDeleteModalHide(false)}>
                삭제
              </MainButton>
              {!deleteModalHide && (
                <PasswordModal
                  onBlur={() => setDeleteModalHide(true)}
                  onHide={() => setDeleteModalHide(true)}
                  comment={comment}
                  onClick={() => handleDeleteComment(id)}
                  // onClick={() => {
                  //   dispatch(deleteComment(comment.id));
                  // }}
                >
                  삭제
                </PasswordModal>
              )}
            </DivRelative>
          </DivButton>
        </DivComment>
      )}
      {!editFormHide && (
        <DivComment>
          <DivInputForm>
            <p>
              {comment.nickname}({comment.ip})
            </p>
          </DivInputForm>

          <textarea
            type="password"
            value={content}
            placeholder="내용"
            onChange={(e) => setContent(e.target.value)}
          />

          <DivButton>
            <DivRelative>
              <MainButton
                onClick={() => handleEditComment()}
                // onClick={() => {
                //   dispatch(updateComment(comment));
                // }}
              >
                수정
              </MainButton>
            </DivRelative>
            <DivRelative>
              <MainButton onClick={() => handleEditModeClear()}>
                닫기
              </MainButton>
            </DivRelative>
          </DivButton>
        </DivComment>
      )}
    </div>
  );
};

const DivComment = styled.div`
  width: 100%;
  border: 1px solid black;
  height: 50px;
  display: flex;
  border: none;
  border-bottom: 1px solid grey;
  padding: 5px 0;
  justify-content: space-between;
  align-items: center;
`;

const DivContent = styled.div`
  display: flex;
  flex-direction: rows;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
`;

const DivRelative = styled.div`
  position: relative;
`;

const DivInputForm = styled.form``;

const DivButton = styled.div`
  height: 100%;
  display: flex;
  button {
    width: 40px;
    height: 20px;
    font-size: 12px;
  }
`;

export default CommentCard;
