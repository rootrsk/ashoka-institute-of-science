import React,{ useEffect, useState } from 'react'
import NotificationCard from '../../components/admin/notification/NotificationCard'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box, Button, Fab, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import './Notification.scss'
import NotificationForm from '../../components/admin/notification/NotificationForm';
import { useGetNotificationQuery } from 'api/admin/notificationApi';
import Loader from 'components/UI/loading/Loader';
import WatchLoader from 'components/UI/loading/WatchLoader';
import NotificationLoader from 'components/UI/loading/NotificationLoader';
function Notification() {
    const [loading,setLoading] = useState(false)
    const [notificationModal,setNotificationModal] = useState(false)
    const [notifications,setNotifications] = useState([])
    const  notificationDeleteHandler = async()=>{
        
    }
    const createNotificationHandler = async()=>{
    }
    const { data: notificationResponseData, isFetching } = useGetNotificationQuery()
    useEffect(()=>{
        console.log(notificationResponseData)
        setNotifications(notificationResponseData?.notifications ?? [])
    },[notificationResponseData])
    return (
        <div>
            {/* <Loader /> */}
            {/* <WatchLoader /> */}
            <NotificationLoader isLoading={isFetching} count={15} />
            {
                notifications?.map((notification)=>{
                    return (
                        <NotificationCard
                            {...notification}
                        />    
                    )
                })
            }
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