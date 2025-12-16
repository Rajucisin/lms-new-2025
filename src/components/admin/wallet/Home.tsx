import React from 'react'
import DashBoardHeader from '../DashBoardHeader'
import Sidebar from '../Sidebar'
import Wallet from './Wallet'

const Home = () => {
  return (
    <>
      <DashBoardHeader/>
      <Sidebar/>
      <div className='main-content'>
        <Wallet/>
      </div>
    </>
  )
}

export default Home
