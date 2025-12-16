import React from 'react'
import DashBoardHeader from '../DashBoardHeader'
import Sidebar from '../Sidebar'
import Competitions from './Competitions'

const Home = () => {
  return (
    <>
      <DashBoardHeader/>
      <Sidebar/>
      <div className='main-content'>
        <Competitions/>
      </div>
    </>
  )
}

export default Home
