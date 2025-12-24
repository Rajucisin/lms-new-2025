'use client'
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Link from 'next/link'

const MyActivities = () => {
    return (
        <div className='sec-my-activities p-40'>
            <div className='container'>
                <div className='setting-card mb-32'>
                    <div className='statement-info mb-32'>
                        <p className='font-20 mb-mobile'>
                            Monthly Activity Statements - see all your bets, balance and result totals at a glance!
                        </p>
                        <p className='font-20 mb-mobile'>
                            An Activity Statement for your Sportsbet account will be emailed to you every month where a transaction occurs.
                        </p>
                        <div className="help-box ">
                            <p className='m-0 font-20 mb-mobile'>
                                <span>If you need a statement for a particular date range please </span> <Link href="#" className='link-underline-text'>Contact</Link>
                                </p> 
                        </div>
                    </div>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>2025</Accordion.Header>
                            <Accordion.Body>
                                <div className="year-body">
                                    <ul className="month-list">
                                        <li className="month-item active">
                                            <span className='m-name'>Nov</span>
                                            <Link href="/dashboard/activitystatement" className='arrow-box-right'>
                                                <span className="icon">
                                                    View Activity
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="month-item">
                                            <span className='m-name'>Oct</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                        <li className="month-item">
                                            <span className='m-name'>Sep</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                         <li className="month-item">
                                            <span className='m-name'>Aug</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                        <li className="month-item">
                                            <span className='m-name'>Jul</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                         <li className="month-item">
                                            <span className='m-name'>Jun</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                        <li className="month-item">
                                            <span className='m-name'>May</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                         <li className="month-item">
                                            <span className='m-name'>Apr</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                        <li className="month-item active">
                                            <span className='m-name'>Mar</span>
                                            <Link href="/dashboard/activitystatement" className='arrow-box-right'>
                                                <span className="icon">
                                                    View Activity
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="month-item">
                                            <span className='m-name'>Feb</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                        <li className="month-item">
                                            <span className='m-name'>Feb</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                    </ul>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>2024</Accordion.Header>
                            <Accordion.Body>
                                <div className="year-body">
                                    <ul className="month-list">
                                        <li className="month-item active">
                                            <span className='m-name'>Nov</span>
                                            <Link href="/dashboard/activitystatement" className='arrow-box-right'>
                                                <span className="icon">
                                                    View Activity
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="month-item">
                                            <span className='m-name'>Oct</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                        <li className="month-item">
                                            <span className='m-name'>Sep</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                         <li className="month-item">
                                            <span className='m-name'>Aug</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                        <li className="month-item">
                                            <span className='m-name'>Jul</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                         <li className="month-item">
                                            <span className='m-name'>Jun</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                        <li className="month-item">
                                            <span className='m-name'>May</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                         <li className="month-item">
                                            <span className='m-name'>Apr</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                        <li className="month-item active">
                                            <span className='m-name'>Mar</span>
                                            <Link href="/dashboard/activitystatement" className='arrow-box-right'>
                                                <span className="icon">
                                                    View Activity
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="month-item">
                                            <span className='m-name'>Feb</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                        <li className="month-item">
                                            <span className='m-name'>Feb</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                    </ul>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>2023</Accordion.Header>
                            <Accordion.Body>
                                <div className="year-body">
                                    <ul className="month-list">
                                        <li className="month-item active">
                                            <span className='m-name'>Nov</span>
                                            <Link href="/dashboard/activitystatement" className='arrow-box-right'>
                                                <span className="icon">
                                                    View Activity
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="month-item">
                                            <span className='m-name'>Oct</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                        <li className="month-item">
                                            <span className='m-name'>Sep</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                         <li className="month-item">
                                            <span className='m-name'>Aug</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                        <li className="month-item">
                                            <span className='m-name'>Jul</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                         <li className="month-item">
                                            <span className='m-name'>Jun</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                        <li className="month-item">
                                            <span className='m-name'>May</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                         <li className="month-item">
                                            <span className='m-name'>Apr</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                        <li className="month-item active">
                                            <span className='m-name'>Mar</span>
                                            <Link href="/dashboard/activitystatement" className='arrow-box-right'>
                                                <span className="icon">
                                                    View Activity
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="month-item">
                                            <span className='m-name'>Feb</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                        <li className="month-item">
                                            <span className='m-name'>Feb</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                    </ul>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>2022</Accordion.Header>
                            <Accordion.Body>
                                <div className="year-body">
                                    <ul className="month-list">
                                        <li className="month-item active">
                                            <span className='m-name'>Nov</span>
                                            <Link href="/dashboard/activitystatement" className='arrow-box-right'>
                                                <span className="icon">
                                                    View Activity
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="month-item">
                                            <span className='m-name'>Oct</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                        <li className="month-item">
                                            <span className='m-name'>Sep</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                         <li className="month-item">
                                            <span className='m-name'>Aug</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                        <li className="month-item">
                                            <span className='m-name'>Jul</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                         <li className="month-item">
                                            <span className='m-name'>Jun</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                        <li className="month-item">
                                            <span className='m-name'>May</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                         <li className="month-item">
                                            <span className='m-name'>Apr</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                        <li className="month-item active">
                                            <span className='m-name'>Mar</span>
                                            <Link href="/dashboard/activitystatement" className='arrow-box-right'>
                                                <span className="icon">
                                                    View Activity
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="month-item">
                                            <span className='m-name'>Feb</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                        <li className="month-item">
                                            <span className='m-name'>Feb</span>
                                            <span className="status">No Activity</span>
                                        </li>
                                    </ul>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default MyActivities
