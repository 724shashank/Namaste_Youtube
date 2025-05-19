import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheData: (state, action) => {
      return { ...action.payload, ...state };
    },
    removeOldCache: (state,action)=>{
      const keys = Object.keys(state);
      keys.reverse();//reverse the orignal array
      const n = action.payload;
      for(let i=0;i<n;i++)
        delete state[keys[i]];
    }
   
  },
});

export const { cacheData,removeOldCache } = searchSlice.actions;
const searchReducer = searchSlice.reducer;
export default searchReducer;
