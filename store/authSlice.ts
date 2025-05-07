// src/store/features/counterSlice.ts
import { VLiteUser, VLiteUserState } from "@/types";
import { makeid } from "@/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: VLiteUserState = {
  id: makeid(),
  timestamp: Date.now(),
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<VLiteUser>) => {
      state.userData = action.payload;
    },
    logoutUser: (state) => {
      state.id = initialState.id;
      state.timestamp = initialState.timestamp;
      state.userData = initialState.userData;
    },
  },
});

export const { setUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
