import { USER_AUTH_FAILURE, USER_AUTH_SUCCESS, USER_AUTH_REQUEST} from '../constants/userAuthConstant'
const initialState = {
    isAuthenticated: true,
    user:null,
    isLoading: false,
    error:null
}
export default (state,action)=>{
    console.log(action)
    switch (action.type) {
        case USER_AUTH_REQUEST:
            return {
                ...state,
                isLoading: true,
                error:null
            }
        case USER_AUTH_SUCCESS:
            return {
                ...state,
                isLoading:false,
                user: action.payload,
                error:null
            }
        case USER_AUTH_FAILURE:
            return {
                ...state,
                isLoading: false,
                user: null,
                error:action.payload
            }
        default:
            return initialState
    }
}