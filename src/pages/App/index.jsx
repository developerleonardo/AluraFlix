import React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { Home } from '../Home'
import { Header } from '../../components/Header';
import './App.css'
import { Footer } from '../../components/Footer';


const AppRoutes = () => {

const routes = useRoutes([
  {path: '/', element: <Home />}
])

  return (
    routes
  )
};


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
