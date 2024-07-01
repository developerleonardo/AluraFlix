import React, { useContext, useRef } from 'react'
import { IoMdClose } from "react-icons/io";
import { MultimediaContext } from '../../Context';
import './ModalEditarCard.css';

const ModalEditarCard = () => {
    const {
        isModalOpen,
        closeModal,
        updateVideo,
        videos,
        currentVideoId
    } = useContext(MultimediaContext);
    const form = useRef(null)

    const updateCurrentVideo = async () => {
        const formData = new FormData(form.current);
        const data = {
            titulo: formData.get('titulo'),
            equipo: formData.get('equipo'),
            imagen: formData.get('imagen'),
            url: formData.get('url'),
            descripcion: formData.get('descripcion')
        }
        const stringifiedVideo = JSON.stringify(data);
        updateVideo(currentVideoId, stringifiedVideo);
        closeModal();
    }

    const currentVideo = videos.find(video => video.id === currentVideoId)

    return (
        <>
            {isModalOpen && currentVideo &&
                <div className='overlay'>
                    <dialog className='modal' >
                        <IoMdClose onClick={closeModal} />
                        <h3>EDITAR CARD</h3>
                        <div className='form_container'>
                            <form method='dialog' className='edit_card_form' ref={form}>
                                <div className='input_container'>
                                    <label htmlFor="titulo">Título</label>
                                    <input type="text" name='titulo' placeholder='Qué es Javascript?' />
                                </div>
                                <div className='input_container'>
                                    <label htmlFor="equipo">Categoría</label>
                                    <select name="equipo" id="equipo">
                                        <option value="Front end" className='option'>Front end</option>
                                        <option value="Back end" className='option'>Back end</option>
                                        <option value="Innovación y gestión" className='option'>Innovación y gestión</option>
                                        <option value="Inteligencia Artificial" className='option'>Inteligencia Artificial</option>
                                    </select>
                                </div>
                                <div className='input_container'>
                                    <label htmlFor="imagen">Imagen</label>
                                    <input type="text" name='imagen' placeholder='https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true' />
                                </div>
                                <div className='input_container'>
                                    <label htmlFor="url">Video</label>
                                    <input type="text" name='url' placeholder='https://www.youtube.com/embed/QjOWz9avkg8' />
                                </div>
                                <div className='input_container'>
                                    <label htmlFor="descripcion">Descripción</label>
                                    <textarea name="descripcion" id="descripcion" placeholder='Escribe la descripción del video aquí'></textarea>
                                </div>
                                <div className='buttons_form_container'>
                                    <button formMethod='dialog' className='form_button' onClick={updateCurrentVideo}>GUARDAR</button>
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