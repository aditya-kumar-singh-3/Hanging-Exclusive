import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CreateSlice";
import authReducer from "./SignupSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      auth: authReducer,
    },
  });
};

const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export default store;
