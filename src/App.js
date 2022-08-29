import { Routes, Route } from "react-router-dom";
import { MainPage, PostPage, DetailPage, CommentPage } from "./pages";
import UpdatePage from "./pages/UpdatePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/post/" element={<PostPage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/update/:id" element={<UpdatePage />} />
      <Route path="/comments/:id" element={<CommentPage />} />
    </Routes>
  );
}

export default App;
