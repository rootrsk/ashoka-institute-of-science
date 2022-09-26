import React,{useState} from 'react'
import writeFile from 'write-file-p'
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import logo from '../assets/images/template2.png'
import ResultTemplate12 from './ResultTemplate12';
import ResultHtmlTemplate12th from './ResultHtmlTemplate12th';
import rs from './rs.js'
import axios from 'axios'
function Demo({name,roll,rollCode,total,pass,your}) {
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
            c1:{
                subject:'English',
                marks:''
            },
            c2: {
                subject: 'Hindi',
                marks: ''
            },
            o1:{
                subject: 'Physics',
                pr:28,
                tm:''
            },
            o2: {
                subject: 'Chemistry',
                pr: 28,
                tm: ''
            },
            o3: {
                subject: 'Mathematics',
                tm: ''
            },
            a1: {
                subject: 'Biology',
                pr: 28,
                tm: ''
            }
        })
    }
    
    const [student,setStudent] = useState({
        name: '',
            fname: '',
            mname: '',
            roll: '',
            c1: {
                subject: 'English',
                marks: ''
            },
            c2: {
                subject: 'Hindi',
                marks: ''
            },
            o1: {
                subject: 'Physics',
                pr: 28,
                tm: ''
            },
            o2: {
                subject: 'Chemistry',
                pr: 28,
                tm: ''
            },
            o3: {
                subject: 'Mathematics',
                tm: ''
            },
            a1: {
                subject: 'Biology',
                pr: 28,
                tm: ''
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
                    placeholder = 'E.Marks'
                    value={student.c1.marks}
                    onChange={(e)=>setStudent({...student,c1:{...student.c1,marks:e.target.value}})}
                />
                <input 
                    type="Number" 
                    placeholder = 'H.Marks'
                    value={student.c2.marks}
                    onChange={(e)=>setStudent({...student,c2:{...student.c2,marks:e.target.value}})}
                />
                <input 
                    type="Number" 
                    placeholder = 'P.Marks'
                    value={student.o1.tm}
                    onChange={(e)=>setStudent({...student,o1:{...student.o1,tm:e.target.value}})}
                />
                <input 
                    type="Number" 
                    placeholder = 'C.Marks'
                    value={student.o2.tm}
                    onChange={(e)=>setStudent({...student,o2:{...student.o2,tm:e.target.value}})}
                />
                <input 
                    type="Number" 
                    placeholder = 'M.Marks'
                    value={student.o3.tm}
                    onChange={(e)=>setStudent({...student,o3:{...student.o3,tm:e.target.value}})}
                />
                
                <input 
                    type="Number" 
                    placeholder = 'B.Marks'
                    value={student.a1.tm}
                    onChange={(e)=>setStudent({...student,a1:{...student.a1,tm:e.target.value}})}
                />
                <button 
                    onClick={create}
                >Submit</button>
            </div>
        </div>
        
    )
}

export default Demo

const styles = StyleSheet.create({
    doc:{
        width:'80%',
        maxWidth:700,
        height:'80vh',
        margin:'auto',
        alignItems:'center',
        alignSelf:'center'
    },
    page: {
        flexDirection: 'coloum',
        backgroundColor: 'transparent',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    title:{
        color:'#ffffff',
        fontWeight:900,
    },
    image:{
        width:'300px',
        position:'absolute',
        top:'70',
        left:'0',
        right:'0',
        margin: 'auto',
        // zIndex:'-1',
        alignItems:'center',
        justifyContent:'center',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width:'100%',
        height:'100%',
        opacity: 1,
        zIndex:-3,
    },
    name:{
        color:"#ffffff",
        position:'absolute',
        top:160,
        left:260,
        fontSize: 14,
        fontWeight:'bold'
    },
    roll:{
        color:"#ffffff",
        position:'absolute',
        top:195,
        left: 260,
        fontSize: 14
    },
    rollCode:{
        color:"#ffffff",
        position:'absolute',
        top:230,
        left:260,
        fontSize: 14
    },
    total:{
        color:"#ffffff",
        position:'absolute',
        top:265,
        left:260,
        fontSize: 14
    },
    pass:{
        color:"#ffffff",
        position:'absolute',
        top:300,
        left:260,
        fontSize: 14
    },
    your:{
        color:"#ffffff",
        position:'absolute',
        top:335,
        left:260,
        fontSize: 14
    },
    date:{
        color:"#ffffff",
        position:'absolute',
        top:15,
        left:50,
        fontSize:14
    }
});