import { useRef } from "react";
import styled from "styled-components";
import { MainButton } from "../mainButton";

const PasswordModal = ({ comment, children, onClick, onHide }) => {
  const inputRef = useRef();

  const handlerCheckPassword = () => {
    if (comment.password === inputRef.current.value) {
      onClick();
    } else {
      alert("비밀번호가 다릅니다.");
    }
  };

  return (
    <Form>
      <MainButton
        type="button"
        width="50px"
        height="50px"
        onClick={() => onHide()}
      >
        X
      </MainButton>
      <input type="password" placeholder="비밀번호" ref={inputRef} />
      <MainButton type="button" width="100px" onClick={handlerCheckPassword}>
        {children}
      </MainButton>
    </Form>
  );
};

const Form = styled.div`
  width: 200px;
  height: 100px;
  position: absolute;
  border-radius: 4px;
  border: 1px solid black;
  top: 30%;
  background-color: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  input {
    width: 80%;
  }

  button {
    width: 20px;
    height: 20px;
  }
`;

export default PasswordModal;
