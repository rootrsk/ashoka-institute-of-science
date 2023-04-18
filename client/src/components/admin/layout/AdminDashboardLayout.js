import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import './AdminDashboardLayout.scss'
function AdminDashboardLayout({children}) {
    return (
        <div className='dashboard-page'>
            <Sidebar />
            <div className='main-view'>
                <Header />
                <main className='dashboard-main'>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default AdminDashboardLayout