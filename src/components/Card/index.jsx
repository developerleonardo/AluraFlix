import React, { useContext } from 'react'
import './Card.css';
import { IoTrashBinOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { MultimediaContext } from '../../Context';

const Card = ({ title, image, deleteVideo, id }) => {
    const { openModal, openVideoDetail, updateVideo } = useContext(MultimediaContext);

    return (
        <div className='card_container'>
            <img src={image} alt="Image of the video" onClick={openVideoDetail} />
            <div className='card_info'>
                <div className='card_title'>
                    <p >{title}</p>
                </div>
                <div className='card_actions_container'>
                    <div className='action_card' onClick={() => deleteVideo(id)}>
                        <IoTrashBinOutline />
                        <p>BORRAR</p>
                    </div>
                    <div className='action_card' onClick={openModal}>
                        <CiEdit />
                        <p>EDITAR</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Card }