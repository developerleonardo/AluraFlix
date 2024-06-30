import React, { useContext, useRef } from 'react'
import './NewVideo.css';
import { MultimediaContext } from '../../Context';

const NewVideo = () => {
    const { videos, setVideos } = useContext(MultimediaContext);

    const form = useRef(null);
    const createNewVideo = () => {
        const formData = new FormData(form.current);
        const data = {
            titulo: formData.get('titulo'),
            equipo: formData.get('equipo'),
            imagen: formData.get('imagen'),
            url: formData.get('url'),
            descripcion: formData.get('descripcion')
        }
        const stringifiedVideo = JSON.stringify(data)
        //send video
        const conection = fetch('http://localhost:3000/videos', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: stringifiedVideo
        });
        setVideos(stringifiedVideo)
        return conection
    }

    return (
        <div className='newVideo_container'>
            <h1>NUEVO VIDEO</h1>
            <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARAJETA</p>
            <div className='newForm_container'>
                <h2>Crear Tarjeta</h2>
                <form ref={form} className='newVideo_form'>
                    <div className='grouped_inputs_container'>
                        <div className='grouped_inputs'>
                            <label htmlFor="titulo">Título</label>
                            <input type="text" name='titulo' placeholder='Qué es Javascript?' />
                        </div>
                        <div className='grouped_inputs'>
                            <label htmlFor="equipo">Categoría</label>
                            <select name="equipo" id="equipo">
                                <option value="Front end" className='option'>Front end</option>
                                <option value="Back end" className='option'>Back end</option>
                                <option value="Innovación y gestión" className='option'>Innovación y gestión</option>
                                <option value="Inteligencia Artificial" className='option'>Inteligencia Artificial</option>
                            </select>
                        </div>
                    </div>
                    <div className='grouped_inputs_container'>
                        <div className='grouped_inputs'>
                            <label htmlFor="imagen">Imagen</label>
                            <input type="text" name='imagen' placeholder='https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true' />
                        </div>
                        <div className='grouped_inputs'>
                            <label htmlFor="url">Video</label>
                            <input type="text" name='url' placeholder='https://www.youtube.com/embed/QjOWz9avkg8' />
                        </div>
                    </div>
                    <div className='grouped_inputs'>
                        <label htmlFor="descripcion">Descripción</label>
                        <textarea name="descripcion" id="descripcion" placeholder='Escribe la descripción del video aquí'></textarea>
                    </div>
                    <div className='newVideo_buttons_container'>
                        <button className='form_button' onClick={() => createNewVideo()}>GUARDAR</button>
                        <input type="reset" className='form_button' value='LIMPIAR' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export { NewVideo }