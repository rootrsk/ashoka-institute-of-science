import React from 'react'
import ashokasir from '../assets/images/ashoka.png'
import dna from '../assets/images/dna.png'
import pi from '../assets/images/pi.png'
import flask from '../assets/images/flask.png'
function LandingSection() {
    return (
        <div className='landing-section'>
            {/* <Header /> */}
            <div className='title'>
                <h1> <span className='grey'> Ashoka Institute of Science</span> </h1>
                
            </div>
            <div className="sub-text">
                <p>
                    We will change the society with the weapon of education and your co-operation.
                </p>
            </div>
            
            <div className="icon-section">
                <img src={dna} alt='ashoka sir' className='icon-size abs icon1'  />
                <img src={pi} alt='ashoka sir' className='icon-size abs icon2' />
                <img src={flask} alt='ashoka sir' className='icon-size abs icon3' />
            </div>

            <img src={ashokasir} alt='ashoka sir' className='sir-image' />
            
        </div>
    )
}

export default LandingSection
