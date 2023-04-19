import axios from 'axios';
import React, { useEffect } from 'react'
import Input from 'components/UI/input/Input'
import Modal from 'components/UI/modal/Modal';
import Button from 'components/UI/button/Button';
import batchInput from 'utils/data/batchInput';
import { useState } from 'react';
import SearchSelect from 'components/UI/input/SearchSelect';
import { useGetOptionDataQuery, useCreateBatchMutation } from 'api/admin/batchApi';

const INITIAL_STATE = {
    title:"",
    monthly_fee: 0,
    start_date:"",
    end_date:"",
    start_time:"",
    end_time:"",
    standard:"",
    teachers:[],
    subjects:[]
}

function AddBatch({open,onClose}) {
    const [loading,setLoading] = useState(false)
    const [formData,setFormData] = useState({...INITIAL_STATE});
    const [optionData,setOptionData] = useState({teachers: [],subjects:[]})

    const changeHandler = (e)=>{
        const value = e.target.value
        const name = e.target.name
        console.log({name,value})
        formData[name] = value
        setFormData({...formData})
    }

    const createBatchHandler = async()=>{
        console.log(formData)
        createBatch(formData)
    }
    const searchChangeHandler= (name,value)=>{
        console.log(value?.map(obj => obj.value))
        formData[name] = value?.map(obj => obj.value) ?? []
        setFormData(p=>({...p}))
    }
    const{ data: optionDataResponse, isLoading: isOptionsLoading}= useGetOptionDataQuery({
        teachers:true,subjects:true
    })

    const [ createBatch, { isLoading: isCreateLoading} ] = useCreateBatchMutation()
    useEffect(()=>{
        setOptionData({
            teachers:optionDataResponse?.optionsData?.teachers?.
            map(teacher=>({label:teacher.full_name,value:teacher._id})),
            subjects:optionDataResponse?.optionsData?.subjects?.
            map(subject=>({label:subject.title,value:subject._id}))
        })
    },[optionDataResponse])
    return (
        <div>
            {console.log(optionDataResponse)}
            <Modal
                open={open}
                onClose={()=>onClose(false)}
                title="Add Batch"
                size="md"
                footer={
                    <>
                        <Button 
                            variant='contained' 
                            // isCreateLoading={isCreateLoading}
                            onClick={createBatchHandler}
                        >
                            Add New
                        </Button>
                    </>
                }
            >
                <form className="notification_form">
                    {
                        Object.entries(batchInput)?.map(([k,v])=>(
                            <Input
                                key={k}
                                {...v}
                                onChange={changeHandler}
                            />    
                        ))
                    }
                    {/* <Input
                       {...batchInput.title }
                       onChange={changeHandler}
                    />
                    <Input
                
                       {...batchInput.monthly_fee }
                       onChange={changeHandler}
                    />
                     <Input
                       {...batchInput.start_date }
                       onChange={changeHandler}
                    />
                     <Input
                       {...batchInput.end_date }
                       onChange={changeHandler}
                    />
                     <Input
                       {...batchInput.standard }
                       onChange={changeHandler}
                    />
                     <Input
                       {...batchInput.start_time }
                       onChange={changeHandler}
                    />
                     <Input
                       {...batchInput.end_time }
                       onChange={changeHandler}
                    /> */
                    }
                    <SearchSelect
                        label="Subjects"
                        options={optionData.subjects}
                        isMulti
                        onChange={(e)=>searchChangeHandler("subjects",e)}
                    />

                    <SearchSelect
                        label="Teachers"
                        options={optionData.teachers}
                        isMulti
                        onChange={(e)=>searchChangeHandler("teachers",e)}
                    />
                </form>
            </Modal>
        </div>
    )
}

export default AddBatch