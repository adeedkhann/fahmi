import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer.ts";
import { authApi } from "@/features/api/authApi.ts";
export const appStore = configureStore({
    reducer:rootReducer,
    middleware:(defaultMiddleware)=> defaultMiddleware().concat(authApi.middleware)
});