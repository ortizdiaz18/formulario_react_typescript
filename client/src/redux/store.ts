import { configureStore } from "@reduxjs/toolkit";
import textReducer from './slices/texts';

const store = configureStore({
    reducer:{
        textReducer,

    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;