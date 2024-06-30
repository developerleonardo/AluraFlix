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

  //Get the videos from the api
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

  //Delete a video
  const deleteVideo = async (id) => {
    await fetch(`http://localhost:3000/videos/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      },
    });
    setVideos((prevVideos) => prevVideos.filter(video => video.id !== id));
  }
  //Update any information of a video
  const updateVideo = async (id, updatedInfo) => {
    const conection = await fetch(`http://localhost:3000/videos/${id}`, {
      method: "PUT",
      headers: {
          "content-type": "application/json"
      },
      body: updatedInfo
  });
  setVideos(updatedInfo)
  return conection
  }

  return (
    <MultimediaContext.Provider value={{
      isModalOpen,
      closeModal,
      openModal,
      videos,
      setVideos,
      teams,
      isAsideOpen,
      openVideoDetail,
      closeVideoDetail,
      deleteVideo,
      updateVideo
    }}>
      {children}
    </MultimediaContext.Provider>
  )
}

export { MultimediaContext, MultimediaContextProvider }