import { AddBoxOutlined } from '@mui/icons-material'
import AddBatch from 'components/admin/batch/AddBatch'
import SubjectForm from 'components/admin/subject/SubjectForm'
import TeacherForm from 'components/admin/teacher/TeacherForm'
import React from 'react'
import AddExam from '../../components/admin/exam/AddExam'

function Dashboard() {
    return (
        <div>
            {/* <AddExam /> */}
            
            {/* { <AddBatch 
                open={true}
            />  } */}

            <TeacherForm
                 open={true}
            />

            {/* {
                <SubjectForm
                    open={true}
                />
            }  */}
        </div>
    )
}

export default Dashboard