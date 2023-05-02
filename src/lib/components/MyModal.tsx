import React, {ReactElement, ReactNode, useState} from "react";
import 'react-bottom-sheet-booungi/dist/components/styles.css';

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
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default MyModal;
