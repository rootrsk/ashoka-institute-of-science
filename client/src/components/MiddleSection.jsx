import React from 'react'
import sir from '../assets/images/ashoka.png'
import teacher from '../assets/images/teacher.png'
import bn from '../assets/images/bn.jpg'
import Carousels from './Carousel'
import { Carousel } from 'react-responsive-carousel'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import Faculty from './Faculty'


function MiddleSection() {
    
    return (
        <div className='middle-section'>
            
            <div className='faculty-member-section'>
                <p className='slogan'>Dream It, Believe It, Build It</p>
                <div className='icon-container'>
                    <img src={teacher} alt="teacher-logo" className='w35'/>
                </div>
                
                <h2 className='title'>Our Faculty Members</h2>
                <div className='faculty-members'>
                    <Faculty 
                        image={sir}
                        name='Ashok Kumar'
                        subject="Arts and English Specialist for class 9th-12th"
                        contact='9006519721'
                        exp='11'
                        facebook='https://www.facebook.com/profile.php?id=100007234454233'
                        degree='M.Com ,MA in Education and B.Ed'
                    />
                    <Faculty
                        name='Rajesh Yadav'
                        facebook='https://www.facebook.com/profile.php?id=100016406654342'
                        image='https://i.ibb.co/X4wGDcC/27021385-209557282934492-5043723074134974106-o.jpg'
                        subject="Mathematics Specialist for class 11th-12th"
                        contact="8789918483"
                        exp='9'
                        degree='B.Sc and B.Ed in Mathematics'
                    />
                    <Faculty 
                        name='P.K Yadav'
                        subject="Physics Specialist for class 11th-12th"
                        contact='9934324837'
                        details=""
                        exp='7'
                        degree='M.Sc and B.Ed in Physics'
                        facebook='https://www.facebook.com/profile.php?id=100005174742807'
                        image='https://i.ibb.co/MPZTjw8/pky.jpg'
                    />
                    <Faculty
                        image={bn}
                        name='Banty Sir'
                        subject="Biology Specialist for class 11th-12th"
                        contact='9102706158'
                        exp='11'
                        degree='M.Sc Honrs in  Biology'
                    />
                    <Faculty
                        
                        name='Shambhu Kumar'
                        subject="Chemistry Specialist for class 11th-12th"
                        contact='970890325'
                        exp='7'
                        degree='B.tech in Computer Science'
                        facebook='https://www.facebook.com/profile.php?id=100006020973756'
                        image={'https://i.ibb.co/Y0v1wvG/20767929-727018170842209-2919513627630969580-n.jpg'}
                    />
                    <Faculty

                        name='Kumar Umesh'
                        subject="Chemistry Specialist for class 11th-12th"
                        contact='7209932757'
                        exp='5'
                        degree='M.Sc and B.Ed in Chemistry'
                        facebook='https://www.facebook.com/umesh.rahi.52'
                        image={'https://i.ibb.co/r3mxKsV/um.jpg'}
                    />
                    <Faculty
                        
                        name='Anil Kumar Yadav'
                        subject="Mathematics Specialist for class 9th-10th"
                        contact='8709314554'
                        details=""
                        exp='10'
                        degree='M.sc and B.Ed in Mathematics'
                        facebook='https://www.facebook.com/profile.php?id=100016478795494'
                        image={'https://i.ibb.co/YQYc38x/an.jpg'}
                    />
                    <Faculty
                        
                        name='Dilip Kumar'
                        subject="Physics Specialist for class 11th-12th"
                        contact='9055057487'
                        details=""
                        exp='3'
                        degree='B.tech in Mechanical'
                        facebook='https://www.facebook.com/profile.php?id=100005727015808'
                        image={'https://i.ibb.co/NLWYMhR/11953288-423805814486982-5717700067889039390-n.jpg'}
                    />
                    <Faculty
                        name='Niraj Kumar'
                        subject="Math and Science Specialist for class 9th-10th"
                        contact='9155645817'
                        exp='4'
                        degree='Bsc in Physics'
                        image={'https://i.ibb.co/YT177nh/Whats-App-Image-2021-06-27-at-17-45-16.jpg'}
                        facebook='https://www.facebook.com/pawanbhaiyadukharan.dukharan'
                    />
                    <Faculty
                        image={'https://i.ibb.co/NVxrPrs/83687598-662050914534917-8322958823585218560-n-1.jpg'}
                        name='Pawan Kumar'
                        subject="Motivation and Arts Specialist for class 9th-12th"
                        contact='6206155512'
                        details=""
                        exp='5'
                        degree='M.A in Geography'
                        facebook='https://www.facebook.com/pawanbhaiyadukharan.dukharan'
                    />
                    
                    
                </div>
                <div className='form'>
                    <h2 className='title'>Gallery</h2>
                    <div>
                        <Carousels />
                    </div>
                </div>
                <div className='form'>
                    <h2 className='title'>Subjects</h2>
                    <div className='subject-container'>
                        <Subject subject='Hindi' />
                        <Subject subject='English' />
                        <Subject subject='Science' />
                        <Subject subject='Maths' />
                        <Subject subject='Physics' />
                        <Subject subject='Chemistry' />
                        <Subject subject='Biology' />
                        <Subject subject='Geography' />
                        <Subject subject='History' />
                        <Subject subject='Civics' />
                        <Subject subject='Economics' />
                        <Subject subject='Politics' />
                        <Subject subject='Home-science' />
                    </div>
                </div>
                <div className='form'>
                    <h2 className='title'>Notifications</h2>
                    <div className='notification-container'>
                        <Carousel axis='vertical' autoPlay infiniteLoop showThumbs={false}>
                            <p className='bold'>The result of class 11th will be announced on Wednesday. Please visite on this website.</p>
                            <p>I.Sc Batch from 1:00pm to 5:00pm</p>
                            <p>I.A Batch from 9:00am to 11:00am</p>
                            <p>10th Batch (Boys Only) from 5:30am to 7:30am</p>
                            <p>10th Batch (Girls Only) from 8:30am to 10:30am</p>
                            <p>Competitive and Other classes from 2:00pm to 5:00pm</p>
                            <p className='bold'>SPECIAL BATCH FOR ISC HAS BEEN STARTED AT 1:00 pm</p>
                            <p className='bold uppercase'>Competitive classes are going from 2:00pm by experience teacher for different subjects.</p>
                            <p className='bold'>
                                Written test of diamond test will start at 11am and end at 1pm on 02-08-2021.
                            </p>

                        </Carousel>
                    </div>
                </div>
                

                <div>
                    <form className='form' onSubmit={()=>false}>
                        <h2 className='title'>Contact Us</h2>
                        <input type='text' name='name' placeholder='Name'/>
                        <input type='text' name='email' placeholder='Email' />
                        <input type='text' name='contact' placeholder='Contact'/>
                        <input type='text' name='' placeholder='Comment' />
                        <input type='submit' value='Submit' className='submit-button' />
                    </form>
                </div>

                {/* <div>
                    <form className='form' onSubmit={() => false}>
                        <h2 className='title'>About Us</h2>
                        <div>

                        </div>
                    </form>
                </div> */}
            </div>
        </div>
    )
}

export default MiddleSection


const Subject = ({subject}) =>(
    <div className='single-subject'>
        <RadioButtonCheckedIcon style={{ color:'#170f5f'}}/> <p>{subject}</p>
    </div>
)