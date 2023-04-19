import React,{ useEffect, useState } from 'react'
import NotificationCard from 'components/admin/notification/NotificationCard'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {  Fab } from '@mui/material';
import './Notification.scss'
import NotificationForm from 'components/admin/notification/NotificationForm';
import { useGetNotificationQuery } from 'api/admin/notificationApi';
import NotificationLoader from 'components/UI/loading/NotificationLoader';
function Notification() {
    const [notificationModal,setNotificationModal] = useState(false)
    const [notifications,setNotifications] = useState([])
    const  notificationDeleteHandler = async()=>{
        
    }
    const createNotificationHandler = async()=>{
    }
    const { data: notificationResponseData, isLoading } = useGetNotificationQuery()
    useEffect(()=>{
        console.log(notificationResponseData)
        setNotifications(notificationResponseData?.notifications ?? [])
    },[notificationResponseData])
    return (
        <div className="notification-page">
            <NotificationLoader isLoading={isLoading} count={15} />
            {
                notifications?.map((notification)=>{
                    return (
                        <NotificationCard
                            key={notification._id}
                            {...notification}
                        />    
                    )
                })
            }
            <Fab sx={{right:20,position:'fixed',bottom:30}} 
                onClick={()=>setNotificationModal(true)}
            >
                <AddCircleIcon />
            </Fab>
            <NotificationForm
                show={notificationModal}
                onHide={setNotificationModal}
            />
        </div>
    )
}

export default Notification