import React from 'react'
import { Banner } from '../../components/Banner'
import { Team } from '../../components/Team'
import { Card } from '../../components/Card'
import videos from '../../data/db.json'
import './Home.css'
import { ModalEditarCard } from '../../components/ModalEditarCard'

const Home = () => {

  console.log(videos);
  return (
    <>
      <Banner />
      <Team title='FRONT END'>
        <Card />
        <Card />
        <Card />
      </Team>
      <Team title='BACK END'>
        <Card />
        <Card />
        <Card />
        <Card />
      </Team>
      <Team title='INNOVACIÓN Y GESTIÓN'>
        <Card />
        <Card />
        <Card />
        <Card />
      </Team>
      <ModalEditarCard />
    </>
  )
}

export { Home }