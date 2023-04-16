import { toast } from "react-toastify";
import { createApi } from "@reduxjs/toolkit/query/react";
import API from "api/API";

const axiosBaseQuery =({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params }) => {
    try {
      const response = await API({
        url:url,method,params,data,
      })
      if(response?.data?.message){
        toast(response?.data?.message,{type:"success"})
      }
      return {
        data: response.data
      }
    } catch (err) {
      console.log(err)
      const errMsg = err?.response?.data?.error ||  err?.response?.data.message || "Something Went Wrong"
      toast(errMsg,{type:"error"})
      return {
        data: {err}
      }
    }
  };  

export const api = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({}),
  tagTypes: [],
  endpoints: (builder) => ({}),
});
