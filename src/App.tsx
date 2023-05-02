import React from 'react';
import MyBottomSheet from "./lib/components/MyBottomSheet";

const App = () => {
  return (
      <MyBottomSheet trigger={<button>open BottomSheet</button>}>
        <h2>제목</h2>
        <p>내용</p>
      </MyBottomSheet>
  );
}

export default App;
