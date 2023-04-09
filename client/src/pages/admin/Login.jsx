import { Button, TextField } from '@mui/material'
import { InfinitySpin, LineWave } from 'react-loader-spinner'
import React, { useState, useEffect } from 'react'
import './Login.scss'
import { useDispatch, useSelector } from 'react-redux'
import LoadingButton from '../../components/UI/button/LoadingButton'

import { loginAccount } from '../../api/AdminApi'
import { adminAuthenticationFailed, authenticateUser, initateAuthentication } from '../../redux/reducers/adminAuth'

function Login() {
    const auth = useSelector(state=>state?.adminAuth)
    const dispatch = useDispatch()
    const [user,setUser] = useState({
        email:{
            name:'email',
            label:'Email',
            type:'email',
            value:'rootrsk',
            required:true,
            
        },
        password:{
            name: 'password',
            type:'password',
            label:'Password',
            value:'rootrsk',
            required: true,
            
        }
    })
    const changeHandler = ({target:{name,value}})=>{
        console.log(name,value)
        user[name].value = value
        setUser(p=>({...p}))
        // console.log(e)
    }
    
    
    console.log(auth)
    const loginHandler = async()=>{
        dispatch(initateAuthentication())
        const {data,error} = await loginAccount({
            body:{
                username:user.email.value,
                password:user.password.value
            }
        })
        console.log(data,error)
        if(error){
            return dispatch(adminAuthenticationFailed({error}))
        }
        dispatch(authenticateUser(data))
    }
    useEffect(()=>{
        // login()
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
                        auth?.isAuthenticating
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