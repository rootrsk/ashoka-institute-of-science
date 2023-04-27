// import React, { useState } from 'react'
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import { Button, CircularProgress, IconButton } from '@mui/material';
// import { useDeleteBatchMutation } from 'api/admin/batchApi';
// import ConfirmModal from 'components/UI/modal/ConfirmModal';

// function AddBatchCard({title,_id})
// {
//     const [deleteBatch,{ isLoading}]=useDeleteBatchMutation
//     const[confirmModal,setConfirmModal]=useState(false)
//     const deleteHandler = async()=>{
//         console.log(_id)
//         deleteBatch({_id})
//     }

//     return (
//         <div className='addBatch_card'>
//                 <div className='addBatch-title'>
//                     {title}
//                 </div>
//                 <div className='notification-icons'>
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
//                 title="Delete Batch"
//                 open={confirmModal}
//                 onClose={()=>setConfirmModal(false)}
//                 message="Confirm if you want to delete it."
//                 onCancel={()=>{}}
//                 onConfirm={deleteHandler}
//             />
//         </div>
//     )
// }
// export default AddBatchCard




import React from 'react'
import './BatchCard.scss'
function AddBatchCard(props) {
    const {title,start_date,end_date,teachers,subjects} = props
    console.log(props)
    return (
        <div className='batch-card'>
            <div className="batch-card-header">
                <div className="profile-pic-wrapper">
                    <img src="https://sb.kaleidousercontent.com/67418/3840x2200/40b6488625/individuals-org.png" alt="" />

                </div>
            </div>
            <div className="batch-card-details">
            <p className="title">{title}</p>
                <p className="caption">{new Date(start_date).toLocaleDateString()}</p>
                <p className="caption">{new Date(end_date).toLocaleDateString()}</p>
                
                <div className="batch_teacher">{teachers.map((e)=><span>{e.full_name}</span>)}</div>
                {/* <p className="caption">{subject}</p> */}
            </div>
        </div>
    )
}

export default AddBatchCard