import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface WarnignInterface {
  open: boolean;
  message: string;
  onOK?: () => void;
}
interface ModalsInterface {
  sidebar: boolean;
  warning: WarnignInterface;
}

const initialState: ModalsInterface = {
  sidebar: false,
  warning: { open: false, message: "", onOK() {} },
};

const modals = createSlice({
  initialState,
  name: "modals",
  reducers: {
    toggleSiderBar: (store) => {
      return { ...store, sidebar: !store.sidebar };
    },
    toggleWarningModal: (
      store,
      { payload }: PayloadAction<WarnignInterface>
    ) => {
      return { ...store, warning: { ...store.warning, ...payload } };
    },
  },
});

export default modals;
export const { toggleSiderBar, toggleWarningModal } = modals.actions;
