import React from 'react';
import { BottomSheetProvider, useBottomSheet } from './lib';

interface MyModalProps {
  name: string;
}

const MyModal = ({ name }: MyModalProps) => {
  return (
    <div>
      <h1>My Modal</h1>
      <p>{name}</p>
      <button>Close</button>
    </div>
  );
};

const ModalButton = () => {
  const { showBottomSheet } = useBottomSheet();

  const showModal = () => {
    showBottomSheet({ content: <MyModal name="John Doe" />, overlay: true });
  };

  return <button onClick={showModal}>Show Modal</button>;
};

const App = () => {
  return (
    <BottomSheetProvider>
      <div>
        <h1>React Bottom Sheet Example</h1>
        <ModalButton />
      </div>
    </BottomSheetProvider>
  );
};

export default App;
