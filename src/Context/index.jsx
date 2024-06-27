import React, { createContext, useState } from 'react'

const MultimediaContext = createContext();

const MultimediaContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  }
  const openModal = () => {
    setIsModalOpen(true);
  }
  return (
    <MultimediaContext.Provider value={{
      isModalOpen, 
      closeModal,
      openModal
    }}>
      {children}
    </MultimediaContext.Provider>
  )
}

export { MultimediaContext, MultimediaContextProvider }