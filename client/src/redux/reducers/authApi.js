import { api } from "redux/api";

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createUserAccount: builder.mutation({
            
        }),
        createAdminAccount: builder.mutation({
            
        }),
        authenticateAdminAccount: builder.mutation({
            query: (data)=>({
                url:"/admin/login",
                method:"post",
                data,
            })
        }),
        authenticateUserAccount: builder.mutation({
            query: (data)=>({
                url:"/user/login",
                method:"post",
                data,
            })
        }),
    }),
});
  
export const {
    useAuthenticateUserAccountMutation,
    useAuthenticateAdminAccountMutation,
} = authApi;
  