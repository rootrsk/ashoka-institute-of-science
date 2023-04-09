import React from 'react'
import './Select.scss'
function Select({label,name,error,required,pattern,onChange,value,placeholder,options=[]}) {
    return (
        <div className='select_wrapper'>
            <label htmlFor={name}>{label} {required &&  <span style={{color:'red'}}>*</span>}</label>
            <select name={name} onChange={onChange} defaultValue={value}>
                {
                    Array.isArray(options) ? 

                    options?.map((value,idx)=>(<option value={value} key={idx+1}>{value}</option>)):

                    Object.entries(options)?.map(([k,v],idx)=>(<option value={v} key={idx+1}>{k}</option>))
                }
            </select>   

        </div>
    )
}

export default Select