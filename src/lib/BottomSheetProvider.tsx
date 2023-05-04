import React, { useState, useCallback, ReactNode } from 'react';
import {
  BottomSheetContext,
  BottomSheetType,
  BottomSheetContextType,
} from './BottomSheetContext';

import { Content, Overlay } from './MyBottomSheet.styles';

interface BottomSheetData {
  component: BottomSheetType;
  overlay: boolean;
}

interface BottomSheetProviderProps {
  children: ReactNode;
}

export const BottomSheetProvider: React.FC<BottomSheetProviderProps> = ({
  children,
}) => {
  const [activeBottomSheet, setActiveBottomSheet] =
    useState<BottomSheetData | null>(null);

  const showBottomSheet = useCallback<
    BottomSheetContextType['showBottomSheet']
  >((component, overlay = false) => {
    setActiveBottomSheet({ component, overlay });
  }, []);

  const hideBottomSheet = useCallback<
    BottomSheetContextType['hideBottomSheet']
  >(() => {
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
            <activeBottomSheet.component onClose={hideBottomSheet} />
          </Content>
        </>
      )}
    </BottomSheetContext.Provider>
  );
};
