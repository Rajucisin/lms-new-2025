import React from 'react'
import DashBoardHeader from '../DashBoardHeader'
import Sidebar from '../Sidebar'
import BackLink from './BackLink'
import ActivityStatement from './ActivityStatement'

const Home = () => {
    return (
        <>
            <DashBoardHeader />
            <Sidebar />
            <div className='main-content'>
                <BackLink />
                <ActivityStatement/>
            </div>
        </>
    )
}

export default Home
