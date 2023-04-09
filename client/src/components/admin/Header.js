import React from 'react'
import { useSelector } from 'react-redux'
// import { MdNotificationsNone,MdOutlineDarkMode } from "react-icons/md";
function Header() {
    const user = useSelector(state=>state?.adminAuth?.user)
    return (
        <div className='header-main'>
            <div>
                <h1>AIS</h1>
            </div>
            <div className='header-right'>
                {/* <MdOutlineDarkMode className='icon' />
                <MdNotificationsNone className='icon' /> */}
                <div  style={{margin:'0px 10px'}}>
                    <p className='title-2'>{user?.username}</p>
                    <p>Admin</p>
                </div>
                <img src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?b=1&k=20&m=1309328823&s=170667a&w=0&h=a-f8vR5TDFnkMY5poQXfQhDSnK1iImIfgVTVpFZi_KU=" alt="" />
            </div>
        </div>
    )
}

export default Header