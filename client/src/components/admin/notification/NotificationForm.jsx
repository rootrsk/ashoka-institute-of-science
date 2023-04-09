import React,{ useState } from 'react'
// import NotificationCard from './NotificationCard'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box, Button, Fab, TextField, IconButton, CircularProgress } from '@mui/material';
import Modal from '@mui/material/Modal';
import LoadingButton from '../../UI/button/LoadingButton';
function NotificationForm({show,onHide}) {
    const notifications=['Tution will be closed on saturday on 25 of aggest']
    const [loading,setLoading] = useState(false)
    const  notificationDeleteHandler = async()=>{
        
    }
    const createNotificationHandler = async()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            onHide(false)
        }, 3000);
        
    }
    return (
        <div>
            <Modal
                // hideBackdrop
                open={show}
                onClose={()=>onHide(false)}
                // hideBackdrop
                // aria-labelledby="child-modal-title"
                // aria-describedby="child-modal-description"
            >
                <div className="notification_form">
                    <TextField
                        sx={{flex:1}}
                        placeholder="Notification"
                    />
                    {loading 
                        ? 
                        <IconButton>
                            <CircularProgress />
                        </IconButton>
                        :
                        <Button 
                            variant='contained'
                            sx={{margin:'0px 0px 0px 10px'}}
                            onClick={createNotificationHandler}
                        >
                            Add new
                        </Button>
                    }
                </div>
            </Modal>
        </div>
    )
}

export default NotificationForm