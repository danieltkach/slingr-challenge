import { create } from "zustand";
import { ListItem } from "../types";

const initialState: ListItem = {
  id: "",
  name: "",
  description: "",
  quantity: 1,
  active: true
};

interface ListItemState {
  listItem: ListItem;
  setListItem: (updates: Partial<ListItem>) => void;
  resetListItem: () => void;
}

export const useListItemStore = create<ListItemState>()((set) => ({
  listItem: initialState,
  setListItem: (updates) =>
    set((state) => ({
      listItem: { ...state.listItem, ...updates },
    })),
  resetListItem: () => set({ listItem: initialState }),
}));
