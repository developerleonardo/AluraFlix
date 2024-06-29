import React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { Home } from '../Home'
import { Header } from '../../components/Header';
import './App.css'
import { Footer } from '../../components/Footer';
import { MultimediaContextProvider } from '../../Context';
import { NewVideo } from '../NewVideo';


const AppRoutes = () => {

  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/nuevo-video', element: <NewVideo /> }
  ])

  return (
    routes
  )
};


const App = () => {

  return (
    <>
      <MultimediaContextProvider>
        <BrowserRouter>
          <Header />
          <AppRoutes />
          <Footer />
        </BrowserRouter>
      </MultimediaContextProvider>
    </>
  )
}

export default App
