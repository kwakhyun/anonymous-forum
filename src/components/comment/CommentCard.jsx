import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import styled from "styled-components";
import { deleteComment } from "../../redux/modules/commentSlice";
import { MainButton } from "../mainButton";
import PasswordModal from "./PasswordModal";
import CommentForm from "./CommentForm";

const CommentCard = ({ comment }) => {
  const dispatch = useDispatch();
  const { id, list } = useSelector((state) => state.comment);
  const handleDeleteComment = async () => {
    const newList = list.filter((v) => v.id !== comment.id);
    await axios.put(`http://localhost:3001/comments/${id}`, {
      list: newList,
    });
    dispatch(deleteComment({ list: newList }));
  };

  const [editFormHide, setEditFormHide] = useState(true);
  const [deleteModalHide, setDeleteModalHide] = useState(true);
  const [editModalHide, setEditModalHide] = useState(true);
  return (
    <div>
      {editFormHide && (
        <DivComment>
          <p>
            {comment.nickname}({comment.ip})
          </p>
          <p>{comment.comment}</p>
          <p>{comment.date}</p>
          <DivButton>
            <DivRelative>
              <MainButton
                height="100px"
                onClick={() => setEditModalHide(false)}
              >
                수정
              </MainButton>
              {!editModalHide && (
                <PasswordModal
                  onBlur={() => setEditModalHide(true)}
                  comment={comment}
                  onClick={() => setEditFormHide(true)}
                >
                  수정
                </PasswordModal>
              )}
            </DivRelative>
            <DivRelative>
              <MainButton
                height="100px"
                color="error"
                onClick={() => setDeleteModalHide(false)}
              >
                삭제
              </MainButton>
              {!deleteModalHide && (
                <PasswordModal
                  onBlur={() => setDeleteModalHide(true)}
                  comment={comment}
                  onClick={() => handleDeleteComment(id)}
                >
                  삭제
                </PasswordModal>
              )}
            </DivRelative>
          </DivButton>
        </DivComment>
      )}
      {!editFormHide && <CommentForm />}
    </div>
  );
};

const DivComment = styled.div`
  width: 100%;
  border: 1px solid black;
  height: 100px;
  display: flex;
  border: none;
  border-bottom: 1px solid grey;
  padding: 5px 0;
  justify-content: space-between;
  align-items: center;
`;

const DivRelative = styled.div`
  position: relative;
`;

const DivButton = styled.div`
  height: 100%;
  display: flex;
  button {
    height: 100%;
  }
`;

export default CommentCard;
