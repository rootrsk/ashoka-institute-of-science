import React from 'react'
import Footer from './Footer'
import LandingSection from './LandingSection'
import MiddleSection from './MiddleSection'

function Homepage() {
    return (
        <div>
            <div className='landing-main'>
                <LandingSection />
                <MiddleSection />
            </div>
            <Footer />
        </div>
    )
}

export default Homepage
