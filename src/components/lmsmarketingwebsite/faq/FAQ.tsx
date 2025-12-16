'use client'
import React from 'react'
import Link from 'next/link'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div className='sec-faq bg-darker sec-gap'>
            <div className='container max-container'>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>FAQ</Breadcrumb.Item>
                </Breadcrumb>

                <div className='page-header'>
                    <h2 className='page-title'>Frequently Asked Questions
                    </h2>
                    <p> Quick answers to the most common questions about how LMS works —
                        picks, rules, eliminations, prize pools and more.</p>
                </div>


                <div className='setting-card mb-32'>
                    <Accordion defaultActiveKey="0" flush>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What is LMS?

                            </Accordion.Header>
                            <Accordion.Body>
                                <p className='mb-0'> A season-long survivor competition where you pick one team per round.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Can I pick the same team twice?

                            </Accordion.Header>
                            <Accordion.Body>
                                <p className='mb-0'> Yes — but once you pick a team, it enters a 5-round cooldown.

                                </p>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>When can I change my pick?
                            </Accordion.Header>
                            <Accordion.Body>
                                <p className='mb-0'> Anytime until 30 minutes before the first game of the round.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header>What happens if I forget to pick?
                            </Accordion.Header>
                            <Accordion.Body>
                                <p className='mb-0'> You are eliminated.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="5">
                            <Accordion.Header>How do prize pools work?
                            </Accordion.Header>
                            <Accordion.Body>
                                <p className='mb-0'> All prize funds are held in a dedicated customer funds account.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="6">
                            <Accordion.Header>What happens if a game is postponed?</Accordion.Header>
                            <Accordion.Body>
                                <p className='mb-0'>If rescheduled within the round → pick stands.
                                </p>
                                <p>If cancelled → elimination for all players who picked that team.</p>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="7">
                            <Accordion.Header>How do I know which teams are on cooldown?
                            </Accordion.Header>
                            <Accordion.Body>
                                <p className='mb-0'> Your dashboard displays cooldown timers.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="8">
                            <Accordion.Header>How do I reset my password?
                            </Accordion.Header>
                            <Accordion.Body>
                                <p className='mb-0'>Use the “Forgot Password” link on the Sign In page.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </div>

            </div>
        </div>
    )
}

export default FAQ
