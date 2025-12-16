'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from "next/image";

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import LogoYello from "../../../../public/images/logo-yellow.svg";
import LogoBlack from "../../../../public/images/logo-black.svg";
import Banner from "../../../../public/images/auth-banner.png";
import LogoGooglePlay from "../../../../public/images/google-play-logo.svg";
import LogoAppstore from "../../../../public/images/app-store-logo.svg";


import LogoWhiteMobile from "../../../../public/images/banner-mob-white.png";
import LogoBlackeMobile from "../../../../public/images/banner-mob-black.png";

import EyeClose from "../../../../public/images/eye-slash.png";
import EyeOpen from "../../../../public/images/eye.png";
import SignUpUsing from '@/components/modalcomponents/SignUpUsing';


const Login = () => {

  const [showLogin, setShowLogin] = useState(false);
  const handleLogin = () => {
    setShowLogin(true);
  };
  const handleCloseAll = () => {
    setShowLogin(false);
  };

  return (
    <div className='d-flex auth-wrapper'>
      <div className='auth-form text-center'>
        
        <div className='max-card my-auto'>
          <div className='logo-mobile d-md-none'>
            <Image src={LogoWhiteMobile} alt="" />
          </div>

          <div className='auth-logo'>
            <Image src={LogoBlack} alt="" className='img-theme-white' />
            <Image src={LogoYello} alt="" className='img-theme-black' />
          </div>
          <p>Welcome Back, Champ! Sign in and get ready to make your winning picks.</p>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"

          >
            <Form.Control type="email" placeholder="Johnsmith1001@gmail.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Enter Password">
            <Form.Control type="password" placeholder="Enter your password" />
            <span className='pass-container'>
              <Image src={EyeClose} alt="" className='eye-close' />
              {/* <Image src={EyeOpen} alt="" className='eye-open' /> */}
            </span>
          </FloatingLabel>
          <div className="forgot-link text-center">
            <Link href="" className='link-underline-text'>Forgot Password?</Link>
          </div>
        </div>
        <button className='btn-theme btn-black w-100'>Log In</button>
        <div className='create-account'>
          <p className='m-0'>Don't have an account? <Link href="javascript:void(0)"
            onClick={handleLogin} className='link-underline-text'> Create Account </Link></p>
        </div>

      </div>
      <div className='auth-info text-center' style={{
        backgroundImage: "url('/images/login-bg.png')",
      }} >
        {/* <div className='auth-banner-img'>
          <Image src={Banner} alt="" />
        </div> */}
        <div className='login-foot'>
        <div className='block-head'>
          <h1>Download the App for Best Experience</h1>
          <p>Welcome Back, Champ! Sign in and get ready to make your winning picks.</p>
        </div>
        <div className='d-flex align-items-center justify-content-center auth-clients'>
          <Link href=""><Image src={LogoGooglePlay} alt="" /></Link>
          <Link href=""><Image src={LogoAppstore} alt="" /></Link>
        </div>
        </div>
      </div>
      <SignUpUsing show={showLogin} handleClose={handleCloseAll} />
    </div>
  )
}

export default Login
