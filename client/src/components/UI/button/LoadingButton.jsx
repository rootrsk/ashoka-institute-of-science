import React from 'react'
import './Button.scss'
import { InfinitySpin, LineWave } from 'react-loader-spinner'
function LoadingButton() {
    return (
        <button className='loading-button'>
            <InfinitySpin
                height="20"
                width="80"
                color="#fff"
            />
        </button>
    )
}

export default LoadingButton