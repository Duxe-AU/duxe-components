"use client"

import { useContext } from "react";
import { ModalContext } from "../../providers/ModalsProvider";

export const useModal = () => useContext(ModalContext);