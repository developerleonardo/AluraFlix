import React, { createContext, useEffect, useState } from 'react';

const MultimediaContext = createContext();

const MultimediaContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videos, setVideos] = useState([]);
  const [teams, setTeams] = useState([
    "Front end", "Back end", "Innovación y gestión", "Inteligencia Artificial"
  ]);
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const openVideoDetail = () => {
    setIsAsideOpen(true);
  };
  const closeVideoDetail = () => {
    setIsAsideOpen(false);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }
  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const conection = await fetch('http://localhost:3000/videos');
        const data = await conection.json();
        setVideos(data);
      } catch {
        console.log("Ocurrio un error");
      }
    }
    fetchData()
  }, [])

  return (
    <MultimediaContext.Provider value={{
      isModalOpen,
      closeModal,
      openModal,
      videos,
      teams,
      isAsideOpen,
      openVideoDetail,
      closeVideoDetail
    }}>
      {children}
    </MultimediaContext.Provider>
  )
}

export { MultimediaContext, MultimediaContextProvider }