import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001/api'
axios.defaults.baseURL = 'https://rootrsk-ais-server.vercel.app/'
// 

const urls = ["http://localhost:3001/api","https://rootrsk-ais-server.vercel.app/api"]

export const baseURL = urls[1]

export const getApi = async({url,params,headers})=>{
    try {
        const resData = await axios({
            url,
            params,
            headers,
            method:'get',
        })
        if(resData?.data?.error) throw new Error(resData?.data.error)
        return{
            error:null,
            data: resData.data
        }
    } catch (error) {
        return {
            message:error.message,
            error: error.message,
            data:null
        }
    }
}

export const postApi = async({url,params,headers,data})=>{
    try {
        const resData = await axios({
            url,
            data,
            params,
            headers,
            method:'post',
        })
        console.log(resData?.data)
        if(resData?.data?.error) throw new Error(resData?.data.error)
        return{
            error:null,
            data: resData.data
        }
    } catch (error) {
        // console.error(error)
        return {
            error: error.message,
            data:null
        }
    }
}

export const patchApi = async({url,params,headers,data})=>{
    try {
        const resData = await axios({
            url,
            data,
            params,
            headers,
            method:'patch',
        })
        if(resData?.data?.error) throw new Error(resData?.data.error)
        return{
            error:null,
            data: resData.data
        }
    } catch (error) {
        return {
            error: error.message,
            data:null
        }
    }
}

export const deleteApi = async({url,params,headers,data})=>{
    try {
        const resData = await axios({
            url,
            data,
            params,
            headers,
            method:'delete',
        })
        if(resData?.data?.error) throw new Error(resData?.data.error)
        return{
            error:null,
            data: resData.data
        }
    } catch (error) {
        return {
            error: error.message,
            data:null
        }
    }
}



// Create a new Axios instance
const API = axios.create({
  baseURL
});

API.interceptors.request.use(
    function (config) {
        config.headers.Authorization = `${localStorage.getItem('authToken')}`;
        return config;
    },
    function (error) {
        console.log(error)
        return Promise.reject(error);
    }
);

API.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        console.log(error)
        return Promise.reject(error);
    }
);
  
export default API