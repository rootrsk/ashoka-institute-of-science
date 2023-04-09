import './Input.scss'
import { useState } from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Input({label,name,type='text',error,required,pattern,onChange,value,placeholder}) {
    const [focused,setFocused] = useState("false")
    return (
        <div className='input_wrapper'>
            <label htmlFor={name}>{label} { <span style={{color:'red'}}>*</span>}</label>
            <input 
                type={type} 
                name={name}
                required={required && required}
                pattern={pattern && pattern}
                onChange={onChange}
                value={value}
                className='custom-input'
                placeholder={placeholder}
                onBlur={()=>setFocused("true")}
                focused = {focused}
            />
            <span className='success'><CheckCircleIcon /></span>
            <span className='error'><ErrorIcon /></span>
            <span className='error_message'>{error}</span>
        </div>
    )
}

export default Input