import React, { useState } from 'react'
import Input from '../../UI/input/Input'
import Select from '../../UI/input/Select'
import inputFields from './inputFiels'
function AddExam() {
    const [examInputFields,setExamInputFields] = useState(inputFields)
    const onInputChange = ({target:{name,value}})=>{
        console.log(name,value)
        examInputFields[name].value = value
        setExamInputFields(p=>({...p}))
    }
    
    return (
        <div className='add_exam'>
            <Input
                {...examInputFields.title}
                onChange={onInputChange}
            />
            <Select
                {...examInputFields.standard}
                onChange={onInputChange}
            />
            {['11th','12th'].includes(examInputFields?.standard?.value) &&
                <Select
                    {...examInputFields.stream}
                    onChange={onInputChange}
                />
            }
            
            <Select
                {...examInputFields.status}
                onChange={onInputChange}
            />
            <Input
                {...examInputFields.publish_time}
                type="datetime-local"
                onChange={onInputChange}
            />
            {console.log(examInputFields)}
        </div>
    )
}

export default AddExam