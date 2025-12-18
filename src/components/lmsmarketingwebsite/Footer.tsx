'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import LogoYellow from "../../../public/images/logo-yellow.svg";

import LogoGooglePlay from "../../../public/images/google-play-logo.svg";
import LogoAppstore from "../../../public/images/app-store-logo.svg";


const Footer = () => {
    return (
        <div className='foot-main'>
            <div className='container max-container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='footer-colum'>
                            <div className='foot-logo'>
                                <Image src={LogoYellow} alt='' />
                            </div>
                            <p>You must be over the age of 18 to join LMS.</p>
                            <p className='mb-0'>
                                Gamble Responsibly. Imagine what you could be buying instead  For free and confidential support call 1800 858 858 or visit gamblinghelponline.org.au.  LMS Punters Club is licenced by the Northern Territory Racing Commission under Licence No XXXX.  Not available to residents of South Australia.
                            </p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='footer-colum offset-md-4'>
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">How It Works</a></li>
                                <li><a href="#">Competitions</a></li>
                                <li><a href="#">Rules</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>

                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='footer-colum offset-md-4'>
                            <h4>Get the App</h4>
                            <div className='d-flex flex-column gap-2'>
                            <Link href="" className='store-link'>
                                <Image src={LogoGooglePlay} alt='' />
                            </Link>
                            <Link href="" className='store-link'>
                                <Image src={LogoAppstore} alt='' />
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
