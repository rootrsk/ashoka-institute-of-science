import React,{ useState } from 'react'
// import NotificationCard from './NotificationCard'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box, Fab, TextField, IconButton, CircularProgress } from '@mui/material';
import LoadingButton from '../../UI/button/LoadingButton';
import { useCreateNotificationMutation } from 'api/admin/notificationApi';
import Input from 'components/UI/input/Input'
import Modal from 'components/UI/modal/Modal';
import Button from 'components/UI/button/Button';
import SearchSelect from 'components/UI/input/SearchSelect';

function NotificationForm({show,onHide}) {
    const [title,setTitle] = useState("")
    const [loading,setLoading] = useState(false)
    const [createNotification,{ isLoading: isCreateLoading } ] = useCreateNotificationMutation()
    const  notificationDeleteHandler = async()=>{
        
    }
    const createNotificationHandler = async()=>{
        createNotification({title})
    }
    return (
        <div>
            <Modal
                open={show}
                onClose={()=>onHide(false)}
                title="Add Notification"
                size="md"
                footer={
                    <>
                        <Button 
                            variant='contained' 
                            isCreateLoading={isCreateLoading}
                            onClick={createNotificationHandler}
                        >
                            Add New
                        </Button>
                    </>
                }
            >
                <form className="notification_form">
                    <Input
                        label="Title"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                    <SearchSelect
                        label="Teachers"
                        options={[{label:"Ravishankar",value:"1"}]}
                        isMulti
                        defaultValue={[{label:"Ravishankar",value:"1"}]}
                        onChange={(e)=>console.log(e)}
                    />
                </form>
            </Modal>
        </div>
    )
}

export default NotificationForm