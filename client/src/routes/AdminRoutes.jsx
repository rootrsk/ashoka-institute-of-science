import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardLayout from '../components/admin/layout/AdminDashboardLayout'
import Dashboard from '../pages/admin/Dashboard'
import { useSelector} from 'react-redux'
import Login from '../pages/admin/auth/Login'
import Notification from '../pages/admin/notification/Notification'
import Batch from 'pages/admin/batch/Batch'
import Teacher from 'pages/admin/teacher/Teacher'
import Subject from 'pages/admin/subject/Subject'
import Slides from 'pages/admin/slides/Slides'
import User from 'pages/admin/user/User'
import BatchDetails from 'pages/admin/batch/BatchDetails'
function AdminRoutes() {
    const admin = useSelector(state=>state?.adminAuth?.user)
    console.log(admin)
    if(!admin) return <Login />
    return (
        <DashboardLayout>
            <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/notification' element={<Notification />} />
                <Route path='/batch' element={<Batch />} />
                <Route path='/batch/:title' element={<BatchDetails />} />
                <Route path='/teacher' element={<Teacher />} />
                <Route path='/subject' element={<Subject />} />
                <Route path='/slides' element={<Slides />} />
                <Route path='/user' element={<User />} />

            </Routes>
        </DashboardLayout>

    )   
}

export default AdminRoutes