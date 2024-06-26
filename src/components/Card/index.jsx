import React from 'react'
import './Card.css';
import { IoTrashBinOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";

const Card = () => {
    return (
        <div className='card_container'>
            <img src="img/card-example.jpg" alt="Image of the video" />
            <div className='card_actions_container'>
                <div className='action_card'>
                    <IoTrashBinOutline />
                    <p>BORRAR</p>
                </div>
                <div className='action_card'>
                    <CiEdit />
                    <p>EDITAR</p>
                </div>
            </div>
        </div>
    )
}

export { Card }