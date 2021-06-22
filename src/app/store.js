import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../features/user/userSlice";
import userSlice from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";
export const store = configureStore({
  reducer: {
    movie: movieReducer, //tells application we have movieReducer at our disposal
    user: userSlice //tells application we have a userSlice at our disposal
  },
});
