import { loginAccount } from '../../utils/api/admin/adminAuth'
import { postApi } from '../../utils/api/customAxios'
import { USER_AUTH_FAILURE, USER_AUTH_REQUEST, USER_AUTH_SUCCESS } from '../constants/userAuthConstant'
import store from '../store'


export async function login({params,body}){
    store.dispatch({
        type: USER_AUTH_REQUEST
    })
    const {data,error} = await loginAccount({params,body})
    console.log(data,error)
    if(error){
        store.dispatch({
            type: USER_AUTH_FAILURE,
            payload: error
        })
        return
    }
    store.dispatch({
        type: USER_AUTH_SUCCESS,
        payload: data
    })
    // setTimeout(() => {
    //     store.dispatch({
    //         type: USER_AUTH_SUCCESS,
    //         payload:{
    //             username: 'rootrsk',
    //             email:'rootrsk@gmail.com',
    //             contact:'6201004131',
    //             city: 'Gaya'
    //         }
    //     })
    // }, 5000);
}

export async function logout() {
    
}

export async function verifyToken(){
    
}