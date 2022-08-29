import { Button } from "@mui/material";

/**
 * chldren : <Button>내용</Button>
 * onClick : 이런 내용 <br/>
 */
const MainButton = ({ children, onClick, color }) => {
  return (
    <Button variant="contained" color={color} onClick={onClick}>
      {children}
    </Button>
  );
};

export default MainButton;
