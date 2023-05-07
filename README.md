# React Bottom Sheet BooungI

![preview-gif](https://media.giphy.com/media/x6lanTpICPrv0RFME5/giphy.gif)


A simple, easy-to-use React library for creating modal-like bottom sheets. (react 18 supported)

### Installation

```bash
npm install react-bottom-sheet-booungi
```

### Usage

First, wrap your app with the `BottomSheetProvider`:


```tsx
// App.tsx
import React from 'react';
import { BottomSheetProvider } from 'react-bottom-sheet-booungi';

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
// MyBottomSheet.tsx
import React from 'react';

interface MyBottomSheetProps {
  onClose: () => void;
}

const MyBottomSheet = ({ onClose }: MyBottomSheetProps) => {
  return (
    <div style={{ background: 'white', padding: 20 }}>
      <h1>My BottomSheet</h1>
      <p>This is a sample bottom sheet content.</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default MyBottomSheet;
```

Use the `useBottomSheet` hook to show and hide your custom bottom sheet:

```tsx
// BottomSheetButton.tsx
import React from 'react';
import { useBottomSheet } from 'react-bottom-sheet-booungi';
import MyBottomSheet from './MyBottomSheet';

const BottomSheetButton = () => {
  const { showBottomSheet, hideBottomSheet } = useBottomSheet();

  const handleClick = () => {
    // Show the bottom sheet with an optional overlay
    showBottomSheet({ content: <MyBottomSheet onClose={hideBottomSheet} />, overlay: true });  
  };

  return <button onClick={handleClick}>Show Bottom Sheet</button>;
};

export default BottomSheetButton;
```

### API

### BottomSheetProvider

The `BottomSheetProvider` component should be used to wrap your app or the part of your app where you want to use bottom sheets. It provides the context for the bottom sheet management.

### useBottomSheet

The `useBottomSheet` hook provides two functions, `showBottomSheet` and `hideBottomSheet`, to control the display of bottom sheets.
showBottomSheet(component: BottomSheetType, overlay?: boolean)

### `showBottomSheet(options: { content: BottomSheetType; overlay?: boolean })`

- `options.component`: (required) The bottom sheet component to display.
- `options.overlay` (optional): A boolean value that indicates whether an overlay should be displayed behind the bottom sheet. Default is false.

### `hideBottomSheet()`

Hides the currently displayed bottom sheet.


### License

MIT
