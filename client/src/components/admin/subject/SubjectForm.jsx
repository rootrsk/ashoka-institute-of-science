import React from 'react'
import Input from 'components/UI/input/Input'
import Modal from 'components/UI/modal/Modal';
import Button from 'components/UI/button/Button';
import { useState } from 'react';
import subjectInput from 'utils/data/subjectInput';
import { useCreateSubjectMutation } from 'api/admin/subjectApi';
import Select from 'components/UI/input/Select';
import { useEffect } from 'react';

const INITIAL_STATE = {
    title:"",
    pass_marks:"",
    full_marks:"",
    has_practical:"",
    standard:"",
}


function SubjectForm({open,onClose}){
    const [loading,setLoading] = useState(false)
    const [formData,setFormData] = useState({...INITIAL_STATE})
    

const changeHandler = (e)=>{
    const value = e.target.value
    const name = e.target.name
    console.log({name,value})
    formData[name] = value
    setFormData({...formData})
}

const createSubjectHandler =async()=>{
    console.table(formData)
    createSubject(formData)
}
const searchChangeHandler= (name,value)=>{
    console.log(value?.map(obj => obj.value))
        formData[name] = value?.map(obj => obj.value) ?? []
        setFormData(p=>({...p}))
   }
   const [ createSubject, { isLoading: isCreateLoading} ] = useCreateSubjectMutation()
//    useEffect(()=>{

//    },[optionDataResponse])
return (
    <div>
        {/* {console.log(optionDataResponse)} */}
        <Modal
            open={open}
            onClose={()=>onClose(false)}
            title="Add Subject"
            size="md"
            footer={
                <>
                    <Button 
                        variant='contained' 
                        // isCreateLoading={isCreateLoading}
                        onClick={createSubjectHandler}
                    >
                        Add New
                    </Button>
                </>
            }
        >
            <form className="notification_form">
                {
                    Object.entries(subjectInput)?.map(([k,v])=>(
                        <Input
                            key={k}
                            {...v}
                            onChange={changeHandler}
                        />    
                    ))
                }

                <Select
                    name="has_practical"
                    label="Do you have practical?"
                    options={["Yes","No"]}
                    onChange={changeHandler}
               />
                {/* <SearchSelect
                    label="Teachers"
                    options={[{label:"mam",value:1},{label:"sir",value:2}]}
                    isMulti
                    onChange={(e)=>searchChangeHandler("teachers",e)}
               /> */}
            </form>
        </Modal>
    </div>
)

}
export default SubjectForm