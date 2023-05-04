# React Bottom Sheet Booung

A simple, easy-to-use React library for creating modal-like bottom sheets.

### Installation

```bash
npm install react-bottom-sheet-booung
```

### Usage

First, wrap your app with the `BottomSheetProvider`:


```tsx
// App.tsx
import React from 'react';
import { BottomSheetProvider } from 'react-bottom-sheet-booung';

const App = () => {
  return (
    <BottomSheetProvider>
      {/* Your app content */}
    </BottomSheetProvider>
  );
};

export default App;
```

Create a custom bottom sheet component:


```tsx
// MyModal.tsx
import React from 'react';

interface MyModalProps {
    onClose: () => void;
}

const MyModal = ({ onClose }: MyModalProps) => {
    return (
        <div style={{ background: 'white', padding: 20 }}>
            <h1>My Modal</h1>
            <p>This is a sample modal content.</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default MyModal;
```

Use the `useBottomSheet` hook to show and hide your custom bottom sheet:

```tsx
// ShowModalButton.tsx
import React from 'react';
import { useBottomSheet } from 'react-bottom-sheet-booung';
import MyModal from './MyModal';

const ShowModalButton = () => {
const { showBottomSheet } = useBottomSheet();

const showModal = () => {
  // Show the modal with an optional overlay
  showBottomSheet(MyModal, true);
};

  return <button onClick={showModal}>Show Modal</button>;
};

export default ShowModalButton;
```

### API

### BottomSheetProvider

The `BottomSheetProvider` component should be used to wrap your app or the part of your app where you want to use bottom sheets. It provides the context for the bottom sheet management.

### useBottomSheet

The `useBottomSheet` hook provides two functions, `showBottomSheet` and `hideBottomSheet`, to control the display of bottom sheets.
showBottomSheet(component: BottomSheetType, overlay?: boolean)

- `component`: The bottom sheet component to display.
- `overlay` (optional): A boolean value that indicates whether an overlay should be displayed behind the bottom sheet. Default is false.

`hideBottomSheet()`

Hides the currently displayed bottom sheet.


### License

MIT
