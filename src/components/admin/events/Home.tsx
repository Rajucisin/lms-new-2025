import React from 'react'
import DashBoardHeader from '../DashBoardHeader'
import Sidebar from '../Sidebar'
import Events from './Events'

const Home = () => {
  return (
    <>
      <DashBoardHeader/>
      <Sidebar/>
      <div className='main-content'>
        <Events/>
      </div>
    </>
  )
}

export default Home
