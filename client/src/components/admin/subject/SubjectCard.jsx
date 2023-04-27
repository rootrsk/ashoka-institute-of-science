import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, CircularProgress, IconButton } from '@mui/material';
import { useDeleteSubjectMutation } from 'api/admin/subjectApi'; 
import ConfirmModal from 'components/UI/modal/ConfirmModal';
function SubjectCard({title,_id}) {
    const [deleteSubject,{ isLoading }]= useDeleteSubjectMutation()
    const [confirmModal,setConfirmModal] = useState(false)
    const deleteHandler = async()=>{
        console.log(_id)
        deleteSubject({_id})
    }
    return (
        <div className='subject-card'>
            
            <div className='subject-title'>
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

export default SubjectCard