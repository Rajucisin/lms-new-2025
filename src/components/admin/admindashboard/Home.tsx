import React from 'react'
import AdminDashboard from './AdminDashboard'
import DashBoardHeader from '../DashBoardHeader'
import Sidebar from '../Sidebar'

const Home = () => {
  return (
    <>
      <DashBoardHeader/>
      <Sidebar/>
      <div className='main-content'>
      <AdminDashboard/>
      </div>
    </>
  )
}

export default Home
