import React from 'react'
import Skeleton from '@mui/material/Skeleton';
function TeacherLoader({count=15,isLoading}) {
    const nums = Array.from({ length: parseInt(count) ?? 15 }, (_, i) => i + 1);
    if(!isLoading)return<></>
    return (
        <div className='teacher-loader'>
            {
                nums.map(num=>(
                    <div className="teacher-card" key={num}>
                        <Skeleton width={"100%"} height={35}/>
                    </div>    
                ))            
            }
        </div>
    )
}

export default TeacherLoader