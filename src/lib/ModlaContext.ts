import { createContext, FunctionComponent } from 'react';

/**
 * ModalType is the type of the component that will be rendered in the modal
 */
export type ModalType = FunctionComponent<any>;

/**
 * ModalContextType is the type of the ModalContext
 */
export interface ModalContextType {
  showModal(key: string, component: ModalType): void;
  hideModal(key: string): void;
}

/**
 * ensureModalContext is a helper function that throws an error when called.
 */
const ensureModalContext = () => {
  throw new Error(
    'Attempted to call useModal outside of modal context. Make sure your app is rendered inside ModalProvider.',
  );
};

/**
 * ModalContext is a React Context that provides a way to show and hide modals
 */
export const ModalContext = createContext<ModalContextType>({
  showModal: ensureModalContext,
  hideModal: ensureModalContext,
});
