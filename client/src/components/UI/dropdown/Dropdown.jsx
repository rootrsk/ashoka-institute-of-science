import { IconButton } from '@mui/material'
import 'components/UI/dropdown/Dropdown.scss'
import React, { useEffect, useRef, useState } from 'react'

function Dropdown(props) {
    const { iconButton } = props

    const buttonRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    function toggleDropdown() {
      setIsOpen(!isOpen);
    }

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => {
          document.removeEventListener('click', handleDocumentClick);
        }
    },[])

    const handleDocumentClick = (e) => {
        if (buttonRef.current && !buttonRef.current.contains(e.target)) {
          setIsOpen(false);
        }
    }
    

    return (
        <div className="dropdown">
            {
                iconButton && 
                <IconButton onClick={toggleDropdown} ref={buttonRef}>
                    Dropdown Button
                </IconButton>
            }
            {
                isOpen && 
                <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                </ul>
            }

            {/* {props.children} */}
        </div>
    )
}

const Toggle = ({children})=>{
    return (
        <IconButton>
            Hello
        </IconButton>    
    )
}

Dropdown.Toggle = Toggle

export default Dropdown
