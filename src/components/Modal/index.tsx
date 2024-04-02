"use client"

import { ReactNode, useEffect } from "react";
import styles from "./index.module.css";

interface ModalProps {
  children: ReactNode;
  showCloseButton?: boolean;
  closeOnOutsideClick?: boolean;
  onClose?: () => void;
}

export function Modal({
  children,
  showCloseButton = true,
  closeOnOutsideClick = true,
  onClose,
}: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose?.();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    }
  }, [onClose]);

  return (
    <div className={styles.root}>
      <div
        className={styles.backgroundOverlay}
        onClick={() => {
          if (closeOnOutsideClick) onClose?.()
        }}
      ></div>
      <div className={styles.modal}>
        {/* Close Button */}
        {showCloseButton && <button onClick={() => onClose?.()} className={styles.closeButton}>X</button>}
        {children}
      </div>
    </div>
  );
}
