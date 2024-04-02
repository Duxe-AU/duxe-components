"use client"

import { ReactNode, createContext, useCallback, useRef, useState } from "react";
import { Modal } from "../components/Modal";

type ModalProviderProps = {
  children: ReactNode;
}

export type ModalContextProps = {
  showModal: (children: JSX.Element) => void;
  hideModal: () => void;
}

export const ModalContext = createContext<ModalContextProps>({
  showModal: () => null,
  hideModal: () => null,
});

export function ModalProvider({ children }: ModalProviderProps) {
  const [visible, setVisible] = useState(false);
  const content = useRef<JSX.Element>();

  const showModal = useCallback((children: JSX.Element) => {
    content.current = children;
    setVisible(true);
  }, []);

  const hideModal = useCallback(() => setVisible(false), []);

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {/* Modal */}
      {visible && <Modal onClose={hideModal}>{content.current}</Modal>}
    </ModalContext.Provider>
  )
}