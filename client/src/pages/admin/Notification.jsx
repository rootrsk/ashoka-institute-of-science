import React,{ useState } from 'react'
import NotificationCard from '../../components/admin/notification/NotificationCard'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box, Button, Fab, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import './Notification.scss'
import NotificationForm from '../../components/admin/notification/NotificationForm';
function Notification() {
    const notifications=['Tution will be closed on saturday on 25 of aggest']
    const [loading,setLoading] = useState(false)
    const [notificationModal,setNotificationModal] = useState(false)
    const  notificationDeleteHandler = async()=>{
        
    }
    const createNotificationHandler = async()=>{
        setLoading(true)
        
        setLoading(false)
    }

    return (
        <div>
            <NotificationCard title={notifications[0]} />
            <NotificationCard title={notifications[0]} />
            <NotificationCard title={notifications[0]} />
            <Fab sx={{right:10,position:'fixed',bottom:100}} 
                onClick={()=>setNotificationModal(true)}
            >
                <AddCircleIcon />
            </Fab>
            <NotificationForm
                show={notificationModal}
                onHide={setNotificationModal}
            />
            {/* <Modal
                // hideBackdrop
                open={notificationModal}
                onClose={()=>setNotificationModal(false)}
                // hideBackdrop
                // aria-labelledby="child-modal-title"
                // aria-describedby="child-modal-description"
            >
                <div className="notification_form">
                    <TextField
                        sx={{flex:1}}
                        placeholder="Notification"
                    />
                    <Button 
                        variant='contained'
                        sx={{margin:'0px 0px 0px 10px'}}
                    >
                        Add new
                    </Button>
                </div>
            </Modal> */}
        </div>
    )
}

export default Notification

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};