import { api } from "redux/api";

export const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (params)=>({
                url:"/admin/user",
                method:"get",
                params,
            }),
            providesTags: ['User'],
        }),
        
    }),
});
  
export const {
    useGetUserQuery
} = userApi;
  