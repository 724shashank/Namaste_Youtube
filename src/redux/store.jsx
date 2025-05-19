import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/menuSlice";
import searchReducer from "./slices/searchSlice";
import videoReducer from "./slices/videoSlice"
import chatReducer from "./slices/liveChatSlice"
const store = configureStore({
  reducer: {
    menuStatus: menuReducer,
    search: searchReducer,
    videoData:videoReducer,  
    chat_data:chatReducer
  },
});

export default store;
