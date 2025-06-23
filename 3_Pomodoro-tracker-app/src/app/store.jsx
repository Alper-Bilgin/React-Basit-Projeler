import { configureStore } from "@reduxjs/toolkit";
import pomodoroReducer from "../features/pomodro/pomodroSlice";

export const store = configureStore({
  reducer: {
    pomodoro: pomodoroReducer,
  },
});
export default store;
