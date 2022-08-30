import styled from "styled-components";

/**
 * chldren : <Button>내용</Button>
 * onClick : 이런 내용 <br/>
 */
const MainButton = ({ children, onClick, ...rest }) => {
  return (
    <Button onClick={onClick} {...rest}>
      {children}
    </Button>
  );
};

const Button = styled.button`
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "50px"};
  margin-left: 10px;
  background-color: ${(props) => props.backgroundColor || "#fff"};
  border: 1px solid #000;
  border-radius: 4px;
  font-size: ${(props) => props.fontSize || "20px"};
  font-weight: bold;
  color: ${(props) => props.color || "black"};
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export default MainButton;
