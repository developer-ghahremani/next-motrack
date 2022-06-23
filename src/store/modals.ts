import { createSlice } from "@reduxjs/toolkit";

interface ModalsInterface {
  sidebar: boolean;
}

const initialState: ModalsInterface = { sidebar: true };

const modals = createSlice({
  initialState,
  name: "modals",
  reducers: {
    toggleSiderBar: (store) => {
      return { ...store, sidebar: !store.sidebar };
    },
  },
});

export default modals;
export const { toggleSiderBar } = modals.actions;
