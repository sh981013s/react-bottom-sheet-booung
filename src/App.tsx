import React from 'react';
import { BottomSheetProvider, useBottomSheet } from './lib';

interface MyModalProps {
  onClose: () => void;
  name: string;
}

const MyModal = ({ onClose, name }: MyModalProps) => {
  return (
    <div>
      <h1>My Modal</h1>
      <p>{name}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const ModalButton = () => {
  const { showBottomSheet, hideBottomSheet } = useBottomSheet();

  const showModal = () => {
    showBottomSheet(<MyModal name="asd" onClose={hideBottomSheet} />, true);
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
