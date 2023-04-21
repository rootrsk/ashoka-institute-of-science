import { useGetUserQuery } from 'api/admin/userApi'
import UserCard from 'components/admin/user/UserCard'
import React, { useEffect, useState } from 'react'
import './User.scss'
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BlockIcon from '@mui/icons-material/Block';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';
import GridOnIcon from '@mui/icons-material/GridOn';
import { IconButton } from '@mui/material';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import UserCardListView from 'components/admin/user/UserCard ListView';
function User() {
    const [users,setUsers] = useState([])
    const [view,setView] = useState("table")
    const { data:gerUsersResponse, isLoading } = useGetUserQuery()
    useEffect(()=>{
        console.log(gerUsersResponse)
        if(gerUsersResponse?.users)setUsers(gerUsersResponse?.users)
    },[gerUsersResponse])
    return (
        <div>
            {console.log(gerUsersResponse)}
            <div className="view">
                <IconButton variant='outlined' onClick={()=>setView("table")}>
                    <CalendarViewMonthIcon />
                </IconButton> 
                <IconButton variant='outlined'onClick={()=>setView("list")}>
                    <ViewListIcon />
                </IconButton> 
                <IconButton variant='outlined'onClick={()=>setView("grid")}>
                    <ViewModuleIcon />
                </IconButton> 
            </div>
            <div className="users">
                {view==="grid" && 
                    users?.map((user)=>{
                        return (
                            <UserCard {...user} key={user._id} />    
                        )
                    })
                }
                {view==="list" && 
                    users?.map((user)=>{
                        return (
                            <UserCardListView {...user} key={user._id} />    
                        )
                    })
                }        
            </div>
            {view==="table" && 
            
                <table className='user-table'>
                    <thead>
                        <tr>
                            <th>SL No</th>
                            <th>Full Name</th>
                            <th>Username</th>
                            <th>Contact No.</th>
                            <th>Email</th>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user,idx)=>{
                                return (
                                    <tr>
                                        <td>{idx+1}</td>
                                        <td>{user.fullname}</td>
                                        <td>@{user.username}</td>
                                        <td>{user.contact_no}</td>
                                        <td>{user.email}</td>
                                        <td className='table-icons'>
                                            <IconButton variant='outlined'>
                                                <BlockIcon />
                                            </IconButton> 
                                            <IconButton variant='outlined'>
                                                <EditIcon />
                                            </IconButton> 
                                            <IconButton variant='outlined'>
                                                <VisibilityIcon />
                                            </IconButton> 
                                        </td>
                                    </tr>    
                                )
                            })
                        }
                    </tbody>
                </table>
            }
            
            
        </div>
    )
}

export default User