import React from 'react'
import './NewVideo.css';

const NewVideo = () => {
    return (
        <div className='newVideo_container'>
            <h1>NUEVO VIDEO</h1>
            <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARAJETA</p>
            <div className='newForm_container'>
                <h2>Crear Tarjeta</h2>
                <form className='newVideo_form'>
                    <div className='grouped_inputs_container'>
                        <div className='grouped_inputs'>
                            <label htmlFor="name">Título</label>
                            <input type="text" name='name' placeholder='Qué es Javascript?' />
                        </div>
                        <div className='grouped_inputs'>
                            <label htmlFor="category">Categoría</label>
                            <select name="category" id="category">
                                <option value="frontend" className='option'>Front end</option>
                                <option value="backend" className='option'>Back end</option>
                                <option value="innovacion" className='option'>Innovación y gestión</option>
                            </select>
                        </div>
                    </div>
                    <div className='grouped_inputs_container'>
                        <div className='grouped_inputs'>
                            <label htmlFor="image">Imagen</label>
                            <input type="text" name='image' placeholder='https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true' />
                        </div>
                        <div className='grouped_inputs'>
                            <label htmlFor="video">Video</label>
                            <input type="text" name='video' placeholder='https://www.youtube.com/embed/QjOWz9avkg8' />
                        </div>
                    </div>
                    <div className='grouped_inputs'>
                        <label htmlFor="description">Descripción</label>
                        <textarea name="description" id="description" placeholder='Escribe la descripción del video aquí'></textarea>
                    </div>
                    <div className='newVideo_buttons_container'>
                        <button className='form_button'>GUARDAR</button>
                        <input type="reset" className='form_button' value='LIMPIAR' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export { NewVideo }