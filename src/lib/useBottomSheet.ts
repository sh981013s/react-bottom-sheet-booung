import { useContext } from 'react';
import { BottomSheetContext, BottomSheetType } from './BottomSheetContext';

export const useBottomSheet = () => {
  const context = useContext(BottomSheetContext);

  const showBottomSheet = (options: {
    content: BottomSheetType;
    overlay?: boolean;
  }) => {
    context.showBottomSheet(options);
  };

  const hideBottomSheet = () => {
    context.hideBottomSheet();
  };

  return {
    showBottomSheet,
    hideBottomSheet,
  };
};
