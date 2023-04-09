import { deleteApi, getApi, patchApi, postApi } from "../customAxios"

const fetchNotifications = async({params,body})=>{
    const {data,error} = await getApi({params})
    return {data,error}
}

const createNotification = async({params,body}) =>{
    const {data,error}  = await postApi({params,data:body})
    return{data,error}
}

const updateNotification = async({params,body})=>{
    const {data,error} = await patchApi({params,data:body})
    return {data,error} 
}

const deleteNotification = async({params,body})=>{
    const {data,error} = await deleteApi({params,data:body})
    return {data,error}
}