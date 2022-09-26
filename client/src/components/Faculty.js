import React from 'react'

const Faculty = ({name, image, exp, contact,facebook,degree,subject}) =>(
    <div className='faculty'>
        <div className='avatar-container'>
            <img  src={image} className='faculty-image' alt='img' />
        </div>
        <p className='paragrpah'>{name}</p>
        <div className='faculty-details'>
            <p> {degree} </p>
            <p>Teaching experience of {exp} years</p>
            <p>Contact Number +91{contact}</p>
            <p>{subject}</p>
        </div>
        <div className='flex'>
            <button 
                onClick={()=>{
                    if(facebook){
                        window.open(facebook)
                    }
                }} 
            >Connect on Facebook</button>
        </div>
        
    </div>
)

export default Faculty
