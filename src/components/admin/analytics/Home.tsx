import React from 'react'
import DashBoardHeader from '../DashBoardHeader'
import Sidebar from '../Sidebar'
import Analytics from './Analytics'

const Home = () => {
  return (
    <>
      <DashBoardHeader/>
      <Sidebar/>
      <div className='main-content'>
        <Analytics/>
      </div>
    </>
  )
}

export default Home
