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

  const handleHideModal = () => {
    onHide();
  };

  return (
    <Form>
      <input type="password" placeholder="비밀번호" ref={inputRef} />
      <DivButton>
        <MainButton
          type="button"
          width="50px"
          height="20px"
          fontSize="1em"
          onClick={handlerCheckPassword}
        >
          {children}
        </MainButton>
        <MainButton
          type="button"
          width="50px"
          height="20px"
          fontSize="1em"
          onClick={() => handleHideModal()}
        >
          닫기
        </MainButton>
      </DivButton>
    </Form>
  );
};

const Form = styled.form`
  width: 200px;
  height: 50px;
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
`;

const DivButton = styled.div`
  width: 80%;
  height: 50px;
  margin: 5px -5px 0px 0px;
  text-align: right;
  button {
    margin-left: 5px;
  }
`;
export default PasswordModal;
