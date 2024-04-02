"use client"

import { ReactNode } from "react";
import { ModalProvider } from "./ModalsProvider";

type DuxeComponentsProviderProps = {
  children: ReactNode;
}

export function DuxeComponentsProvider({
  children
}: DuxeComponentsProviderProps) {
  return (
    <ModalProvider>
      {children}
    </ModalProvider>
  )
}
