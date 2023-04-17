import { AddBoxOutlined } from '@mui/icons-material'
import AddBatch from 'components/admin/batch/AddBatch'
import TeacherForm from 'components/admin/teacher/TeacherForm'
import React from 'react'
import AddExam from '../../components/admin/exam/AddExam'

function Dashboard() {
    return (
        <div>
            
            {/* <AddExam /> */}
            {/* <AddBatch 
                open={true}
            />  */}

            <TeacherForm
                 open={true}
            />
        </div>
    )
}

export default Dashboard