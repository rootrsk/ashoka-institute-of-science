import React,{useState} from 'react'
import writeFile from 'write-file-p'
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import logo from '../assets/images/template2.png'
import ResultTemplate12 from './ResultTemplate12';
import ResultHtmlTemplate12th from './ResultHtmlTemplate12th';
import rs from './rs.js'
import axios from 'axios'

function Demo2() {
  const [students, setStudents] = useState(rs)
    const create = async() =>{
        const response = await axios({
            url: 'http://localhost:3001/user/create',
            method:'post',
            data: student
        })
        console.log(response)
        setStudent({
            name:'',
            fname:'',
            mname:'',
            roll:'',
            english: {
                subject: 'English',
                marks: ''
            },
            hindi: {
                subject: 'Hindi',
                marks: ''
            },
            math: {
                subject: 'Mathematics',
                marks:''
            },
            science: {
                subject: 'Science',
                pr: 18,
                tm: ''
            },
            social_science: {
                subject: 'Social Science',
                pr: 18,
                tm: ''
            },
            sanskrit: {
                subject: 'Sanskrit',
                marks:''
            }
        })
    }
    
    const [student,setStudent] = useState({
        name: '',
            fname: '',
            mname: '',
            roll: '',
            english: {
                subject: 'English',
                marks: ''
            },
            hindi: {
                subject: 'Hindi',
                marks: ''
            },
            math: {
                subject: 'Mathematics',
                marks:''
            },
            science: {
                subject: 'Science',
                pr: 18,
                tm: ''
            },
            social_science: {
                subject: 'Social Science',
                pr: 18,
                tm: ''
            },
            sanskrit: {
                subject: 'Sanskrit',
                marks:''
            }
        
    })
    return (
        <div className='demo'>
            <div>
                <input 
                    type="text" 
                    placeholder = 'Name'
                    value={student.name}
                    onChange={(e)=>setStudent({...student,name:e.target.value})}
                />
                 <input 
                    type="text" 
                    placeholder = 'fname'
                    value={student.fname}
                    onChange={(e)=>setStudent({...student,fname:e.target.value})}
                />
                 <input 
                    type="Number" 
                    placeholder = 'Roll'
                    value={student.roll}
                    onChange={(e)=>setStudent({...student,roll:e.target.value})}
                />
                <input 
                    type="Number" 
                    placeholder = 'English.Marks'
                    value={student.english.marks}
                    onChange={(e)=>setStudent({...student,english:{...student.english,marks:e.target.value}})}
                />
                <input 
                    type="Number" 
                    placeholder = 'Hindi.Marks'
                    value={student.hindi.marks}
                    onChange={(e)=>setStudent({...student,hindi:{...student.hindi,marks:e.target.value}})}
                />
                <input 
                    type="Number" 
                    placeholder = 'Math.Marks'
                    value={student.math.marks}
                    onChange={(e)=>setStudent({...student,math:{...student.math,marks:e.target.value}})}
                />
                <input 
                    type="Number" 
                    placeholder = 'Science.Marks'
                    value={student.science.tm}
                    onChange={(e)=>setStudent({...student,science:{...student.science,tm:e.target.value}})}
                />
                <input 
                    type="Number" 
                    placeholder = 'Social Science.Marks'
                    value={student.social_science.tm}
                    onChange={(e)=>setStudent({...student,social_science:{...student.social_science,tm:e.target.value}})}
                />
                
                <input 
                    type="Number" 
                    placeholder = 'Sanskrit.Marks'
                    value={student.sanskrit.marks}
                    onChange={(e)=>setStudent({...student,sanskrit:{...student.sanskrit,marks:e.target.value}})}
                />
                <button 
                    onClick={create}
                >Submit</button>
            </div>
        </div>
        
    )
}

export default Demo2