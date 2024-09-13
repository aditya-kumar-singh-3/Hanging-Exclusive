import cartReducer from "./CreateSlice"
import { configureStore } from '@reduxjs/toolkit';


export const makeStore = () => {
  return configureStore({
    reducer: {
      cart:cartReducer
    },
  });
};

// Infer the types for the store
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];