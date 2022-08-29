import { Routes, Route } from "react-router-dom";
import { MainPage, PostPage, DetailPage, CommentPage } from "./pages";
import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="post/" element={<PostPage />} />
        <Route path="detail/:id" element={<DetailPage />} />
        <Route path="/comments/:id" element={<CommentPage />} />
      </Routes>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  height: 100vh;
`;

export default App;
