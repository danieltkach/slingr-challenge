import { create } from "zustand";

export type ModalResult = "cancel" | "confirm";

export type ModalState = {
  isOpen: boolean,
  result?: ModalResult;
  itemId?: string;
  title: string;
  message: string;
};

interface ModalStore {
  state: ModalState;
  setState: (state: ModalState) => void;
}

const initialState: ModalState = { isOpen: false, result: "cancel" as ModalResult, itemId: undefined, title: "", message: "" };

export const useModalStore = create<ModalStore>((set) => ({
  state: initialState,
  setState: (newState: Partial<ModalState>) => set(previous => ({
     state: {...previous.state, ...newState} 
    }))
}));
