import React from 'react';
import { BottomSheetProvider, useBottomSheet } from './lib';

interface MyModalProps {
  onClose: () => void;
}

const MyModal = ({ onClose }: MyModalProps) => {
  return (
    <div>
      <h1>My Modal</h1>
      <p>This is a sample modal content.</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const ModalButton = () => {
  const { showBottomSheet } = useBottomSheet();

  const showModal = () => {
    showBottomSheet(MyModal, true);
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
