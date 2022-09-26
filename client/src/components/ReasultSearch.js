import React, { useState } from 'react'
import ResultPdfLink from './ResultPdfLink'
import ResultTemplate from './ResultTemplate'
import {isMobile} from 'react-device-detect';
import ResultHtmlTemplate12th from './ResultHtmlTemplate12th';
import ResultHtmlTemplate10th from './ResultHtmlTemplate10th';

function ReasultSearch({data,title,std}) {
    const [name, setName] = useState('')
    const [searchedStudent, setSearchedStudent] = useState([])
    const [open, setOpen] = useState(false)
    const [student, setStudent] = useState({
        name: '',
        roll: '',
        pass: 87,
        total: 150,
        your: '',
    })
    console.log(isMobile)
    const filterByName = () => {
        const filteredStudent = data.students.filter((student) => {
            return student.name.toLowerCase().includes(name.toLowerCase())
        })
        setSearchedStudent(filteredStudent)
    }
    const showResult = (student) => {
        setStudent(student)
        setOpen(true)
    }
    return (
        <div>
            <div className=''>
                <div>
                    {/* <p className='title-2'>{title}</p> */}
                    <div className = 'search-div'>
                        <p className='title-2'>{title}</p>
                        <input 
                            type='text' 
                            onChange={(e)=>{setName(e.target.value);filterByName()}}
                            value={name}
                            placeholder='Enter Your Name'
                            
                            
                        />
                        <div className='center'>
                            <button className='search-btn' onClick={filterByName}>Search</button>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        searchedStudent.map((student,index)=>{
                            return (
                                <div key={index+1} className='std-list' >
                                    <div className='student-list'>
                                        <p>{student.roll}. {student.name}</p>  
                                        <button 
                                            className='p-btn m0'
                                            onClick={()=>{
                                                showResult({
                                                    ...student,
                                                    rollCode: data.rollCode,
                                                    collage: data.collage,
                                                    fm:data.fm,
                                                    pm:data.pm,
                                                    date:data.date,
                                                    pincode: data.pincode
                                                })
                                            }}
                                            
                                        >
                                            View
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {searchedStudent.length ===0 && name &&
                        <div className='student-list center'>
                            <p>No such student found</p>
                        </div>
                    }
                </div>
                
                <div>
                    {open && !isMobile && std===12 &&
                        <div className='show-modal'>
                            {
                                <ResultHtmlTemplate12th 
                                    {...student} 
                                    onClose={()=>setOpen(false)}
                                />
                            }
                        </div>
                    }
                    {open && !isMobile && std===10 &&
                        <div className='show-modal'>
                            {
                                <ResultHtmlTemplate10th 
                                    {...student} 
                                    onClose={()=>setOpen(false)}
                                />
                            }
                        </div>
                    }
                    {open && isMobile && 
                        <div className='download-modal'>
                            {
                                <div className="center">
                                    <button className='p-btn m0' onClick={()=>window.location.reload()} >
                                        <ResultPdfLink {...student}  />
                                    </button>
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ReasultSearch
