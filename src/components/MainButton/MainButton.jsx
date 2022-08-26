import { Button } from "@mui/material";

/**
 * chldren : <Button>내용</Button>
 * onClick : 이런 내용 <br/>
 */
const MainButton = ({ children, onClick }) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {children}
    </Button>
  );
};

export default MainButton;
