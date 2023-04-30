import { Button, TextField } from '@mui/material'
import { InfinitySpin, LineWave } from 'react-loader-spinner'
import React, { useState, useEffect } from 'react'
import './Login.scss'
import { useDispatch, useSelector } from 'react-redux'
import LoadingButton from '../../../components/UI/button/LoadingButton'

import { loginAccount } from '../../../api/AdminApi'
import { adminAuthenticationFailed, authenticateUser, initateAuthentication } from '../../../redux/reducers/adminAuth'
import userLoginInput from 'utils/data/userLoginInput'
import { useAuthenticateAdminAccountMutation } from 'redux/reducers/authApi'

function Login() {
    const auth = useSelector(state=>state?.adminAuth)
    const dispatch = useDispatch()
    const [user,setUser] = useState({...userLoginInput})
    const [loginAdmin ,{ isLoading }] = useAuthenticateAdminAccountMutation()
    const changeHandler = ({target:{name,value}})=>{
        user[name].value = value
        setUser(p=>({...p}))
    }
    const loginHandler = async()=>{
        const { data } = await loginAdmin({
            username:user.email.value,
            password:user.password.value
        })
        if(data?.token)dispatch(authenticateUser(data))
    }
    useEffect(()=>{
        if(user?.email?.value && user?.password?.value)loginHandler()
    },[])
    return (
        <div className='login_page'>
            
            <div className="main-container">
                <h2>Admin Login</h2>
                <div className="login-inputs">
                    
                    <TextField 
                        {...user?.email}
                        onChange={changeHandler}
                    />
                    <TextField 
                        {...user?.password}
                        onChange={changeHandler}
                    />
                    <span className='login-error'>{auth?.error}</span>
                    {
                        isLoading
                        ?
                        <LoadingButton />:
                        <Button 
                            variant='contained'
                            onClick={loginHandler}
                        >
                            Login
                        </Button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Login