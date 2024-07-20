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

                <div className="absolute top-0 w-full h-full bg-opacity-60 bg-black py-12">
                    <div className="container px-4 m-auto flex items-end h-full w-full">
                        <div className="text-white space-y-3 md:space-y-5 my-auto lg:mb-48">
                            <div className="text-4xl md:text-6xl font-bold md:max-w-4xl mt-12 ">
                                <span className="text-theme-default">
                                    Solar{' '}
                                </span>{' '}
                                <span className="underline">Design</span> &amp;
                                Engineering Excellence Partner
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="space-y-8">
                                    <div className="text-base lg:text-lg text-gray-300">
                                        Optimize your Solar Power requirements
                                        with us. We specialize in Efficient
                                        Design and Engineering Solutions for
                                        EPCs, Developers &amp; Investors,
                                        ensuring timely and budget-friendly
                                        success. Partner with us for streamlined
                                        operations and maximum ROI.
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
