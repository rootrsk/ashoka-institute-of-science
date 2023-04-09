import { postApi } from '../../utils/api/customAxios'
import { NOTIFICATION_REQUEST, NOTIFICATION_SUCCESS, NOTIFICATION_FAILURE } from '../constants/notificationConstant';
import { USER_AUTH_REQUEST, USER_AUTH_SUCCESS } from '../constants/userAuthConstant'
import store from '../store'

export async function login(){
    store.dispatch({
        type: USER_AUTH_REQUEST
    })
    // const resData = await postApi({url:''})
    setTimeout(() => {
        store.dispatch({
            type: USER_AUTH_SUCCESS,
            payload:{
                username: 'rootrsk',
                email:'rootrsk@gmail.com',
                contact:'6201004131',
                city: 'Gaya'
            }
        })
    }, 5000);
}
export async function fetchNotification(){
    store.dispatch({
        type: NOTIFICATION_REQUEST
    })
    
}
