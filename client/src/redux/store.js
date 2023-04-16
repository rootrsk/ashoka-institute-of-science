import { configureStore } from '@reduxjs/toolkit'
import { api } from './api'
import adminAuth from 'redux/reducers/adminAuth'
import { setupListeners } from "@reduxjs/toolkit/dist/query";
const store = configureStore({
    reducer:{
        [api.reducerPath]: api.reducer,
        adminAuth: adminAuth
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({

    }).concat(api.middleware),
})

export default store
setupListeners(store.dispatch);