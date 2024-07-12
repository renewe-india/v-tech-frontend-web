'use client'
import React from 'react'
import Link from 'next/link'
import {
    FacebookLogo,
    Phone,
    EnvelopeSimple,
    MapPin,
    LinkedinLogo,
} from '@phosphor-icons/react'
function Footer() {
    return (
        <>
            <footer className="bg-theme-700 mt-2 border-t border-theme-default bg-black">
                <div className="bg-gradient-to-r from-[#61c06a] to-[#549b9b] p-2" />
                <div className="container mx-auto px-4 pt-6 text-white mt-2">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 ">
                        <ul className="space-y-4 text-xl">
                            <li className="text-2xl text-theme-default font-bold">
                                Company
                            </li>
                            <div className="space-y-1 text-gray-400">
                                <li className="text-gray-400">
                                    <Link href="/"> Home</Link>
                                </li>
                                <li className="text-gray-400">
                                    <Link href="/#about"> About </Link>
                                </li>
                            </div>
                        </ul>

                        <ul className="space-y-4 text-xl">
                            <li className="text-2xl text-theme-default font-bold">
                                Contact
                            </li>
                            <div className="space-y-1 text-gray-400">
                                <a href="mailto:info@vtechrenewables.com?subject=Me&body=Hello!">
                                    <div className="flex items-center gap-4">
                                        <EnvelopeSimple
                                            size={32}
                                            color="#61c06a"
                                        />

                                        <div>info@vtechrenewables.com</div>
                                    </div>
                                </a>
                                <a
                                    href="tel:+919098797979"
                                    target="_blank"
                                    rel="noreferrer">
                                    <div className="flex items-center gap-4">
                                        <Phone size={32} color="#61c06a" />
                                        <div>+91 90987 97979</div>
                                    </div>
                                </a>
                                <div className="flex items-center gap-4">
                                    <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noreferrer">
                                        <FacebookLogo
                                            size={32}
                                            color="#61c06a"
                                        />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/company/v-tech-renewables/"
                                        target="_blank"
                                        rel="noreferrer">
                                        <LinkedinLogo
                                            size={32}
                                            color="#61c06a"
                                        />
                                    </a>
                                </div>
                            </div>
                        </ul>
                        <ul className="space-y-4 ">
                            <li className=" gap-4 text-2xl text-theme-default font-bold">
                                Address
                            </li>
                            <div className="flex text-xl gap-4 text-gray-400">
                                <div className="flex-shrink-0 w-8 h-8">
                                    <MapPin size={32} color="#61c06a" />
                                </div>
                                #01, Ground Floor, Pinnac Apt., Vakil Nagar,
                                Erandwane, Pune, Maharashtra - 411004
                            </div>
                        </ul>
                    </div>

                    <div className="flex flex-wrap items-center gap-9 justify-between mt-2 py-4 ">
                        <div className="w-24">
                            <img
                                src="/Logo/vtech-logo.png"
                                className="w-full h-full object-contain"
                                alt="logo pic"
                            />
                        </div>
                        <div>Copyright © 2024 V-TECH RENEWABLES</div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
