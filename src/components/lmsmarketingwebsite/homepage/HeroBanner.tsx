'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from "next/image";

import BannerImg from "../../../../public/images/hero-banner.png";
import bgImage from "../../../../public/images/hero-banner-bg.png";

const HeroBanner = () => {
    return (
        <div className='hero-banner' style={{
            backgroundImage: `url(${bgImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <div className='container max-container'>
                <div className='row align-items-center'>
                    <div className='col-md-6'>
                        <h3>LMS Punters Club</h3>
                        <h1>The Ultimate
                            Survival Game</h1>
                        <p className='font-20 mb-24'>Test your NRL and AFL knowledge in one of our Last Man Standing competitions. Pick a winning team each week, survive every round and become an LMS Punters Club Champ.</p>

                        <div className='d-flex align-items-center gap-3 mb-24'>
                            <Link href="" className='btn-theme btn-yellow'>Join Now
                            </Link>
                            <Link href="" className='btn-theme btn-black'>View Competitions</Link>
                        </div>
                        <p className="login-text font-20">
                            Already a member? <Link href="/website/login"> Log in now</Link>
                        </p>
                    </div>
                    <div className='col-md-6 text-md-end'>
                        <Image src={BannerImg} alt='' />
                    </div>
                </div>



            </div>
        </div>
    )
}

export default HeroBanner
