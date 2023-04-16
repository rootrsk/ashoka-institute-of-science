import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, CircularProgress, IconButton } from '@mui/material';
import { useDeleteNotificationMutation } from 'api/admin/notificationApi';
import ConfirmModal from 'components/UI/modal/ConfirmModal';
function NotificationCard({title,_id}) {
    const [deleteNotification,{ isLoading }]= useDeleteNotificationMutation()
    const [confirmModal,setConfirmModal] = useState(false)
    const deleteHandler = async()=>{
        console.log(_id)
        deleteNotification({_id})
    }
    return (
        <div className='notification-card'>
            
            <div className='notification-title'>
                {title}
            </div>
            <div className='notification-icons'>
                <IconButton variant='contained' onClick={()=>setConfirmModal(true)}>
                    
                    {
                        isLoading ? 
                        <CircularProgress className='loading-button-progres' />:
                        <DeleteIcon /> 
                    }
                    
                </IconButton>
                <IconButton variant='outlined'>
                    <EditIcon />    
                </IconButton>    
            </div>
            <ConfirmModal
                title="Delete Alert"
                open={confirmModal}
                onClose={()=>setConfirmModal(false)}
                message="Confirm if you want to delete it."
                onCancel={()=>{}}
                onConfirm={deleteHandler}
            />
        </div>
    )
}

export default NotificationCard