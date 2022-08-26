import { Routes, Route } from "react-router-dom";
import { DetailPage, MainPage, CommentPage } from "./pages";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/posts/:id" element={<DetailPage />} />
      <Route path="/comments/:id" element={<CommentPage />} />
    </Routes>
  );
}

export default App;
