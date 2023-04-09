import { configureStore } from '@reduxjs/toolkit'
import adminAuth from './reducers/adminAuth'

const store = configureStore({
    reducer:{
        adminAuth
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({

    }),
})

export default store