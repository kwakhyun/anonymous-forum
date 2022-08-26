import { MainButton } from "../components";

const MainPage = () => {
  return (
    <div className="App">
      <MainButton onClick={() => alert("메인기능 발생")}>메인화면</MainButton>
      <MainButton>메인페이지 Test</MainButton>
    </div>
  );
};

export default MainPage;
