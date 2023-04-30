import 'components/UI/table/Table.scss'
import { IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Dropdown from '../dropdown/Dropdown';

function Table(props) {
    const { 
        data = [], 
        headers = [], 
        selectable = false,
        multiSelect = false,
        attributes=[],
        className= "",
        doubleColumn,
        icons=[],
        dropdowns={}
    } = props
    console.log(props)
    const [tableData,setTableData] = useState([])
    const [isAllSelected,setIsAllSelected] = useState(false)
    const selectHandler =(row,isChecked,selectAll)=>{
        if(selectAll){
            setTableData(data?.map((item)=>({
                ...item,
                selected: isChecked
            })))
            setIsAllSelected(isChecked)
            return
        }
        tableData[row] = {
            ...tableData[row],
            selected: isChecked
        }
        setTableData(p=>[...p])
    }
    useEffect(()=>{
        setIsAllSelected(tableData.every(i=>i?.selected))
    },[tableData])
    useEffect(()=>{
        setTableData(data?.map((item)=>({
            ...item,
            selected: item?.selected ? true : false
        })))
    },[data])
    return (
        <div>
            
            <table className={`table ${className}`}>
                <thead>
                    <tr>
                        {
                            selectable && 
                            <th>
                                <input 
                                    type="checkbox" 
                                    name="" id="" 
                                    checked={isAllSelected}
                                    onChange={(e)=>selectHandler(0,e.target.checked,true)}
                                />
                            </th>
                            
                        }
                        {
                            headers?.map((header)=><th key={header}>{header}</th>)
                        }   
                        {
                            icons && <th></th>
                        } 
                    </tr>
                    
                </thead>

                <tbody>
                    {
                        tableData?.map((row,rowIdx)=>(
                            <tr key={rowIdx + 1}>
                                {
                                    selectable && 
                                    <td>
                                        <input 
                                            id="select" 
                                            name="select" 
                                            type="checkbox" 
                                            checked={row?.selected}
                                            onChange={(e)=>selectHandler(rowIdx,e.target.checked)}
                                        />
                                    </td>
                                    
                                }
                                {
                                    attributes.map((col,colIdx)=>{
                                        let text = row
                                        col.split(".").forEach(t=>{
                                            text = text[t] ?? ""
                                        })
                                        return <td key={text}>{text}</td>
                                    })
                                }
                                {
                                    icons && 
                                    <td >
                                        <div className='table-icons'>
                                            {
                                                icons.map(icon=>(
                                                    <IconButton variant='outlined' onClick={()=>console.log(icon.action)}>
                                                        {icon.icon}
                                                    </IconButton>     
                                                ))
                                            }    
                                        </div>
                                        
                                    </td>
                                }
                                {
                                    dropdowns && 
                                    <td >
                                        <div className='table-icons'>
                                            {/* {
                                                Object.entries(dropdowns??{})?.map(item=>item)
                                            }     */}
                                            <Dropdown iconButton>
                                                <Dropdown.Toggle>
                                                    HI
                                                </Dropdown.Toggle>
                                            </Dropdown>
                                        </div>
                                        
                                    </td>
                                }
                            </tr>    
                        ))
                    }
                </tbody>
                <tfoot>
                    
                </tfoot>
            </table>
        </div>
    )
}



export default Table