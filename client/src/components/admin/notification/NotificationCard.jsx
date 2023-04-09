import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, IconButton } from '@mui/material';
function NotificationCard({title}) {
    return (
        <div className='notification-card'>
            
            <div className='notification-description'>
                {title}
            </div>
            <div className='notification-icons'>
                <IconButton variant='contained'>
                    <DeleteIcon />
                </IconButton>
                <IconButton variant='outlined'>
                    <EditIcon />
                </IconButton>    
            </div>
            
        </div>
    )
}

export default NotificationCard