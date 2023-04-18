import { api } from "redux/api";

export const batchApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBatch: builder.query({
            query: (params)=>({
                url:"/admin/batch",
                method:"get",
                params,
            }),
            providesTags: ['Batch'],
        }),
        createBatch: builder.mutation({
            query: (data)=>({
                url:"/admin/batch",
                method:"post",
                data,
            }),
            invalidatesTags:["Batch"]
        }),
        updateBatch: builder.mutation({
            query: (data)=>({
                url:"/admin/batch",
                method:"patch",
                data,
            }),
            invalidatesTags:["Batch"]
        }),
        deleteBatch: builder.mutation({
            query: (data)=>({
                url:"/admin/batch",
                method:"delete",
                data,
            }),
            invalidatesTags:["Batch"]
        }),
    }),
});
  
export const {
    useGetBatchQuery,
    useCreateBatchMutation,
    useUpdateBatchMutation,
    useDeleteBatchMutation,
} = batchApi;
  