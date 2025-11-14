import { configureStore } from "@reduxjs/toolkit";
import dictReducer from './features/dictSlice'

export const store = configureStore({
    reducer: {
        dictInfo: dictReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
