"use client"

import { ReactNode, useEffect } from "react";
import styles from "./index.module.css";

export type ModalProps = {
  children: ReactNode;
  showCloseButton?: boolean;
  closeOnOutsideClick?: boolean;
  backgroundBlur?: 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
  onClose?: () => void;
}

export function Modal({
  children,
  showCloseButton = true,
  closeOnOutsideClick = true,
  backgroundBlur = 0.8,
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
        style={{ opacity: backgroundBlur, }}
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
