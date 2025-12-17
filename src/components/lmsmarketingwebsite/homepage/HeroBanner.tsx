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
                        <p className='font-20 mb-24'>Test your knowledge in NRL and AFL.  Choose wisely, pick a winning team every week to survive each round and become the Last Man Standing Champion</p>

                        <div className='d-flex align-items-center gap-3'>
                            <Link href="" className='btn-theme btn-yellow'>Join Now
                            </Link>
                            <Link href="" className='btn-theme btn-black'>View Competitions</Link>
                        </div>
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
