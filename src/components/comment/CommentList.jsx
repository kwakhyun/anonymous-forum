import CommentCard from "./CommentCard";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Pagination } from "@mui/material";
import { useState } from "react";
import Stack from "@mui/material/Stack";
const CommentList = () => {
  const { list } = useSelector((state) => state.comment);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const startItemIndex = (currentPage - 1) * postsPerPage;
  const endItemIndex = startItemIndex + postsPerPage;

  const handleChange = (e) => {
    const selectedPage = parseInt(e.target.innerText);
    if (isNaN(selectedPage)) {
      if (e.target.getAttribute("data-testid") === "NavigateNextIcon") {
        setCurrentPage(currentPage + 1);
      } else {
        setCurrentPage(currentPage - 1);
      }
    } else {
      setCurrentPage(selectedPage);
    }
  };
  return (
    <Div>
      {list &&
        list.slice(startItemIndex, endItemIndex).map((comment) => {
          return <CommentCard key={comment.id} comment={comment} />;
        })}
      {list && (
        <Stack alignItems="center">
          <Pagination
            count={Math.ceil(list.length / postsPerPage)}
            page={currentPage}
            onChange={handleChange}
          />
        </Stack>
      )}
      {list && list.length < 1 && <h2>댓글이 없습니다. 댓글을 달아주세요.</h2>}
    </Div>
  );
};

const Div = styled.div`
  width: 80%;
  margin-top: 10px;
  min-width: 800px;
  max-width: 1200px;

  border-top: 2px solid black;
  border-bottom: 2px solid black;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  root {
    margin: auto;
  }
`;

export default CommentList;
