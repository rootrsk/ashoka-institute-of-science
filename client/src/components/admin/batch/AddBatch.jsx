import React from 'react'
import Input from 'components/UI/input/Input'
import Modal from 'components/UI/modal/Modal';
import Button from 'components/UI/button/Button';
import batchInput from 'utils/data/batchInput';
import { useState } from 'react';

const INITIAL_STATE = {
    title:"",
    monthly_fee: 0,
    start_date:"",
    end_date:"",
    start_time:"",
    end_time:"",
    standard:""
}

function AddBatch({open,onClose}) {
    const [loading,setLoading] = useState(false)
    const [formData,setFormData] = useState({...INITIAL_STATE})
    const changeHandler = (e)=>{
        const value = e.target.value
        const name = e.target.name
        console.log({name,value})
        formData[name] = value
        setFormData({...formData})
    }
    const createBatchHandler = async()=>{
        console.table(formData)
    }
   
   
    return (
        <div>
            {console.log(formData)}
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
                    <Input
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
                    />
                </form>
            </Modal>
        </div>
    )
}

export default AddBatch