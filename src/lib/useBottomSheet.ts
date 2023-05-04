import { useContext } from 'react';
import { BottomSheetContext, BottomSheetType } from './BottomSheetContext';

export const useBottomSheet = () => {
  const context = useContext(BottomSheetContext);

  const showBottomSheet = (component: BottomSheetType, overlay: boolean) => {
    context.showBottomSheet(component, overlay);
  };

  const hideBottomSheet = () => {
    context.hideBottomSheet();
  };

  return {
    showBottomSheet,
    hideBottomSheet,
  };
};
