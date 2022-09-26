import React, { useState } from 'react'
import { useEffect } from 'react'
import boysdiamondMarks from '../assets/marks/diamond_test'
import girlsDiamondMarks from '../assets/marks/diamond_test_girls'
import result11thClasstest from '../assets/marks/11thFirstClassTest'
import finalResult12th22 from '../assets/marks/finalResult12th22'
import finalResult10th22 from '../assets/marks/finalResult10th22'
import ReasultSearch from './ReasultSearch'

function Result() {
    const [selectedBoys,setSelectedBoys] =useState([])
    const [selectedGirls, setSelectedGirls] = useState([])
    const [selected,setSelected] = useState(false)
    
    useEffect(()=>{
    },[])
    return (
        <div className='result-page'>
            <ReasultSearch 
                data={finalResult12th22}
                title={"Intermediate Annual Test 2022"}
                std={12}
            />
            <ReasultSearch 
                data={finalResult10th22}
                title={"Matric Annual Test 2022"}
                std={10}  
            />
        </div>
    )
}

export default Result
