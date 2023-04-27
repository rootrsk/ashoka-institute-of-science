import React from 'react'
import './TeacherCard.scss'
function TeacherCardListView(props) {
    const {contact,full_name,email} = props
    return (
        <div className='teacher-card-list'>
            <div className="teacher-card-header">
                <div className="profile-pic-wrapper">
                    <img src="https://sb.kaleidousercontent.com/67418/3840x2200/40b6488625/individuals-org.png" alt="" />
                </div>
            </div>
            <div className="teacher-card-details">
                <p className="title">{full_name}</p>
                <p className="caption">{contact}</p>
            </div>
        </div>
    )
}

export default TeacherCardListView