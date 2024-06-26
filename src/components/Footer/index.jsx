import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='social_media'>
                <a href="https://github.com/developerleonardo"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/leonardo-salazar-serna/"><FaLinkedin /></a>
            </div>
            <p className='footer_title'>ALURAFLIX</p>
            <div className='author'>
                <p>Ralizado por:</p>
                <a href="https://www.linkedin.com/in/leonardo-salazar-serna/">Leonardo Salazar</a>
            </div>
        </footer>
    )
}

export { Footer }