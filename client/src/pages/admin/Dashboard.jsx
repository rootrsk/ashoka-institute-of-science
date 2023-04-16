import { AddBoxOutlined } from '@mui/icons-material'
import AddBatch from 'components/admin/batch/AddBatch'
import React from 'react'
import AddExam from '../../components/admin/exam/AddExam'

function Dashboard() {
    return (
        <div>
            
            {/* <AddExam /> */}
            <AddBatch 
                open={true}
            /> 
        </div>
    )
}

export default Dashboard