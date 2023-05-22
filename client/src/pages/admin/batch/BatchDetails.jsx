import { useGetBatchQuery } from 'api/admin/batchApi'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function BatchDetails() {
    const params = useParams()
    console.log(params)
    const { data:getBatchResponse, isLoading } = useGetBatchQuery({title:params.title})
    useEffect(()=>{
        console.log(getBatchResponse)
    },[getBatchResponse])
    return (
        <div>BatchDetails</div>
    )
}

export default BatchDetails