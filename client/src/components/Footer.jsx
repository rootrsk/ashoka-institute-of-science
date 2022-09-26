import React from 'react';
// import { Contacts, Facebook, Instagram, LocationOn, Telegram, Twitter, YouTube } from ''
import { Contacts, Facebook, Instagram, LocationOn, Telegram, Twitter, YouTube } from '@mui/icons-material'
import logo3 from '../assets/images/logo6.png'
function Footer() {
    return (
        <footer >
            <div className='footer'>
                <div style={{display:'flex',justifyContent:'center',placeItems:'center',width:"330px",height:'200px'}}>
                    <img src={logo3} alt='' />
                </div>
                <div className='contact-us'>
                    <p className='title'><Contacts /> Contact Us</p>
                    <p className='paragraph'>+919006519721</p>
                    <p className='paragraph'>Ashoka Institue of Science </p>
                    <p className='paragraph'>Amarut Dobhi Gaya Bihar 824220</p>

                </div>
                <div className='contact-us'>
                    <p className='title'><LocationOn onClick={() => window.open('https://www.google.co.in/maps/place/Ashoka+Institute+Of+Science+%26+Competitive+Classes/@24.4982688,84.8846512,17z/data=!4m12!1m6!3m5!1s0x398ccbbabd0ab6c1:0x4eb72c9939df4a8!2sAshoka+Institute+Of+Science+%26+Competitive+Classes!8m2!3d24.4982374!4d84.887041!3m4!1s0x398ccbbabd0ab6c1:0x4eb72c9939df4a8!8m2!3d24.4982374!4d84.887041')} /> Location</p>
                    <p className='paragraph'>Near</p>
                    <p className='paragraph'>+2 High School Amarut</p>
                    <p className='paragraph'>Dobhi Gaya 824220 Bihar</p>
                </div>
            </div>
            
            <div className='social-media'>
                <YouTube onClick={() => window.open('https://www.youtube.com/c/AshokKumarAshokainstitute/featured')} />
                <Telegram onClick={() => window.open('tg://join?invite=+919006519721')} />
                <Twitter onClick={() => window.open('https://twitter.com/Ashokku35969524')} />
                <Facebook onClick={() => window.open('https://www.facebook.com/Ashoka-institute-of-science-569051593576552')}/>
                <Instagram onClick={() => window.open('https://www.instagram.com/ashoka_sir_1/')} />
            </div>
            
            <div>
                <p className='paragraph'>© All Rights Reserved @ 2021</p>
            </div>
        </footer>
    )
}

export default Footer
