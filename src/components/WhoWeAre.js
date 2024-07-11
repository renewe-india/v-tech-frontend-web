import Link from 'next/link'
import React from 'react'

function WhoWeAre() {
    return (
        <section className="container px-4 mx-auto mt-32">
            <div className="text-lg text-theme-dark font-semibold">
                WHO WE ARE
            </div>
            <div className="flex flex-row mt-3 max-w-2xl">
                <div className="text-4xl text-theme-dark  ">
                    <p className="font-bold"> V-TECH RENEWABLES</p>

                    <p className="text-3xl text-theme-dark  font-semibold">
                        Offers Experts & Innovative Renewable Energy Solutions
                        tailored for Commercial, Industrial and Residential
                        Segments.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 mt-20">
                <div className="relative rounded-3xl overflow-hidden h-72 shadow-2xl transition-transform transform hover:scale-x-95">
                    <Link href="/services/design-and-engineering">
                        <img
                            src="/Images/design-&-engineering/D&G.png"
                            className="h-full w-full object-cover"
                            alt=""
                        />
                        <div className="rounded-3xl absolute bottom-0 w-full text-white p-4 md:p-9 bg-gradient-to-t from-black from-40%">
                            <div className="text-lg md:text-2xl font-bold">
                                Design and Engineering
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="relative rounded-3xl overflow-hidden h-72  shadow-2xl transition-transform transform hover:scale-x-95 ">
                    <Link href="/services/integrated-management-system">
                        <img
                            src="/Images/I-M-S/IMS.jpeg"
                            className="h-full w-full object-cover"
                            alt=""
                        />
                        <div className="rounded-3xl absolute bottom-0 w-full text-white p-4 md:p-9 bg-gradient-to-t from-black from-40%">
                            <div className="text-lg md:text-2xl font-bold">
                                Integrated Management System (IMS)
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 items-center  gap-9 mt-10">
                <div className="relative rounded-3xl overflow-hidden h-72 shadow-2xl transition-transform transform hover:scale-x-95 ">
                    <Link href="/services/quality-assurance">
                        <img
                            src="/Images/quality-assurance/QualityAssurace.jpeg"
                            className="h-full w-full object-cover"
                            alt=""
                        />
                        <div className="rounded-3xl absolute bottom-0 w-full text-white p-4 md:p-9 bg-gradient-to-t from-black from-40%">
                            <div className="text-lg md:text-2xl font-bold">
                                Quality Assurance
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 mt-10">
                <div className="relative rounded-3xl overflow-hidden h-72 shadow-2xl transition-transform transform hover:scale-x-95">
                    <Link href="/services/environmental-social-and-governance">
                        <img
                            src="/Images/E-S-G/ESG.jpeg"
                            className="h-full w-full object-cover"
                            alt=""
                        />
                        <div className="rounded-3xl absolute bottom-0 w-full text-white p-4 md:p-9 bg-gradient-to-t from-black from-40%">
                            <div className="text-lg md:text-2xl font-bold">
                                Environmental , Social and Governance (ESG)
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="relative rounded-3xl overflow-hidden h-72 shadow-2xl transition-transform transform hover:scale-x-95">
                    <Link href="/services/project-management">
                        <img
                            src="/Images/project-management/project-management.jpeg"
                            className="h-full w-full object-cover"
                            alt=""
                        />
                        <div className="rounded-3xl absolute bottom-0 w-full text-white p-4 md:p-9 bg-gradient-to-t from-black from-40%">
                            <div className="text-lg md:text-2xl font-bold">
                                Project Management
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default WhoWeAre
