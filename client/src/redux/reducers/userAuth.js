import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    user:null,
    error:null,
    token:null,
    isAuthenticated: false,
    isAuthenticating:false,
}

const userAuthSlice = createSlice({
    name:'userAuth',
    initialState,
    reducers:{
        initateAuthentication(state,payload){
            state.isAuthenticating = true
        },
        authenticateUser(state,payload){
            state.error = null
            state.user = payload?.user
            state.isAuthenticated = true
            state.token = payload?.token
            state.isAuthenticating = false
        },
        deAuthenticateUser(state,payload){
            Object.assign(state,initialState)
        },
        userAuthenticationFailed(state,payload){
            Object.assign(state,initialState)
            state.error = payload?.error
        }
    }
})


export const {
    authenticateUser,
    deAuthenticateUser,
    initateAuthentication,
    userAuthenticationFailed

} = userAuthSlice.actions


export default userAuthSlice