import React from 'react'
import DashBoardHeader from '../DashBoardHeader'
import Sidebar from '../Sidebar'
import Athletes from './Athletes'

const Home = () => {
  return (
    <>
      <DashBoardHeader/>
      <Sidebar/>
      <div className='main-content'>
        <Athletes/>
      </div>
    </>
  )
}

export default Home
