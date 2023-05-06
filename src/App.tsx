import React from 'react';
import { BottomSheetProvider, useBottomSheet } from './lib';

interface MyModalProps {
  name: string;
  onClose: () => void;
}

const MyModal = ({ name, onClose }: MyModalProps) => {
  return (
    <div>
      <h1>My Modal</h1>
      <p>{name}</p>
      <button onClick={() => onClose()}>Close</button>
    </div>
  );
};

const MyComponent = () => {
  const { showBottomSheet, hideBottomSheet } = useBottomSheet();

  const openBottomSheet = () => {
    showBottomSheet({
      content: <MyModal name="John Doe" onClose={hideBottomSheet} />,
      overlay: true,
    });
  };

  return (
    <div>
      <h1>React Bottom Sheet Example</h1>
      <button onClick={() => openBottomSheet()}>aa</button>
    </div>
  );
};

const App = () => {
  return (
    <BottomSheetProvider>
      <MyComponent />
    </BottomSheetProvider>
  );
};

export default App;
