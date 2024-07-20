import Image from 'next/image'
import React from 'react'

function Page() {
    const data = [
        {
            imageSrc: '/Images/E-S-G/Picture1.png',
            title: 'Strategy Development',
            description: `Strategy development in the context of Environmental, Social, and Governance (ESG) involves formulating a comprehensive plan to integrate sustainable and responsible practices into the organization's core operations.`,
        },
        {
            imageSrc: '/Images/E-S-G/Picture2.png',
            title: 'Risk Management',
            description: `ESG risk management is the process of identifying, assessing, and mitigating potential risks associated with environmental, social, and governance factors.`,
        },
        {
            imageSrc: '/Images/E-S-G/Picture3.png',
            title: 'Impact Assessment',
            description: `Impact assessment within the ESG framework involves evaluating the consequences of business activities on the environment, society, and governance structures.`,
        },
    ]

    return (
        <>
            <section className="bg-theme-page bg-opacity-90 relative py-24 mb-12">
                <div className="top-0 w-full h-full ">
                    <div className="container p-5 m-auto flex items-end h-full w-full">
                        <div className="text-white space-y-3 md:space-y-5">
                            <div className="text-4xl md:text-5xl  text-left ">
                                <span className="text-black font-extrabold">
                                    {' '}
                                    Environmental,
                                </span>{' '}
                                <span className="text-theme-default">
                                    Social, and Governance (ESG)
                                </span>
                            </div>
                            <div className="bg-gradient-to-r from-[#61c06a] to-[#549b9b] inline-block text-transparent bg-clip-text text-3xl font-extrabold my-5">
                                Overview
                            </div>
                            <p className="text-lg text-black text-left mb-8">
                                V-TECH Renewables provides Environmental,
                                Social, and Governance (ESG) services (including
                                social impact analysis, and associated risk
                                management) tailored for the Renewables Energy
                                sector. Our comprehensive ESG solutions help
                                businesses and organizations enhance their
                                sustainability practices, ensure regulatory
                                compliance, and improve their overall ESG
                                performance. By partnering with us, you can
                                demonstrate your commitment to responsible
                                business practices while achieving your
                                sustainability goals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mx-auto p-5 -mt-32">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center items-stretch">
                    {data.map(item => (
                        <div
                            key={item.title}
                            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start justify-start h-full relative">
                            <div className="relative mb-4 flex-shrink-0">
                                <div className="p-8 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full flex items-center justify-center">
                                    <Image
                                        src={item.imageSrc}
                                        alt={item.title}
                                        width={60}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <div className="text-left">
                                <h2 className="text-xl font-bold mb-4 text-green-700">
                                    {item.title}
                                </h2>
                                <p className="text-gray-700 ">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Page
