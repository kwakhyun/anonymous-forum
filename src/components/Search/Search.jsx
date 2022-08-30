import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import MainButton from "../mainButton/MainButton";

const Search = ({ searchPost }) => {
  const [search, setSearch] = useState({ select: "", input: "" });
  const [infoText, setInfoText] = useState(false);

  const selectRef = useRef();
  const inputRef = useRef();

  const onChange = (event) => {
    event.preventDefault();
    setSearch({
      select: selectRef.current.value,
      input: inputRef.current.value.trim(),
    });
  };

  const info = () => {
    if (inputRef.current.value === "") {
      setInfoText(true);
      setTimeout(() => {
        setInfoText(false);
      }, 2000);
    } else {
      setInfoText(false);
    }
  };

  const onSearch = () => {
    // info();
    searchPost(search);
  };

  useEffect(() => {
    inputRef.current.addEventListener("keypress", logKey);
    function logKey(event) {
      if (event.code === "Enter") {
        info();
        searchPost(search);
      }
    }
  }, [search]);

  return (
    <SearchContainer>
      <Span text={infoText ? "block" : "none"}>검색어를 입력하세요</Span>
      <SearchSelect ref={selectRef} name="select" onChange={onChange}>
        <option value="title">제목</option>
        <option value="content">내용</option>
        <option value="nickname">작성자</option>
      </SearchSelect>
      <SearchInput
        type="text"
        name="input"
        ref={inputRef}
        onChange={onChange}
      />

      <MainButton onClick={onSearch} children="검색" />
    </SearchContainer>
  );
};

const Span = styled.div`
  /* width: 50%; */
  color: red;
  display: ${(props) => props.text};
  position: absolute;
  bottom: 3em;
`;

const SearchContainer = styled.div`
  display: flex;
  width: 50%;
  margin-top: 2em;
  margin-bottom: 0.5em;
  bottom: 0;
`;

const SearchSelect = styled.select`
  flex: 1 1 10%;
  margin-right: 1em;
`;

const SearchInput = styled.input`
  flex: 1 1 50%;
  margin-right: 1em;
`;

export default Search;
