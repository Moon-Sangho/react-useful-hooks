# React 유용한 Custom Hook 모음

노마드 코더의 실전형 리액트 Hooks 강의를 참고하여 만든 레포지토리입니다.

<br>

## Usage

```
yarn install
yarn start

or

npm install
npm start
```

- hooks 폴더에 custom hook 위치 <br>
- containers 폴더에 각각의 custom hook이 적용된 예시 컴포넌트들 위치

<br>

---

<br>

## 1. useState를 이용한 Custom Hooks

<br>

### 1.1. useInput

input 태그에 사용할 수 있으며, validator 함수를 만들어 useInput Hook에 인자로 넣어줌으로써 원하는 validation을 적용 가능

### 1.2. useTabs

서버로부터 받아온 데이터 중에서 사용자의 인터랙션에 따라 다른 내용을 출력할 수 있도록 하는데 사용 가능

### 1.3. useTitle

웹 페이지의 타이틀을 유동적으로 변경할 수 있도록 하는 Hook으로, 타이틀 뿐만이 아니라 목적에 따라 특정 Element의 내용이 유동적으로 바뀌게끔 커스터마이징 가능
