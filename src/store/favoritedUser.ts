import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import UserModel from "models/User.model";

interface FavoritedUser {
  user?: UserModel;
}

const initialState: FavoritedUser = {};

const favoritedUser = createSlice({
  initialState,
  name: "favoritedUser",
  reducers: {
    toggleFavoritedUser: (store, action: PayloadAction<UserModel>) => {
      if (store.user?.id === action.payload.id) return {};
      return { user: action.payload };
    },
  },
});

export default favoritedUser;

export const { toggleFavoritedUser } = favoritedUser.actions;
