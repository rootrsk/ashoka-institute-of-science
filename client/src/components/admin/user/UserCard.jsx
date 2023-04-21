import React from 'react'
import './UserCard.scss'
function UserCard(props) {
    const {username,fullname,email,contact_no} = props
    return (
        <div className='user-card'>
            <div className="user-card-header">
                <div className="profile-pic-wrapper">
                    <img src="https://sb.kaleidousercontent.com/67418/3840x2200/40b6488625/individuals-org.png" alt="" />

                </div>
            </div>
            <div className="user-card-details">
                <p className="title">{fullname}</p>
                <p className="caption">@{username}</p>
                {/* <p>{email}</p>
                <p>{contact_no}</p> */}
            </div>
        </div>
    )
}

export default UserCard