import { api } from "redux/api";

export const subjectApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getSubject: builder.query({
            query: (params)=>({
                url:"/admin/subject",
                method:"get",
                params,
            }),
            providesTags: ['Batch'],
        }),
        createSubject: builder.mutation({
            query: (data)=>({
                url:"/admin/subject",
                method:"post",
                data,
            }),
            invalidatesTags:["Batch"]
        }),
        updateSubject: builder.mutation({
            query: (data)=>({
                url:"/admin/subject",
                method:"patch",
                data,
            }),
            invalidatesTags:["Batch"]
        }),
        deleteSubject: builder.mutation({
            query: (data)=>({
                url:"/admin/subject",
                method:"delete",
                data,
            }),
            invalidatesTags:["Batch"]
        }),
        getOptionData: builder.query({
            query: (params)=>({
                url:"/admin/admin/subject",
                method:"get",
                params,
            }),
            providesTags: ['Batch'],
        }),
    }),
});
  
export const {
    useGetSubjectQuery,
    useCreateSubjectMutation,
    useUpdateSubjectMutation,
    useDeleteSubjectMutation,
    useGetOptionDataQuery,
} = subjectApi;
  