import React, { ReactElement, ReactNode, useState } from 'react';
import * as Styled from './MyBottomSheet.styles';

interface MyBottomSheetProps {
  trigger: ReactElement;
  children: ReactNode;
}

const MyBottomSheet = ({ trigger, children }: MyBottomSheetProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {React.cloneElement(trigger, { onClick: handleOpenModal })}
      {isModalOpen && (
        <Styled.BottomSheetOverlay onClick={handleCloseModal}>
          <Styled.BottomSheetContent onClick={(e) => e.stopPropagation()}>
            {children}
          </Styled.BottomSheetContent>
        </Styled.BottomSheetOverlay>
      )}
    </>
  );
};

export default MyBottomSheet;
