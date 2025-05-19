import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
  name: "chat_data",
  initialState: {
    data: [],
  },
  reducers: {
    addChat: (state, action) => {
      state.data.unshift(action.payload);
    },
    removeChat:(state,action) =>{
        state.data.splice(0,action.payload);

    }
  },
});

export const { addChat,removeChat } = liveChatSlice.actions;
export default liveChatSlice.reducer;
