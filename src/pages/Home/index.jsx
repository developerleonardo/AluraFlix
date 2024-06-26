import React from 'react'
import { Banner } from '../../components/Banner'
import './Home.css'
import { Team } from '../../components/Team'
import { Card } from '../../components/Card'

const Home = () => {
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
    </>
  )
}

export { Home }