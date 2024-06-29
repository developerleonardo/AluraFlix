import React from 'react'
import { useContext } from 'react';
import { MultimediaContext } from '../../Context';
import { IoIosCloseCircleOutline } from "react-icons/io";
import './VideoDetail.css';

const VideoDetail = () => {
    const { videos, isAsideOpen, closeVideoDetail } = useContext(MultimediaContext);
    return (
        <>
            {
                isAsideOpen &&
                <aside className='video_detail'>
                    <div className='detail'>
                        <h2>Detalle</h2>
                        <IoIosCloseCircleOutline onClick={closeVideoDetail} />
                    </div>
                    <figure className='video_image'>
                        <img src='https://purr.objects-us-east-1.dream.io/i/OoNx6.jpg' alt="Detalle del videos" />
                    </figure>
                    <p className='video_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi exercitationem dolores excepturi eum maiores voluptatem natus aspernatur officia placeat, error asperiores harum veniam commodi odio deleniti neque minima ad non?</p>
                    <button className='watch_video'>Ver Video</button>
                </aside>
            }
        </>

    )
}

export { VideoDetail }