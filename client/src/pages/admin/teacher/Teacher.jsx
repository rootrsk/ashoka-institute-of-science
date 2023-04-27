// import React,{ useEffect, useState } from 'react'
// import TeacherCard from 'components/admin/teacher/TeacherCard';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import {  Fab } from '@mui/material';
// import './Teacher.scss'
// import TeacherForm from 'components/admin/teacher/TeacherForm';
// import { useGetTeacherQuery } from 'api/admin/teacherApi';
// import TeacherLoader from 'components/UI/loading/TeacherLoader';
// function Teacher() {
//     const [teacherModal,setTeacherModal] = useState(false)
//     const [teachers,setTeachers] = useState([])
//     const  teacherDeleteHandler = async()=>{
        
//     }
//     const createTeacherHandler = async()=>{
//     }
//     const { data: teacherResponseData, isLoading } = useGetTeacherQuery()
//     useEffect(()=>{
//         console.log(teacherResponseData)
//         setTeachers(teacherResponseData?.teachers ?? [])
//     },[teacherResponseData])
//     return (
//         <div className="teacher-page">
//             <TeacherLoader isLoading={isLoading} count={15} />
//             {
//                 teachers?.map((teacher)=>{
//                     return (
//                         <TeacherCard
//                             key={teacher._id}
//                             {...teacher}
//                         />    
//                     )
//                 })
//             }
//             <Fab sx={{right:20,position:'fixed',bottom:30}} 
//                 onClick={()=>setTeacherModal(true)}
//             >
//                 <AddCircleIcon />
//             </Fab>
//             <TeacherForm
//                 show={teacherModal}
//                 onHide={setTeacherModal}
//             />
//         </div>
//     )
// }

// export default Teacher








import AddCircleIcon from '@mui/icons-material/AddCircle';
import {  Fab } from '@mui/material';
import TeacherCard from 'components/admin/teacher/TeacherCard';
import './Teacher.scss'
import TeacherForm from 'components/admin/teacher/TeacherForm';
import { useGetTeacherQuery } from 'api/admin/teacherApi';
import TeacherLoader from 'components/UI/loading/TeacherLoader'; 
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BlockIcon from '@mui/icons-material/Block';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';
import GridOnIcon from '@mui/icons-material/GridOn';
import { IconButton } from '@mui/material';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import TeacherCardListView from 'components/admin/teacher/TeacherCardListView'; 




function Teacher() {
   
    const [teachers,setTeachers] = useState([])
    const [view,setView] = useState("table")
    const { data:getTeachersResponse, isLoading } = useGetTeacherQuery()
    const [teacherModal,setTeacherModal] = useState(false)
    const  teacherDeleteHandler = async()=>{
        
    }
    const createTeacherHandler = async()=>{
    }
    
    useEffect(()=>{
        console.log(getTeachersResponse)
        if(getTeachersResponse?.teachers)setTeachers(getTeachersResponse?.teachers)
    },[getTeachersResponse])
    

    return (
        <div>
            
            {console.log(getTeachersResponse)}
            <div className="view">
                <IconButton variant='outlined' onClick={()=>setView("table")}>
                    <CalendarViewMonthIcon />
                </IconButton> 
                <IconButton variant='outlined'onClick={()=>setView("list")}>
                    <ViewListIcon />
                </IconButton> 
                <IconButton variant='outlined'onClick={()=>setView("grid")}>
                    <ViewModuleIcon />
                </IconButton> 
            </div>
            <div className="teachers">
                {view==="grid" && 
                    teachers?.map((teacher)=>{
                        return (
                            <TeacherCard {...teacher} key={teacher._id} />    
                        )
                    })
                }
                {view==="list" && 
                    teachers?.map((teacher)=>{
                        return (
                            <TeacherCardListView {...teacher} key={teacher._id} />    
                        )
                    })
                }        
            </div>
            {view==="table" && 
            
                <table className='teacher-table'>
                    <thead>
                        <tr>
                            <th>SL No</th>
                            <th>Full Name</th>
                            <th> Contact</th>
                            {/* <th>Contact No.</th> */}
                            <th>Email</th>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            teachers?.map((teacher,idx)=>{
                                return (
                                    <tr>
                                        <td>{idx+1}</td>
                                        <td>{teacher.full_name}</td>
                                        <td>{teacher.contact}</td>
                                        {/* <td>{user.contact_no}</td> */}
                                        <td>{teacher.email}</td>
                                        <td className='table-icons'>
                                            <IconButton variant='outlined'>
                                                <BlockIcon />
                                            </IconButton> 
                                            <IconButton variant='outlined'>
                                                <EditIcon />
                                            </IconButton> 
                                            <IconButton variant='outlined'>
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
                onClick={()=>setTeacherModal(true)}
            >
                <AddCircleIcon />
            </Fab>
            <TeacherForm
                show={teacherModal}
                onHide={setTeacherModal}
            />
            
        
        </div>
       
    )
}

export default Teacher