import { api } from "redux/api";

export const notificationApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getNotification: builder.query({
            query: (params)=>({
                url:"/admin/notification",
                method:"get",
                params,
            }),
            providesTags: ['Notifications'],
        }),
        createNotification: builder.mutation({
            query: (data)=>({
                url:"/admin/notification",
                method:"post",
                data,
            }),
            invalidatesTags:["Notifications"]
        }),
        updateNotification: builder.mutation({
            query: (data)=>({
                url:"/admin/notification",
                method:"patch",
                data,
            }),
            invalidatesTags:["Notifications"]
        }),
        deleteNotification: builder.mutation({
            query: (data)=>({
                url:"/admin/notification",
                method:"delete",
                data,
            }),
            invalidatesTags:["Notifications"]
        }),
    }),
});
  
export const {
    useGetNotificationQuery,
    useCreateNotificationMutation,
    useUpdateNotificationMutation,
    useDeleteNotificationMutation,
} = notificationApi;
  