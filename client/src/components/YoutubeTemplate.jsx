import React from 'react'

function YoutubeTemplate({vid_id}) {
    return (
        <div className='youtube-width'>
            <div className='youtube-video-container'>
                <iframe 
                    src={`https://www.youtube.com/embed/${vid_id}`} 
                    title="YouTube video player" 
                    className='video'
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;allowfullscreen" 
                    allowFullScreen>
                </iframe>
            </div>
        </div>
        
    )
}

export default YoutubeTemplate
