'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

function Navbar() {
    const [navOpen, setNavOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const navRef = useRef(null)
    const dropdownRef = useRef(null)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const handleClickOutside = event => {
        if (
            navRef.current &&
            !navRef.current.contains(event.target) &&
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setNavOpen(false)
            setIsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <>
            <div>
                <div className="relative">
                    {/* Desktop navbar start */}
                    <nav
                        ref={navRef}
                        className="z-50 top-0 left-0 right-0 transition-all duration-700 fixed bg-[#000000] bg-opacity-60 backdrop-blur-md">
                        <div className="container px-4 mx-auto flex justify-between h-20 items-center">
                            <div className="flex items-center">
                                <div>
                                    <Link href="/">
                                        <img
                                            src="/Logo/vtech-logo.png"
                                            className="w-32"
                                            alt="Vtech Logo"
                                        />
                                    </Link>
                                </div>
                                <div className="hidden lg:block ms-11">
                                    <ul className="flex gap-9 text-base text-white">
                                        <li className="text-white hover:text-theme-default py-2 border-b border-transparent">
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li
                                            ref={dropdownRef}
                                            className="relative text-white hover:text-theme-default py-2 border-b border-transparent">
                                            <span
                                                className="cursor-pointer"
                                                onClick={toggleDropdown}>
                                                Services ▾
                                            </span>
                                            {isOpen && (
                                                <div className="absolute top-full left-0 right-0 bg-black bg-opacity-90 backdrop-blur-md z-40 w-60">
                                                    <div className="container mx-auto flex flex-col p-4 justify-between">
                                                        <Link
                                                            href="/services/design-and-engineering"
                                                            className="text-white hover:text-theme-default py-2"
                                                            onClick={
                                                                toggleDropdown
                                                            }>
                                                            Design & Engineering
                                                        </Link>{' '}
                                                        <Link
                                                            href="/services/integrated-management-system"
                                                            className="text-white hover:text-theme-default py-2"
                                                            onClick={
                                                                toggleDropdown
                                                            }>
                                                            Integrated
                                                            Management System
                                                        </Link>
                                                        <Link
                                                            href="/services/quality-assurance"
                                                            className="text-white hover:text-theme-default py-2"
                                                            onClick={
                                                                toggleDropdown
                                                            }>
                                                            Quality Assurance
                                                        </Link>{' '}
                                                        <Link
                                                            href="/services/environmental-social-and-governance"
                                                            className="text-white hover:text-theme-default py-2"
                                                            onClick={
                                                                toggleDropdown
                                                            }>
                                                            Environmental,
                                                            Social & Governance
                                                            (ESG)
                                                        </Link>
                                                        <Link
                                                            href="/services/project-management"
                                                            className="text-white hover:text-theme-default py-2"
                                                            onClick={
                                                                toggleDropdown
                                                            }>
                                                            Project Management
                                                        </Link>
                                                        <Link
                                                            href="/services/engineering-procurement-and-construction"
                                                            className="text-white hover:text-theme-default py-2"
                                                            onClick={
                                                                toggleDropdown
                                                            }>
                                                            Engineering,
                                                            Procurement &
                                                            Construction (EPC)
                                                        </Link>
                                                        <Link
                                                            href="/services/opex"
                                                            className="text-white hover:text-theme-default py-2"
                                                            onClick={
                                                                toggleDropdown
                                                            }>
                                                            Opex (RESCO)
                                                        </Link>
                                                        <Link
                                                            href="/services/capex"
                                                            className="text-white hover:text-theme-default py-2"
                                                            onClick={
                                                                toggleDropdown
                                                            }>
                                                            Capex (Capital
                                                            Expenditure)
                                                        </Link>
                                                        <Link
                                                            href="/services/open-access"
                                                            className="text-white hover:text-theme-default py-2"
                                                            onClick={
                                                                toggleDropdown
                                                            }>
                                                            Open Access (Group
                                                            Captive)
                                                        </Link>
                                                    </div>
                                                </div>
                                            )}
                                        </li>

                                        <li className="text-white hover:text-theme-default py-2 border-b border-transparent">
                                            <Link href="/contact-us">
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <svg
                                    onClick={() => setNavOpen(!navOpen)}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 block lg:hidden cursor-pointer hover:text-theme-default text-white">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6h16.5M3.75 9h16.5M3.75 12h16.5M3.75 15h16.5"
                                    />
                                </svg>
                            </div>
                        </div>
                    </nav>

                    {/* Desktop navbar end */}

                    {/* Mobile Navbar start */}

                    <nav
                        ref={navRef}
                        className={`w-4/6 block lg:hidden top-0 fixed right-0 transition-all duration-500 bg-black to-theme-light pt-8 px-6 z-50 ${
                            navOpen
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 pointer-events-none translate-x-64'
                        }`}>
                        <div className="flex justify-end text-white text-2xl">
                            <div onClick={() => setNavOpen(false)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-8 h-8 cursor-pointer">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                        </div>
                        <ul className="space-y-3 text-s h-screen text-white">
                            <li>
                                <Link
                                    href="/"
                                    className="text-white hover:text-theme-default py-2"
                                    onClick={() => setNavOpen(false)}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/design-and-engineering"
                                    className="text-white hover:text-theme-default py-2"
                                    onClick={() => setNavOpen(false)}>
                                    Design and Engineering
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/integrated-management-system"
                                    className="text-white hover:text-theme-default py-2"
                                    onClick={() => setNavOpen(false)}>
                                    Integrated Management System
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/quality-assurance"
                                    className="text-white hover:text-theme-default py-2"
                                    onClick={() => setNavOpen(false)}>
                                    Quality Assurance
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/environmental-social-and-governance"
                                    className="text-white hover:text-theme-default py-2"
                                    onClick={() => setNavOpen(false)}>
                                    Environmental, Social & Governance (ESG)
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/project-management"
                                    className="text-white hover:text-theme-default py-2"
                                    onClick={() => setNavOpen(false)}>
                                    Project Management
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/engineering-procurement-and-construction"
                                    className="text-white hover:text-theme-default py-2"
                                    onClick={() => setNavOpen(false)}>
                                    Engineering, Procurement & Construction
                                    (EPC)
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/opex"
                                    className="text-white hover:text-theme-default py-2"
                                    onClick={() => setNavOpen(false)}>
                                    Opex (RESCO)
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/capex"
                                    className="text-white hover:text-theme-default py-2"
                                    onClick={() => setNavOpen(false)}>
                                    Capex (Capital Expenditure)
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/open-access"
                                    className="text-white hover:text-theme-default py-2"
                                    onClick={() => setNavOpen(false)}>
                                    Open Access (Group Captive)
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/contact-us"
                                    className="text-white hover:text-theme-default py-2"
                                    onClick={() => setNavOpen(false)}>
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar
