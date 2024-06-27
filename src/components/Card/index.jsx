import React, { useContext } from 'react'
import './Card.css';
import { IoTrashBinOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { MultimediaContext } from '../../Context';

const Card = () => {
    const { openModal } = useContext(MultimediaContext);

    return (
        <div className='card_container'>
            <img src="img/card-example.jpg" alt="Image of the video" />
            <div className='card_actions_container'>
                <div className='action_card'>
                    <IoTrashBinOutline />
                    <p>BORRAR</p>
                </div>
                <div className='action_card' onClick={openModal}>
                    <CiEdit />
                    <p>EDITAR</p>
                </div>
            </div>
        </div>
    )
}

export { Card }