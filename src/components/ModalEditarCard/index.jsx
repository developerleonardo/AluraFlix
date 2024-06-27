import React, { useContext } from 'react'
import { IoMdClose } from "react-icons/io";
import { MultimediaContext } from '../../Context';
import './ModalEditarCard.css';

const ModalEditarCard = () => {
    const {
        isModalOpen,
        closeModal
    } = useContext(MultimediaContext);

    return (
        <>
            {isModalOpen &&
                <div className='overlay'>
                    <dialog className='modal' >
                        <IoMdClose onClick={closeModal} />
                        <h3>EDITAR CARD</h3>
                        <div className='form_container'>
                            <form method='dialog' className='edit_card_form'>
                                <div className='input_container'>
                                    <label htmlFor="name">Título</label>
                                    <input type="text" name='name' placeholder='Qué es Javascript?' />
                                </div>
                                <div className='input_container'>
                                    <label htmlFor="category">Categoría</label>
                                    <select name="category" id="category">
                                        <option value="frontend" className='option'>Front end</option>
                                        <option value="backend" className='option'>Back end</option>
                                        <option value="innovacion" className='option'>Innovación y gestión</option>
                                    </select>
                                </div>
                                <div className='input_container'>
                                    <label htmlFor="image">Imagen</label>
                                    <input type="text" name='image' placeholder='https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true' />
                                </div>
                                <div className='input_container'>
                                    <label htmlFor="video">Video</label>
                                    <input type="text" name='video' placeholder='https://www.youtube.com/embed/QjOWz9avkg8' />
                                </div>
                                <div className='input_container'>
                                    <label htmlFor="description">Descripción</label>
                                    <textarea name="description" id="description" placeholder='Escribe la descripción del video aquí'></textarea>
                                </div>
                                <div className='buttons_form_container'>
                                    <button formMethod='dialog' className='form_button'>GUARDAR</button>
                                    <input type="reset" className='form_button' value='LIMPIAR' />
                                </div>
                            </form>
                        </div>
                    </dialog>
                </div>
            }
        </>
    )
}

export { ModalEditarCard }