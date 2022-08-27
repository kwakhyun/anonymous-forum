import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Posts } from "../components/Posts";
import { Search } from "../components/Search";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../redux/modules/postSlice";
// import { useGetData } from "../hook";
import styled from "styled-components";

const MainPage = () => {
  const postList = useSelector((store) => store.post.posts);
  const [searched, setSearched] = useState();
  const dispatch = useDispatch();
  // let refresh = 0;

  useEffect(() => {
    dispatch(getPost());
  }, []);

  useEffect(() => {
    setSearched(postList);
    // refresh = 0;
  }, [postList]);

  const searchPost = (search) => {
    const { select, input } = search;
    if (input === "") {
      setSearched(postList);
      return;
    }
    getSearched(select, input);
  };

  const getSearched = (select, input) => {
    setSearched(
      postList.filter((post) => {
        switch (select) {
          case "title":
            return post.title.toUpperCase().includes(input.toUpperCase());
          case "content":
            return post.content.toUpperCase().includes(input.toUpperCase());
          case "nickname":
            return post.nickname.toUpperCase().includes(input.toUpperCase());
          default:
            return post;
        }
      })
    );
  };

  return (
    <MainPageLayout>
      <MainPageContainer>
        <Header />
        <Sort>최신 순 | 오래된 순</Sort>
        <PostsContainer>
          {/* TODO: 필터 레이아웃 수정 */}
          <PostList>
            {searched &&
              searched.map((post, idx) => {
                return <Posts post={post} key={post.id} postNum={idx + 1} />;
              })}
          </PostList>
        </PostsContainer>
        <SearchBox>
          <Search searchPost={searchPost} />
        </SearchBox>
      </MainPageContainer>
    </MainPageLayout>
  );
};

const MainPageLayout = styled.div`
  height: 100vh;
`;

const MainPageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Sort = styled.div`
  width: 70%;
  text-align: right;
  padding: 1em 0 1em 0;
`;

const PostsContainer = styled.div`
  align-items: center;
  width: 70%;
  height: 100%;
  padding: 1em 2em 1em 2em;
  /* background-color: gray; */
  box-sizing: border-box;
  overflow: auto;
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default MainPage;
