import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    user:null,
    error:null,
    token:null,
    isAuthenticated: false,
    isAuthenticating:false,
}

const adminAuthSlice = createSlice({
    name:'adminAuth',
    initialState,
    reducers:{
        initateAuthentication(state,payload){
            state.isAuthenticating = true
        },
        authenticateUser(state,{payload}){
            console.log(payload)
            state.error = null
            state.user = payload?.user
            state.isAuthenticated = true
            state.token = payload?.token
            state.isAuthenticating = false
        },
        deAuthenticateUser(state,payload){
            Object.assign(state,initialState)
        },
        adminAuthenticationFailed(state,{payload}){
            Object.assign(state,initialState)
            state.error = payload?.error
        }
    }
})


export const {
    authenticateUser,
    deAuthenticateUser,
    initateAuthentication,
    adminAuthenticationFailed

} = adminAuthSlice.actions


export default adminAuthSlice.reducer