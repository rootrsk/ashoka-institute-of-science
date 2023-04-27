import React from 'react'
import './BatchCard.scss'
function BatchCardListView(props) {
    const {title,start_date,end_date,teacher,subject} = props
    return (
        <div className='batch-card-list'>
            <div className="batch-card-header">
                <div className="profile-pic-wrapper">
                    <img src="https://sb.kaleidousercontent.com/67418/3840x2200/40b6488625/individuals-org.png" alt="" />
                </div>
            </div>
            <div className="batch-card-details">
                <p className="title">{title}</p>
                <p className="caption">{new Date(start_date).toLocaleDateString()}</p>
                <p className="caption">{new Date(end_date).toLocaleDateString()}</p>
                <p className="caption">{teacher}</p>
                <p className="caption">{subject}</p>

            </div>
        </div>
    )
}

export default BatchCardListView