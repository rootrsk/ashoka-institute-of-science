import React from 'react'
import {useEffect,useState} from 'react';
import SubjectFormCard from 'components/admin/subject/SubjectCard';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {  Fab } from '@mui/material';
import './Subject.scss'
import SubjectForm from 'components/admin/subject/SubjectForm';
import { useGetSubjectQuery } from 'api/admin/subjectApi'; 
import SubjectLoader from 'components/UI/loading/SubjectLoader';

function Subject() {
    const [subjectModal,setSubjectModal] = useState(false)
    const [subjects,setSubjects] = useState([])
    const  subjectDeleteHandler = async()=>{
        
    }
    const createSubjectHandler = async()=>{
    }
    const { data: subjectResponseData, isLoading } = useGetSubjectQuery()
    useEffect(()=>{
        console.log(subjectResponseData)
        setSubjects(subjectResponseData?.subjects ?? [])
    },[subjectResponseData])
    return (
        <div className="subject-page">
            <SubjectLoader isLoading={isLoading} count={15} />
            {
                subjects?.map((subject)=>{
                    return (
                        <SubjectFormCard
                            key={subject._id}
                            {...subject}
                        />    
                    )
                })
            }
            <Fab sx={{right:20,position:'fixed',bottom:30}} 
                onClick={()=>setSubjectModal(true)}
            >
                <AddCircleIcon />
            </Fab>
            <SubjectForm
                show={subjectModal}
                onHide={setSubjectModal}
            />
        </div>
    )
}

 

export default Subject