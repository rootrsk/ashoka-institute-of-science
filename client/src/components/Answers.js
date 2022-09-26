import React from 'react'
function Answers({history}) {
    return (
        <div className='result-page'>
            <div className=''>
                {/* <div className='container-90'>
                    <p className='title-2'>10th Science Answer Key</p>
                    <div className = 'result-template' >
                        <iframe className='pdf-frame'
                            title='10th Science'
                            src = "https://drive.google.com/file/d/1mJTs7-tWj1irtDDUm5ffTJ76_23yEpaf/preview"
                            allow = "autoplay" > 
                        </iframe>
                    </div>
                </div> */}
                <div className='container-90'>
                    <p className='title-2'>10th Math Answer Key</p>
                    <div className = 'result-template' >
                        <iframe className='pdf-frame'
                            title='10th Math'
                            src = "https://drive.google.com/file/d/1m33DV_EnWOltYjSH1w5vcZbisRf36fPG/preview"
                            allow = "autoplay" > 
                        </iframe>
                    </div>
                </div>
                <div className='container-90'>
                    <p className='title-2'>Diamond Test Answer Key</p>
                    <div className = 'result-template' >
                        <iframe className='pdf-frame'
                            title='Diamond Test Keys'
                            src = "https://drive.google.com/file/d/1RhNVFz9hAI6XE7LiRlFp2luDEvjhid2U/preview"
                            allow = "autoplay" > 
                        </iframe>
                    </div>
                   
                </div>
                
                <div className='container-90'>
                    <p className='title-2'>Diamond Test Result</p>
                    <div className='coming-soon'>
                        <p className='title'>Result has been uploaded</p>
                        <div className="center">
                            <button className="p-btn" onClick={()=>history.push('/result')}>Check Now</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Answers