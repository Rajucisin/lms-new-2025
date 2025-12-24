import React from 'react'
import MyActivities from './MyActivities'
import DashBoardHeader from '../DashBoardHeader'
import Sidebar from '../Sidebar'
import BackLink from './BackLink'

const Home = () => {
    return (
        <>
            <DashBoardHeader />
            <Sidebar />
            <div className='main-content'>
                <BackLink />
                <MyActivities />
            </div>
        </>
    )
}

export default Home
