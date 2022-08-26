import { useEffect, useState } from "react";
import { MainButton } from "../components";
import { Header } from "../components/Header";
import styled from "styled-components";
import { Posts } from "../components/Posts";
import { Search } from "../components/Search";
// import { useGetPost } from "../hook";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../redux/modules/postSlice";

const MainPage = () => {
  // const posts = useGetPost("");
  const postList = useSelector((store) => store.post.posts);
  const dispatch = useDispatch();

  const [list, setList] = useState();
  const [searched, setSearched] = useState();
  const [posts, setPosts] = useState({
    api: {
      posts: [
        {
          post_id: 1,
          nickname: "moon",
          password: "1234",
          date: Date.now(),
          //TODO: 타이틀 길어지면 ... 처리
          title: "감감감감감감감감감감감감감감감감감감감감감감감감감감감감감감",
          content: "무소식",
          comments: [
            {
              comment_id: 111,
              comment: "댓글1",
              nickname: "닉네임1",
              password: "패스워드1",
              date: "작성일1",
            },
          ],
        },
        {
          post_id: 2,
          nickname: "jin",
          password: "1111",
          date: Date.now(),
          title: "희희",
          content: "호호내용",
          comments: [
            {
              comment_id: 2222,
              comment: "댓글2",
              nickname: "닉네임2",
              password: "패스워드2",
              date: "작성일2",
            },
          ],
        },
        {
          post_id: 3,
          nickname: "jin",
          password: "1111",
          date: Date.now(),
          title: "희희",
          content: "호호내용",
          comments: [
            {
              comment_id: 2222,
              comment: "댓글2",
              nickname: "닉네임2",
              password: "패스워드2",
              date: "작성일2",
            },
          ],
        },
        {
          post_id: 4,
          nickname: "jin",
          password: "1111",
          date: Date.now(),
          title: "희희",
          content: "호호내용",
          comments: [
            {
              comment_id: 2222,
              comment: "댓글2",
              nickname: "닉네임2",
              password: "패스워드2",
              date: "작성일2",
            },
          ],
        },
      ],
    },
  });

  // const postList = posts.api.posts;
  //let searched = {};

  //TODO: case 문 짧게 / 검색 결과 없을때 알림, 전체 보기
  const getSearched = (select, input) => {
    switch (select) {
      case "title":
        setSearched(postList.filter((post) => post.title.includes(input)));
        break;
      case "content":
        setSearched(postList.filter((post) => post.content.includes(input)));
        break;
      case "nickname":
        setSearched(postList.filter((post) => post.nickname.includes(input)));
        break;
      default:
        return console.error;
    }
    // setList(searched);
  };

  useEffect(() => {
    setList(searched);
    console.log("searched > ", searched);
  }, [searched]);

  useEffect(() => {
    console.log("list > ", list);
  }, [list]);

  useEffect(() => {
    dispatch(getPost());
  }, []);

  const searchPost = (search) => {
    const { select, input } = search;
    if (input === "") {
      alert("검색어를 입력하세요");
      return;
    }
    getSearched(select, input);
    // Object.keys(list).map((key) => console.log("하하핳>", list[key]));
  };

  return (
    <>
      <Header />
      <MainPageContainer>
        <PostsContainer>
          {/* TODO: 필터 레이아웃 수정 */}
          <p>최신 순 | 오래된 순</p>
          <PostList>
            {postList.map((post) => {
              return <Posts post={post} key={post.id} />;
            })}
          </PostList>
        </PostsContainer>
        <Search searchPost={searchPost} />
      </MainPageContainer>
    </>
  );
};

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

const PostsContainer = styled.div`
  align-items: center;
  height: 80vh; // TODO: 전체 높이 수정 조정
  width: 70%;
  padding: 1em 2em 1em 2em;
  /* background-color: gray; */
  box-sizing: border-box;
`;

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default MainPage;
