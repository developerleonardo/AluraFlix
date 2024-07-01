import React, { useContext, useEffect, useRef, useState } from 'react'
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

    //Create a state object that holds the form values
    const [formData, setFormData] = useState({
        titulo: "",
        equipo: "",
        imagen: "",
        url: "",
        descripcion: ""
    });
    // assign the values of the video to each input field of the modal
    useEffect(() => {
        if (currentVideoId) {
            const currentVideo = videos.find(video => video.id === currentVideoId);
            if (currentVideo) {
                setFormData({
                    titulo: currentVideo.titulo,
                    equipo: currentVideo.equipo,
                    imagen: currentVideo.imagen,
                    url: currentVideo.url,
                    descripcion: currentVideo.descripcion
                });
            }
        }
    }, [currentVideoId, videos])
    // Handle the onChange event of each input. Only the input modified changes its value on the form
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const updateCurrentVideo = async () => {
        const stringifiedVideo = JSON.stringify(formData);
        await updateVideo(currentVideoId, stringifiedVideo);
        closeModal();
    }

    const currentVideo = videos.find(video => video.id === currentVideoId)

    return (
        <>
            {isModalOpen && currentVideo &&
                <div className='overlay'>
                    <dialog className='modal'>
                        <IoMdClose onClick={closeModal} />
                        <h3>EDITAR CARD</h3>
                        <div className='form_container'>
                            <form className='edit_card_form'>
                                <div className='input_container'>
                                    <label htmlFor="titulo">Título</label>
                                    <input
                                        type="text"
                                        name='titulo'
                                        value={formData.titulo}
                                        onChange={handleChange}
                                        placeholder='Qué es Javascript?'
                                    />
                                </div>
                                <div className='input_container'>
                                    <label htmlFor="equipo">Equipo</label>
                                    <select
                                        name="equipo"
                                        id="equipo"
                                        value={formData.equipo}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" disabled defaultValue="" className='option'>Seleccione una categoría</option>
                                        <option value="Front end" className='option'>Front end</option>
                                        <option value="Back end" className='option'>Back end</option>
                                        <option value="Innovación y gestión" className='option'>Innovación y gestión</option>
                                        <option value="Inteligencia Artificial" className='option'>Inteligencia Artificial</option>
                                    </select>
                                </div>
                                <div className='input_container'>
                                    <label htmlFor="imagen">Imagen</label>
                                    <input
                                        type="text"
                                        name='imagen'
                                        value={formData.imagen}
                                        onChange={handleChange}
                                        placeholder='https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true'
                                    />
                                </div>
                                <div className='input_container'>
                                    <label htmlFor="url">Video</label>
                                    <input
                                        type="text"
                                        name='url'
                                        value={formData.url}
                                        onChange={handleChange}
                                        placeholder='https://www.youtube.com/embed/QjOWz9avkg8'
                                    />
                                </div>
                                <div className='input_container'>
                                    <label htmlFor="descripcion">Descripción</label>
                                    <textarea
                                        name="descripcion"
                                        id="descripcion"
                                        value={formData.descripcion}
                                        onChange={handleChange}
                                        placeholder='Escribe la descripción del video aquí'
                                    ></textarea>
                                </div>
                                <div className='buttons_form_container'>
                                    <button type='button' className='form_button' onClick={updateCurrentVideo}>GUARDAR</button>
                                    <input type="reset" className='form_button' value='LIMPIAR' />
                                </div>
                            </form>
                        </div>
                    </dialog>
                </div>
            }
        </>
    );
}

export { ModalEditarCard }