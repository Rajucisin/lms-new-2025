'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import LogoYellow from "../../../public/images/logo-yellow.svg"
import LogoGooglePlay from "../../../public/images/google-play-logo.svg"
import LogoAppstore from "../../../public/images/app-store-logo.svg"

type HeaderProps = {
    fixed?: boolean
}

const Header = ({ fixed }: HeaderProps) => {

    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)

    // body class for mobile menu
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('open-menu')
        } else {
            document.body.classList.remove('open-menu')
        }
    }, [menuOpen])

    const handleMenuToggle = () => {
        setMenuOpen(prev => !prev)
    }

    // menu close on click (mobile)
    const handleMenuClose = () => {
        setMenuOpen(false)
    }

    return (
        <header className={`header header-dashboard header-landing ${fixed ? 'fix-header' : ''}`}>
            <div className="container max-container">
                <div className="d-flex align-items-center justify-content-between">

                    {/* Logo */}
                    <div className="logo">
                        <Link href="/lmsmarketingwebsite/homepage">
                            <Image src={LogoYellow} alt="Logo" />
                        </Link>
                    </div>

                    {/* Menu */}
                    <div className={`header-right ${menuOpen ? 'open' : ''}`}>
                        <ul className="d-flex align-items-center justify-content-center">
                            <li className={pathname === '/lmsmarketingwebsite/homepage' ? 'active' : ''}>
                                <Link href="/lmsmarketingwebsite/homepage" onClick={handleMenuClose}>
                                    Home
                                </Link>
                            </li>

                            <li className={pathname === '/lmsmarketingwebsite/howitwork' ? 'active' : ''}>
                                <Link href="/lmsmarketingwebsite/howitwork" onClick={handleMenuClose}>
                                    How It Works
                                </Link>
                            </li>

                            <li className={pathname === '/lmsmarketingwebsite/competitions' ? 'active' : ''}>
                                <Link href="/lmsmarketingwebsite/competitions" onClick={handleMenuClose}>
                                    Competitions
                                </Link>
                            </li>

                            <li className={pathname === '/lmsmarketingwebsite/rules' ? 'active' : ''}>
                                <Link href="/lmsmarketingwebsite/rules" onClick={handleMenuClose}>
                                    Rules
                                </Link>
                            </li>

                            <li className={pathname.startsWith('/lmsmarketingwebsite/faq') ? 'active' : ''}>
                                <Link href="/lmsmarketingwebsite/faq" onClick={handleMenuClose}>
                                    FAQ&apos;s
                                </Link>
                            </li>

                            <li className={pathname === '/lmsmarketingwebsite/contact' ? 'active' : ''}>
                                <Link href="/lmsmarketingwebsite/contact" onClick={handleMenuClose}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Store buttons */}
                    <div className="user-auth store-box d-none d-md-flex">
                        <Link href="#" className="store-link">
                            <Image src={LogoGooglePlay} alt="Google Play" />
                        </Link>
                        <Link href="#" className="store-link">
                            <Image src={LogoAppstore} alt="App Store" />
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={`btn d-md-none bg-transparent border-0 p-0 ${menuOpen ? 'active' : ''}`}
                        onClick={handleMenuToggle}
                        aria-label="Toggle Menu"
                    >
                        <span className="mobile-nav">
                            <span className="bar1"></span>
                            <span className="bar2"></span>
                            <span className="bar3"></span>
                        </span>
                    </button>
                </div>
            </div>

            <div className={`overlay ${menuOpen ? 'show' : ''}`} onClick={handleMenuClose}></div>
        </header>
    )
}

export default Header
