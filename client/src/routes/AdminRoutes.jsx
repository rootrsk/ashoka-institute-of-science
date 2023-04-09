import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardLayout from '../components/admin/AdminDashboardLayout'
import Dashboard from '../pages/admin/Dashboard'
import { useSelector} from 'react-redux'
import Login from '../pages/admin/Login'
import Notification from '../pages/admin/Notification'
function AdminRoutes() {
    const admin = useSelector(state=>state?.adminAuth?.user)
    console.log(admin)
    if(!admin) return <Login />
    return (
        <DashboardLayout>
            <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/notification' element={<Notification />} />
            </Routes>
        </DashboardLayout>

    )   
}

export default AdminRoutes