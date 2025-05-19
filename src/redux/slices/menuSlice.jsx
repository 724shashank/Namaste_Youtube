import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menuStatus",
  initialState: {
    status: true,
  },
  reducers: {
    checkStatus: (state) => {
      state.status = !state.status ;
    },
    closeMenu: (state) => {
      state.status = false ;
    },
  },
});

export const { checkStatus,closeMenu } = menuSlice.actions;
export default menuSlice.reducer;
