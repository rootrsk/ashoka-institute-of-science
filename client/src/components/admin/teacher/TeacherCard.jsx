// import React, { useState } from 'react'
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import { Button, CircularProgress, IconButton } from '@mui/material';
// import { useDeleteTeacherMutation } from 'api/admin/teacherApi'; 
// import ConfirmModal from 'components/UI/modal/ConfirmModal';
// function TeacherCard({_id,full_name}) {
//     const [deleteTeacher,{ isLoading }]= useDeleteTeacherMutation()
//     const [confirmModal,setConfirmModal] = useState(false)
//     const deleteHandler = async()=>{
//         console.log(_id)
//         deleteTeacher({_id})
//     }
//     return (
//         <div className='teacher-card'>
            
//             <div className='teacher-title'>
//                 {full_name}
//             </div>
//             <div className='notification-icons'>
//                 <IconButton variant='contained' onClick={()=>setConfirmModal(true)}>
                    
//                     {
//                         isLoading ? 
//                         <CircularProgress className='loading-button-progres' />:
//                         <DeleteIcon /> 
//                     }
                    
//                 </IconButton>
//                 <IconButton variant='outlined'>
//                     <EditIcon />    
//                 </IconButton>    
//             </div>
//             <ConfirmModal
//                 title="Delete Alert"
//                 open={confirmModal}
//                 onClose={()=>setConfirmModal(false)}
//                 message="Confirm if you want to delete it."
//                 onCancel={()=>{}}
//                 onConfirm={deleteHandler}
//             />
//         </div>
//     )
// }

// export default TeacherCard



import React from 'react'
import './TeacherCard.scss'
function TeacherCard(props) {
    const {contact,full_name,email} = props
    return (
        <div className='teacher-card'>
            <div className="teacher-card-header">
                <div className="profile-pic-wrapper">
                    <img src="https://sb.kaleidousercontent.com/67418/3840x2200/40b6488625/individuals-org.png" alt="" />

                </div>
            </div>
            <div className="teacherr-card-details">
                <p className="title">{full_name}</p>
                <p className="caption">{contact}</p>
                {/* <p>{email}</p>
                <p>{contact_no}</p> */}
            </div>
        </div>
    )
}

export default TeacherCard