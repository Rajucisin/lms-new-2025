'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Accordion from 'react-bootstrap/Accordion';

import LogoBlack from "../../../../public/images/logo-black.svg";
import LogoYellow from "../../../../public/images/logo-yellow.svg";

import LogoGooglePlay from "../../../../public/images/google-play-logo.svg";
import LogoAppstore from "../../../../public/images/app-store-logo.svg";
import HeroBanner from './HeroBanner';
import HowItWorks from './HowItWorks';
import FeaturedCompetitions from './FeaturedCompetitions';


const HomePage = () => {
    
    return (
        <>
            <HeroBanner />
            <HowItWorks />
            <FeaturedCompetitions />
            <section className="sec-why-player-love bg-darker sec-gap">
                <div className="container max-container">
                    <div className='row align-items-center'>
                        <div className='col-lg-5'>
                            <div className="section-header mb-40">
                                <h2 className="hd-title">
                                    Why Players Love <span className='d-block'>LMS</span>
                                </h2>
                                <p>It's not just about betting; it's about strategy, knowledge, and holding your nerve when the pressure is on.</p>
                                <div className="mt-16">
                                    <button className="btn-theme btn-yellow">Start Playing</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-7'>
                            <div className="row">
                                <div className='col-md-6 mb-24'>
                                    <div className="feature">
                                        <div className="feature-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M434.8 54.1C446.7 62.7 451.1 78.3 445.7 91.9L367.3 288L512 288C525.5 288 537.5 296.4 542.1 309.1C546.7 321.8 542.8 336 532.5 344.6L244.5 584.6C233.2 594 217.1 594.5 205.2 585.9C193.3 577.3 188.9 561.7 194.3 548.1L272.7 352L128 352C114.5 352 102.5 343.6 97.9 330.9C93.3 318.2 97.2 304 107.5 295.4L395.5 55.4C406.8 46 422.9 45.5 434.8 54.1z" fill='currentColor' /></svg>
                                        </div>
                                        <h4>Simple & Fun
                                        </h4>
                                        <p className="muted">One pick per round. Easy to play yet hard to master.
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-6 mb-24'>
                                    <div className="feature">
                                        <div className="feature-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M512 320C512 214 426 128 320 128C214 128 128 214 128 320C128 426 214 512 320 512C426 512 512 426 512 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM320 400C364.2 400 400 364.2 400 320C400 275.8 364.2 240 320 240C275.8 240 240 275.8 240 320C240 364.2 275.8 400 320 400zM320 176C399.5 176 464 240.5 464 320C464 399.5 399.5 464 320 464C240.5 464 176 399.5 176 320C176 240.5 240.5 176 320 176zM288 320C288 302.3 302.3 288 320 288C337.7 288 352 302.3 352 320C352 337.7 337.7 352 320 352C302.3 352 288 337.7 288 320z" fill='currentColor' /></svg>
                                        </div>
                                        <h4>Strategic Depth
                                        </h4>
                                        <p className="muted">Team cooldowns create real decision-making and long-term planning.
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="feature">
                                        <div className="feature-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M392 176L248 176L210.7 101.5C208.9 97.9 208 93.9 208 89.9C208 75.6 219.6 64 233.9 64L406.1 64C420.4 64 432 75.6 432 89.9C432 93.9 431.1 97.9 429.3 101.5L392 176zM233.6 224L406.4 224L455.1 264.6C521.6 320 560 402 560 488.5C560 536.8 520.8 576 472.5 576L167.4 576C119.2 576 80 536.8 80 488.5C80 402 118.4 320 184.9 264.6L233.6 224zM324 288C313 288 304 297 304 308L304 312C275.2 312.3 252 335.7 252 364.5C252 390.2 270.5 412.1 295.9 416.3L337.6 423.3C343.6 424.3 348 429.5 348 435.6C348 442.5 342.4 448.1 335.5 448.1L280 448C269 448 260 457 260 468C260 479 269 488 280 488L304 488L304 492C304 503 313 512 324 512C335 512 344 503 344 492L344 487.3C369 483.2 388 461.6 388 435.5C388 409.8 369.5 387.9 344.1 383.7L302.4 376.7C296.4 375.7 292 370.5 292 364.4C292 357.5 297.6 351.9 304.5 351.9L352 351.9C363 351.9 372 342.9 372 331.9C372 320.9 363 311.9 352 311.9L344 311.9L344 307.9C344 296.9 335 287.9 324 287.9z" fill='currentColor' /></svg>
                                        </div>
                                        <h4>Big Prize Pools
                                        </h4>
                                        <p className="muted">High-stakes competitions mean substantial prizepools!
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="feature">
                                        <div className="feature-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M224 64C206.3 64 192 78.3 192 96L192 128L160 128C124.7 128 96 156.7 96 192L96 240L544 240L544 192C544 156.7 515.3 128 480 128L448 128L448 96C448 78.3 433.7 64 416 64C398.3 64 384 78.3 384 96L384 128L256 128L256 96C256 78.3 241.7 64 224 64zM96 288L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 288L96 288z" fill='currentColor' /></svg>
                                        </div>
                                        <h4>Season-Long Excitement
                                        </h4>
                                        <p className="muted">Every round matters. Every pick counts.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec-protection-licensing bg-darker sec-gap">
                <div className="container max-container">
                    <div className="d-flex align-items-center">
                        <div className="shield">
                            <svg viewBox="0 0 640 640"><path d="M320 64C324.6 64 329.2 65 333.4 66.9L521.8 146.8C543.8 156.1 560.2 177.8 560.1 204C559.6 303.2 518.8 484.7 346.5 567.2C329.8 575.2 310.4 575.2 293.7 567.2C121.3 484.7 80.6 303.2 80.1 204C80 177.8 96.4 156.1 118.4 146.8L306.7 66.9C310.9 65 315.4 64 320 64zM320 130.8L320 508.9C458 442.1 495.1 294.1 496 205.5L320 130.9L320 130.9z" fill='currentColor' /></svg>
                        </div>
                        <div className='flex-grow-1'>
                            <h4>NT Licensing & Player Protection
                            </h4>
                            <p className="muted">LMS is licensed by the Northern Territory Racing Commission.
                                All prize funds are held in a dedicated Customer trust account.
                            </p>
                            <p className='muted mb-0'>LMS takes some skill but please participate responsibly.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            <div className='sec-faq bg-darker sec-gap'>
                <div className='container'>
                    <div className="section-header mb-40 text-center">
                        <h2 className="hd-title">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div className='setting-card mb-32'>
                        <Accordion defaultActiveKey="0" flush>
                            
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Can I pick the same team twice?
</Accordion.Header>
                                <Accordion.Body>
                                    <p className='mb-0'> Yes — but not within 5 rounds of each other.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How do I change my pick?
</Accordion.Header>
                                <Accordion.Body>
                                    <p className='mb-0'> You can update your pick until 30 minutes before the first game of each round.
</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className='text-center'>
                        <Link href="/lmsmarketingwebsite/faq" className='btn-theme btn-yellow'>View Full FAQ</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
