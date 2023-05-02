import React from 'react';
import MyModal from "./lib/components/MyModal";

const App = () => {
  return (
      <MyModal trigger={<button>모달 열기</button>}>
        <h2>제목</h2>
        <p>내용</p>
      </MyModal>
  );
}

export default App;
