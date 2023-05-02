import { ReactElement, ReactNode } from "react";
import 'react-bottom-sheet-booungi/dist/components/styles.css';
interface MyModalProps {
    trigger: ReactElement;
    children: ReactNode;
}
declare const MyModal: ({ trigger, children }: MyModalProps) => JSX.Element;
export default MyModal;
