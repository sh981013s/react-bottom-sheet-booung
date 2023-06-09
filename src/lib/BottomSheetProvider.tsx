import React, { useState, useCallback, ReactNode, ReactElement } from 'react';
import {
  BottomSheetContext,
  BottomSheetContextType,
} from './BottomSheetContext';
import { Content, Overlay } from './MyBottomSheet.styles';

interface BottomSheetData {
  component: ReactElement;
  overlay: boolean;
}

interface BottomSheetProviderProps {
  children: ReactNode;
}

export const BottomSheetProvider = ({ children }: BottomSheetProviderProps) => {
  const [activeBottomSheet, setActiveBottomSheet] =
    useState<BottomSheetData | null>(null);

  const showBottomSheet = useCallback<
    BottomSheetContextType['showBottomSheet']
  >(({ content, overlay = false }) => {
    setActiveBottomSheet({ component: content, overlay });
  }, []);

  const hideBottomSheet = useCallback(() => {
    setActiveBottomSheet(null);
  }, []);

  const value = {
    showBottomSheet,
    hideBottomSheet,
  };

  return (
    <BottomSheetContext.Provider value={value}>
      {children}
      {activeBottomSheet && (
        <>
          {activeBottomSheet.overlay && <Overlay onClick={hideBottomSheet} />}
          <Content isOpened={!!activeBottomSheet}>
            {React.cloneElement(activeBottomSheet.component)}
          </Content>
        </>
      )}
    </BottomSheetContext.Provider>
  );
};
