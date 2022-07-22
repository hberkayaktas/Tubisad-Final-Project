import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import todosSlice from "./todosSlice";

export const store = configureStore({
      reducer:{
            auth: AuthSlice,
            notes:todosSlice,
      },
      middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
})
