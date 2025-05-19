import { createSlice } from "@reduxjs/toolkit";
const videoSlice = createSlice({
  name: "videoData",
  initialState: [],
  reducers: {
    addVideos: (state,action) => {
     return [...action.payload];
    },
  },
});

export const { addVideos } = videoSlice.actions;
export default videoSlice.reducer;
