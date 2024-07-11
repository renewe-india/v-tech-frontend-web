import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <div className="container my-24 mx-auto p-5">
            <div className=" flex flex-col lg:flex-row lg:gap-32  items-start justify-centers ">
                <div className="lg:w-2/5 w-full mb-8 lg:mb-0">
                    <div className="text-4xl md:text-5xl   text-left">
                        <span className="text-black font-black"> Opex</span>{' '}
                        <span className="text-theme-default">(RESCO)</span>
                    </div>
                    <div className="bg-gradient-to-r from-[#61c06a] to-[#549b9b] inline-block text-transparent bg-clip-text text-3xl font-black my-5">
                        Overview
                    </div>
                    <p className="text-lg  text-left mb-8">
                        V-TECH Renewables specializes in providing sustainable
                        and cost-effective solar energy solutions. Our focus is
                        on rooftop solar installations using an operating
                        expense (Opex) model, enabling businesses and homeowners
                        to harness the power of solar energy without the burden
                        of upfront capital costs.
                    </p>
                </div>
                <div className="lg:w-3/5 w-full   flex flex-col space-y-8">
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <div className="flex flex-col lg:flex-row items-center gap-5 lg:space-x-4">
                            <div className="relative flex-shrink-0">
                                <div className="p-2 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full">
                                    <Image
                                        src="/Images/opex/opex-1.jpg"
                                        alt="Solar Module Inspection"
                                        width={150}
                                        height={150}
                                        className="rounded-full border-2"
                                    />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-xl text-theme-default font-bold mb-2">
                                    Here's how the Opex model works
                                </h2>
                                <ul className="mt-3 mx-5 list-disc">
                                    <li className="flex items-start  gap-4 mt-2">
                                        <div className="p-1 mt-1 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-[#f2f2f2] rounded-full"></div>
                                        </div>
                                        The consumer provides the space, and the
                                        developer invests in the equipment,
                                        installation, commissioning, and
                                        maintenance of the plant.
                                    </li>
                                    <li className="flex items-start  gap-4 mt-2">
                                        <div className="p-1 mt-1 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-[#f2f2f2] rounded-full"></div>
                                        </div>
                                        The customer pays for the power
                                        generated under a long-term power
                                        purchase agreement (PPA) for a fixed
                                        tenure at an agreed tariff.
                                    </li>
                                    <li className="flex items-start  gap-4 mt-2">
                                        <div className="p-1 mt-1 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-[#f2f2f2] rounded-full"></div>
                                        </div>
                                        The capital is repaid through generated
                                        electricity.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-4">
                        <div className="flex flex-col lg:flex-row items-center gap-5 lg:space-x-4">
                            <div className="relative flex-shrink-0">
                                <div className="p-2 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full">
                                    <Image
                                        src="/Images/opex/opex-2.jpg"
                                        alt="Equipment and Balance of System Components"
                                        width={150}
                                        height={150}
                                        className="rounded-full border-2"
                                    />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-xl text-theme-default font-bold mb-2">
                                    Here are some benefits of the Opex model
                                </h2>
                                <ul className="mt-3 mx-5 list-none">
                                    <li className="flex items-start  gap-4 mt-2">
                                        <div className="p-1 mt-1 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-[#f2f2f2] rounded-full"></div>
                                        </div>
                                        No upfront investment.
                                    </li>
                                    <li className="flex items-start  gap-4 mt-2">
                                        <div className="p-1 mt-1 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-[#f2f2f2] rounded-full"></div>
                                        </div>
                                        Cheaper and risk-free electricity.
                                    </li>
                                    <li className="flex items-start  gap-4 mt-2">
                                        <div className="p-1 mt-1 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-[#f2f2f2] rounded-full"></div>
                                        </div>
                                        Capital repaid through generated
                                        electricity.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
