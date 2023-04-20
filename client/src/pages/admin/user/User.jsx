import { useGetUserQuery } from 'api/admin/userApi'
import React, { useEffect } from 'react'

function User() {
    const { gerUsersResponse, isLoading } = useGetUserQuery()
    useEffect(()=>{
        console.log(gerUsersResponse)
    },[gerUsersResponse])
    return (
        <div>
            
            User
        </div>
    )
}

export default User