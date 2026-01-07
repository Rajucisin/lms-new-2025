'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Form from 'react-bootstrap/Form';
import bgComingsoon from "../../../../public/images/coming-soon.png";

const ComingSoon = () => {
    return (
        <div className='hero-banner sec-coming-soon' style={{
            backgroundImage: `url(${bgComingsoon.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <div className='container max-container'>
                <div className='row align-items-center'>
                    <div className='col-md-12  text-center '>
                        <h3> An Exciting </h3>
                        <h1 className='mb-48'>
                            New Sports Tipping Competition
                            </h1>
                            <h3 className='font-40 mb-5'> Coming Soon <span className='loader'></span> </h3>


                        <div className='contact-form mb-4'>
                            <Form className='d-flex align-items-center gap-3'>
                             <Form.Control type="email" placeholder="Enter your email address" />
                             <button className='btn-theme btn-yellow'>Join Waitlist</button>
                             </Form>
                        </div>
                        <p className='age-text'>18+ Age Required</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComingSoon
