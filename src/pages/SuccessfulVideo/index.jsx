import { Link } from 'react-router-dom';
import { MultimediaContext } from '../../Context';
import './SuccesfulVideo.css';

import React, { useContext } from 'react'

const SuccesfulVideo = () => {
  const { isSuccessful } = useContext(MultimediaContext);

  const renderSuccess = () => {
    return (
      <div id="success-box" >
        <div className="dot"></div>
        <div className="dot two"></div>
        <div className="face">
          <div className="eye"></div>
          <div className="eye right"></div>
          <div className="mouth happy"></div>
        </div>
        <div className="shadow scale"></div>
        <div className="message">
          <h1 className="alert h1">Éxito!</h1>
          <p className='p'>Video añadido correctamente</p>
        </div>
        <Link to={'/'}>
          <button className="button-box button">
            <h1 className="green h1">Volver al inicio</h1>
          </button>
        </Link>
      </div >
    )
  }

  const renderError = () => {
    return (
      <div id="error-box">
        <div className="dot"></div>
        <div className="dot two"></div>
        <div className="face2">
          <div className="eye"></div>
          <div className="eye right"></div>
          <div className="mouth sad"></div>
        </div>
        <div className="shadow move"></div>
        <div className="message">
          <h1 className="alert h1">Error!</h1>
          <p className='p'>oh no, algo ha salido mal.</p>
        </div>
        <Link to={'/'}>
          <button className="button-box button">
            <h1 className="red h1">Inténtalo de nuevo</h1>
          </button>
        </Link>
      </div>
    )
  };

  const renderView = () => isSuccessful ? renderSuccess() : renderError();

  return (
    <div className='form_result_container'>
      <div className="messageSuccess_container">
        {renderView()}
      </div>
    </div>
  )
}

export { SuccesfulVideo }