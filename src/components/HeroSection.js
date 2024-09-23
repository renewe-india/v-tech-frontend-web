'use client'

import React, { useState } from 'react'
import ContactModal from '@/components/ContactModal' // Adjust the path as needed

function HeroSection() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <>
            <section className="relative h-screen rounded-b-3xl overflow-hidden ">
                <img
                    src="/Images/hero-bg-one.jpg"
                    className="w-full h-full object-cover"
                    alt="hero background"
                />

                <div className="absolute top-0 w-full h-full bg-opacity-70 bg-black py-12">
                    <div className="container px-4 m-auto flex items-end h-full w-full">
                        <div className="text-white space-y-3 md:space-y-5 my-auto lg:mb-48">
                            <div className="text-4xl md:text-6xl font-bold md:max-w-4xl mt-12 ">
                                <span>Excellence Partner for </span>
                                <span className="text-theme-default">
                                    Renewable Energy
                                </span>
                                <span> Solutions</span>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3">
                                <div className="space-y-8 lg:col-span-2">
                                    <div className="text-base lg:text-lg text-gray-300">
                                        V-TECH Renewables enables business
                                        owners in achieving India's Net Zero
                                        emission target by 2070 and reducing
                                        their electricity bills. In addition to
                                        financing solar projects, we provide
                                        efficient engineering and design
                                        solutions, as well as project completion
                                        on schedule and within budget. As a
                                        partner, we can help you streamline your
                                        operations and boost your ROI.
                                    </div>
                                    <div
                                        onClick={() => setIsModalOpen(true)}
                                        className="px-9 rounded-3xl py-2 bg-theme-default text-white hover:bg-theme-dark inline-block mt-6 cursor-pointer">
                                        Know More
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
        </>
    )
}

export default HeroSection
