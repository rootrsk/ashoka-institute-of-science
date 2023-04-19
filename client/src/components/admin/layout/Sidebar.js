import React, { useState } from 'react'
// import { MdOutlineDashboard,MdOutlineEmail,MdOutlineChat,MdOutlineSettings,MdOutlineTaskAlt,MdOutlineStickyNote2,MdOutlineEventNote,MdOutlineAccountCircle } from "react-icons/md";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import EmailIcon from '@mui/icons-material/Email';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SchoolIcon from '@mui/icons-material/School';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import { NavLink } from 'react-router-dom';
function Sidebar() {
    const [open,setOpen] = useState(false)
    return (
        <div className='siderbar'>
            <div id="f" className='siderbar-wrapper'>
                <div className="siderbar-logo">
                    <img src="https://i.ibb.co/pzwqK4t/Group-13.png" alt="" />
                    <h1>AIS</h1>
                </div>
                <div className='sidebar-nav-wrapper'>
                    <NavLink className="sidebar-it-wrapper" to='/admin/dashboard'>
                        <DashboardIcon  className='sidebar-icon'/> <span>Dashboard</span>
                    </NavLink>
                    <div className='dashboard-route'>
                        <button className='active-button'>eCommerce</button>
                        <button className='button'>Analytics</button>
                    </div>
                    <div className="sidebar-divider">
                        <p className='dot'>...</p>
                        <span>Apps and Pages</span>
                    </div>
                    <NavLink to='/admin/email' className="sidebar-it-wrapper">
                        <EmailIcon className='sidebar-icon'/> <span>Email</span>
                    </NavLink>
                    <NavLink to='/admin/chat' className="sidebar-it-wrapper">
                        <ChatIcon className='sidebar-icon'/> <span>Chat</span>
                    </NavLink>
                    <NavLink className="sidebar-it-wrapper" to='/admin/batch'>
                        <FeaturedPlayListIcon className='sidebar-icon'  /> <span>Batches</span>
                    </NavLink>
                    <NavLink className="sidebar-it-wrapper" to='/admin/subject'>
                        <AutoStoriesIcon className='sidebar-icon'  /> <span>Subjects</span>
                    </NavLink>
                    <NavLink className="sidebar-it-wrapper" to='/admin/teacher'>
                        <CoPresentIcon className='sidebar-icon'  /> <span>Teachers</span>
                    </NavLink>
                    <NavLink className="sidebar-it-wrapper" to='/admin/notification'>
                        <NotificationsActiveIcon className='sidebar-icon'  /> <span>Notifications</span>
                    </NavLink>
                    
                    <NavLink to='/admin/account' className="sidebar-it-wrapper">
                        <AccountCircleIcon className='sidebar-icon'/> <span>Account</span>
                    </NavLink>
                    <div className="sidebar-divider">
                        <p className='dot'>...</p>
                        <span>Event and Tasks</span>
                    </div>
                    <NavLink to='/admin/slide' className="sidebar-it-wrapper">
                        <SlideshowIcon className='sidebar-icon'/> <span>Slides</span>
                    </NavLink>
                    <div className="sidebar-it-wrapper">
                        <DashboardIcon className='sidebar-icon'/><span>Notes</span>
                    </div>
                    <div className="sidebar-it-wrapper">
                        <DashboardIcon className='sidebar-icon'/><span>Events</span>
                    </div>
                    
                    <div className="sidebar-divider">
                        <p>...</p>
                    </div>
                </div>  
            </div>
        </div>
    )
}
export default Sidebar