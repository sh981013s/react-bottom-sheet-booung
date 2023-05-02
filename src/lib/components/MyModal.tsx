import React, { ReactElement, ReactNode, useState } from "react";
import * as Styled from './MyModal.styles'

interface MyModalProps {
    trigger: ReactElement;
    children: ReactNode;
}

const MyModal = ({ trigger, children }: MyModalProps) => {
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
                <Styled.ModalOverlay onClick={handleCloseModal}>
                    <Styled.ModalContent onClick={(e) => e.stopPropagation()}>
                        {children}
                    </Styled.ModalContent>
                </Styled.ModalOverlay>
            )}
        </>
    );
};

export default MyModal;
