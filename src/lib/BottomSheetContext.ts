import { createContext, FunctionComponent } from 'react';

/**
 * BottomSheetType is the type of the component that will be rendered in the modal
 */
export type BottomSheetType = FunctionComponent<any>;

/**
 * BottomSheetContextType is the type of the BottomSheetContext
 */
export interface BottomSheetContextType {
  showBottomSheet(key: string, component: BottomSheetType): void;
  hideBottomSheet(key: string): void;
}

/**
 * ensureBottomSheetContext is a helper function that throws an error when called.
 */
const ensureBottomSheetContext = () => {
  throw new Error(
    'Attempted to call useBottomSheet outside of modal context. Make sure your app is rendered inside BottomSheetProvider.',
  );
};

/**
 * BottomSheetContext is a React Context that provides a way to show and hide modals
 */
export const BottomSheetContext = createContext<BottomSheetContextType>({
  showBottomSheet: ensureBottomSheetContext,
  hideBottomSheet: ensureBottomSheetContext,
});
