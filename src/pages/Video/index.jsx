import React, { useEffect, useState } from 'react'
import './Video.css'
import { useParams } from 'react-router-dom'


const Video = () => {
    const [video, setVideo] = useState([]);
    const { id } = useParams();
    useEffect(() => {
      const getVideo = async () => {
        try{
            const fetchData = await fetch(`http://localhost:3000/videos/${id}`);
            const selectedVideo = await fetchData.json();
            setVideo(selectedVideo);
        } catch {
            console.log("Error, video not found");
        }
      }
      getVideo()
    }, [])
    console.log(video);

    return (
        <div className='video_container'>
            <h1>{video.titulo}</h1>
            <section className='section_video'>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.url}
                    title="YouTube video player"
                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </section>
        </div>
    )
}

export { Video }