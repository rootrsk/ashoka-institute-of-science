import { AddBoxOutlined, Payments } from '@mui/icons-material'
import AddBatch from 'components/admin/batch/AddBatchForm'
import SubjectForm from 'components/admin/subject/SubjectForm'
import TeacherForm from 'components/admin/teacher/TeacherForm'
import AddExam from 'components/admin/exam/AddExam'
import Table from 'components/UI/table/Table'
import { useGetUserQuery } from 'api/admin/userApi'
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BlockIcon from '@mui/icons-material/Block';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';
import DeleteIcon from '@mui/icons-material/Delete';

function Dashboard() {
    const { data:gerUsersResponse, isLoading } = useGetUserQuery()
    const [users,setUsers] = useState([])
    useEffect(()=>{
        if(gerUsersResponse?.users)setUsers(p=>gerUsersResponse?.users?.map(i=>({...i,d:{f:"you are "}})))
    },[gerUsersResponse])
    return (
        <div>
            <Table
                selectable
                data={users}
                // className="user-table"
                attributes={["fullname","username","email","contact_no","d.f"]}
                headers={["Full Name","Username","Email","Contact","Other Details"]}
                dropdowns={{
                    name: "Option 1",
                    edit : "Option 2"
                }}
                icons={[{
                        icon:<EditIcon />,
                        action:"edit"
                    },{
                        icon:<BlockIcon />,
                        action:"block"
                    },{
                        icon:<DeleteIcon />,
                        action:"delete"
                    }
                ]}
            />
        </div>
    )
}

export default Dashboard