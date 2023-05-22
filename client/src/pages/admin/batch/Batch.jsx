
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {  Fab } from '@mui/material';
import AddBatchCard from 'components/admin/batch/AddBatchCard';
import './Batch.scss'
import AddBatchForm from 'components/admin/batch/AddBatchForm';
import { useGetBatchQuery } from 'api/admin/batchApi'; 
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BlockIcon from '@mui/icons-material/Block';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';
import GridOnIcon from '@mui/icons-material/GridOn';
import { IconButton } from '@mui/material';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import BatchCardListView from 'components/admin/batch/BatchCardListView';
import { useNavigate } from 'react-router-dom';



function Batch() {
    const navigate = useNavigate()
    const [batchs,setBatchs] = useState([])
    const [view,setView] = useState("table")
    const { data:getBatchResponse, isLoading } = useGetBatchQuery()
    const [batchModal,setBatchModal] = useState(false)
    const  batchDeleteHandler = async()=>{
        
    }
    const createBatchHandler = async()=>{
    }
    
    useEffect(()=>{
        console.log(getBatchResponse)
        if(getBatchResponse?.batches)setBatchs(getBatchResponse?.batches)
    },[getBatchResponse])
    

    return (
        <div>
            
            {console.log(getBatchResponse)}
            <div className="view">
                <IconButton variant='outlined' onClick={()=>setView("table")}>
                    <CalendarViewMonthIcon />
                </IconButton> 
                {/* <IconButton variant='outlined'onClick={()=>setView("list")}>
                    <ViewListIcon />
                </IconButton>  */}
                <IconButton variant='outlined'onClick={()=>setView("grid")}>
                    <ViewModuleIcon />
                </IconButton> 
            </div>
            <div className="batchs">
                {view==="grid" && 
                    batchs?.map((batch)=>{
                        return (
                            <AddBatchCard {...batch} key={batch._id} />    
                        )
                    })
                }
                {view==="list" && 
                    batchs?.map((batch)=>{
                        return (
                            <BatchCardListView {...batch} key={batch._id} />    
                        )
                    })
                }        
            </div>
            {view==="table" && 
            
                <table className='batch-table'>
                    <thead>
                        <tr>
                            <th>SL No</th>
                            <th>Batch Name</th>
                            <th> Start Date</th>
                            {/* <th>Contact No.</th> */}
                            <th>End Date</th>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            batchs?.map((batch,idx)=>{
                                return (
                                    <tr>
                                        <td>{idx+1}</td>
                                        <td>{batch.title}</td>
                                        <td>{new Date(batch.start_date).toLocaleDateString()}</td>
                                        <td>{new Date(batch.end_date).toLocaleDateString()}</td>

                                        {/* <td>{user.contact_no}</td> */}
                                        <td>{batch.teacher}</td>
                                        <td className='table-icons'>
                                            <IconButton variant='outlined'>
                                                <BlockIcon />
                                            </IconButton> 
                                            <IconButton variant='outlined'>
                                                <EditIcon />
                                            </IconButton> 
                                            <IconButton variant='outlined' onClick={()=>navigate("/admin/batch/"+batch.title)}>
                                                <VisibilityIcon />
                                            </IconButton> 
                                        </td>
                                    </tr>    
                                )
                            })
                        }
                    </tbody>
                </table>
            }
            
             <Fab sx={{right:20,position:'fixed',bottom:30}} 
                onClick={()=>setBatchModal(true)}
            >
                <AddCircleIcon />
            </Fab>
            <AddBatchForm
                show={batchModal}
                onHide={setBatchModal}
            />
            
        
        </div>
       
    )
}

export default Batch




