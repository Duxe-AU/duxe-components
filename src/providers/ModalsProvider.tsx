"use client"

import { ReactNode, createContext, useCallback, useEffect, useRef, useState } from "react";
import { Modal, ModalProps } from "../components/Modal";

type ModalProviderProps = {
  children: ReactNode;
}

export type ModalHookConfig = Omit<ModalProps, "children">;

export type ModalContextProps = {
  showModal: (children: JSX.Element, config?: ModalHookConfig) => void;
  hideModal: () => void;
}

export const ModalContext = createContext<ModalContextProps>({
  showModal: () => null,
  hideModal: () => null,
});

export function ModalProvider({ children }: ModalProviderProps) {
  const [visible, setVisible] = useState(false);
  const [modalProps, setModalProps] = useState<ModalHookConfig>({});
  const content = useRef<JSX.Element>();

  const showModal: ModalContextProps["showModal"] = useCallback((children, config = {}) => {
    content.current = children;
    setModalProps(config);
    setVisible(true);
  }, []);

  const hideModal = useCallback(() => setVisible(false), []);

  const { onClose, ...props } = modalProps as ModalProps;

  useEffect(() => {
    if (!visible) {
      document.body.style.position = "relative";
      setModalProps({});
    } else {
      document.body.style.position = "unset";
    }
  }, [visible])

  useEffect(() => {
    return () => {
      setModalProps({});
    }
  }, [])

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {/* Modal */}
      {visible && <Modal
        onClose={() => {
          onClose?.();
          hideModal();
        }}
        {...props}
      >
        {content.current}
      </Modal>}
    </ModalContext.Provider>
  )
}