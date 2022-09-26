import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo5.png'
function Header() {
    return (
        <div className='header-flex'>
            <div>
                <Link to='/'><img src={'https://i.ibb.co/pzwqK4t/Group-13.png'} alt='logo' /></Link> 
            </div>
            <div className='header-flex'>
                <p className='paragraph'><Link to='videos' >Videos</Link></p>
                <p className='paragraph' style={{marginLeft:'10px'}}><Link to='/result' >Results</Link></p>
                <p className='paragraph' style={{marginLeft:'10px'}}><Link to='/answer-keys' >Answers</Link></p>
            </div>
        </div>
    )
}

export default Header
