import React from 'react'
import { Button as MUIButton, CircularProgress} from "@mui/material"
import { InfinitySpin, LineWave } from 'react-loader-spinner'
function Button(props) {
    const { children,isLoading,endIcon, ...othProps} = props
    return (
        <MUIButton
            {...othProps}
            endIcon={
                isLoading ?
                <CircularProgress className='loading-button-progres' />:
                endIcon
            }
            className="custom-button"
            disabled={isLoading}
        >
           {children}
        </MUIButton>
    )
}

export default Button