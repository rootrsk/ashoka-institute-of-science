import React from 'react'
import Input from 'components/UI/input/Input'
import Modal from 'components/UI/modal/Modal';
import Button from 'components/UI/button/Button';
import teacherInput from 'utils/data/teacherInput';
import { useState } from 'react';
import { useCreateTeacherMutation } from 'api/admin/teacherApi';

const INITIAL_STATE = {  
    userName:"",
    email:"",
}

function TeacherForm({open,onClose}){
    const [loading,setLoading] = useState(false)
    const [formData,setFormData] = useState({...INITIAL_STATE})


    const changeHandler = (e)=>{
        const value = e.target.value
        const name = e.target.name
        console.log({name,value})
        formData[name] = value
        setFormData({...formData})
    }
    const createTeacherHandler = async()=>{
        console.table(formData)
        createTeacher(formData)
    }
    // const searchChangeHandler= (name,value)=>{
    //     console.log(value?.map(obj => obj.value))
    //         formData[name] = value?.map(obj => obj.value) ?? []
    //         setFormData(p=>({...p}))
    //    }
       const [ createTeacher, { isLoading: isCreateLoading} ] = useCreateTeacherMutation()
    return (
        <div>
            {console.log(formData)}
            <Modal
                open={open}
                onClose={()=>onClose(false)}
                title="Add Teacher"
                size="md"
                footer={
                    <>
                        <Button 
                            variant='contained' 
                            // isCreateLoading={isCreateLoading}
                            onClick={createTeacherHandler}
                        >
                            Add New
                        </Button>
                    </>
                }
            >
                <form className="notification_form">
                    {
                        Object.entries(teacherInput)?.map(([k,v])=>(
                            <Input
                                key={k}
                                {...v}
                                onChange={changeHandler}
                            />    
                        ))
                    }
                </form>
            </Modal>
        </div>
    )

} 
export default TeacherForm

