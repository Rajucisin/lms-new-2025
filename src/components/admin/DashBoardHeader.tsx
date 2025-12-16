'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { usePathname } from 'next/navigation';
import Dropdown from 'react-bootstrap/Dropdown';
import "./admin.css";

import LogoBlack from "../../../public/images/logo-black.svg";
import LogoYellow from "../../../public/images/logo-yellow.svg";

import UserPic from "../../../public/images/user-auth.png";

import ThemeToggle from '@/app/ThemeToggle';

const DashBoardHeader = () => {
    const pathname = usePathname();
    const isDashboard = pathname.startsWith('/dashboard');

    // 🔹 State for menu toggle
    const [menuOpen, setMenuOpen] = useState(false);

    // 🔹 Add/remove class on body
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('open-menu');
        } else {
            document.body.classList.remove('open-menu');
        }
    }, [menuOpen]);

    // 🔹 Toggle handler
    const handleMenuToggle = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <div className={`header header-dashboard d-none d-md-block login-head`}>
            <div className='container'>
                <div className='d-flex align-items-center'>
                    <div className='logo'>
                        <Link href="">
                            <Image src={LogoBlack} alt='' className='img-theme-white' />
                            <Image src={LogoYellow} alt='' className='img-theme-black' />
                        </Link>
                    </div>
                    
                    <div className='hd-setting'>
                        <Dropdown className='user-pic'>
                            <Dropdown.Toggle id="dropdown-basic">
                                <Image src={UserPic} alt=''/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>

            <div className='d-none'>
                <ThemeToggle />
            </div>
            <div className='overlay'></div>
        </div>
    );
}

export default DashBoardHeader;
