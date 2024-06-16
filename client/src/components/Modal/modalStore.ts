import { create } from "zustand";

export type ModalResult = "cancel" | "confirm";
export type ModalState = {
  isOpen: boolean,
  result?: ModalResult;
  itemId?: string;
};

interface ModalStore {
  state: ModalState;
  setState: (state: ModalState) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  state: { isOpen: false, result: "cancel" as ModalResult },
  setState: (newState: Partial<ModalState>) => set(previous => ({
     state: {...previous.state, ...newState} 
    }))
}));
