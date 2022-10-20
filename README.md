## 모두의 게시판
<img src="https://user-images.githubusercontent.com/73919235/193266863-8074b38a-13fc-40da-96ab-91c182051e6d.png" width="300px" />

### 주요 기능
- 게시글 CRUD
- 댓글 CRUD
- 게시글 검색, 정렬
- 동일 닉네임 구분

### 프로젝트 소개
3인 프로젝트로 Versel을 이용해 정적 웹 사이트를 호스팅하고 Heroku를 이용해 API 서버를 배포했습니다. 누구나 이용할 수 있는 익명 게시판으로 게시글 작성 시 입력한 닉네임과 IP 주소 앞자리로 작성자를 구분합니다.

- [프로젝트 배포 URL](https://notice-board-tan.vercel.app)

- [프로젝트 API 정보](https://www.notion.so/9a1bb90e71f94dc0a1dea2314464bd45?v=27f82362ff3f45598c49e26e5d73a3cf)

- [API 서버로 사용한 클라우드 서비스 (PaaS)](https://www.heroku.com)
<br>

### 메인 페이지

![화면 캡처 2022-09-02 055607](https://user-images.githubusercontent.com/73919235/188019203-c8a8de16-4245-424a-b62f-2a1381fad97e.png)

### 상세 페이지

![화면 캡처 2022-09-02 055811](https://user-images.githubusercontent.com/73919235/188019212-655c65a8-2157-44c4-9d1e-e28a0c7fdac1.png)

```json
  "dependencies": {
    "@reduxjs/toolkit": "^1.8.5",
    "axios": "^0.27.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.0.2",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "redux-devtools-extension": "^2.13.9",
    "styled-components": "^5.3.5"
  },
```
