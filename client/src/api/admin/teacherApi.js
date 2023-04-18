import { api } from "redux/api";

export const notificationApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getTeacher: builder.query({
            query: (params)=>({
                url:"/admin/teacher",
                method:"get",
                params,
            }),
            providesTags: ['Teacher'],
        }),
        createTeacher: builder.mutation({
            query: (data)=>({
                url:"/admin/teacher",
                method:"post",
                data,
            }),
            invalidatesTags:["Teacher"]
        }),
        updateTeacher: builder.mutation({
            query: (data)=>({
                url:"/admin/teacher",
                method:"patch",
                data,
            }),
            invalidatesTags:["Teacher"]
        }),
        deleteTeacher: builder.mutation({
            query: (data)=>({
                url:"/admin/teacher",
                method:"delete",
                data,
            }),
            invalidatesTags:["Teacher"]
        }),
    }),
});
  
export const {
    useGetTeacherQuery,
    useCreateTeacherMutation,
    useUpdateTeacherMutation,
    useDeleteTeacherMutation,
} = notificationApi;
  