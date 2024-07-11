import CardWithCustomBullet from '@/components/CardWithCustomBullet'
import React from 'react'

function page() {
    const data = [
        {
            title: 'Initial Investment',
            items: [
                'In a CAPEX model, the business or property owner makes an upfront investment to purchase the solar modules, inverters, mounting structures, and other necessary equipment.',
                'The initial investment covers the cost of design, engineering, procurement, and installation of the solar photovoltaic (PV) system on the rooftop.',
            ],
        },
        {
            title: 'Ownership and Control',
            items: [
                'Under the CAPEX model, the business or property owner retains full ownership and control of the solar PV system.',
                "They are responsible for maintenance, monitoring, and any necessary repairs over the system's lifespan.",
            ],
        },
        {
            title: 'Financial Benefits',
            items: [
                'The primary financial benefit of the CAPEX model is the potential for significant long-term savings on electricity bills.',
                'Once installed, solar panels generate electricity from sunlight, reducing the need to purchase electricity from the grid.',
                'Depending on factors such as system size, local electricity rates, and solar irradiance, the investment typically pays off over several years, providing a return on investment (ROI) through reduced energy costs.',
            ],
        },
        {
            title: 'Tax Incentives and Rebates',
            items: [
                'Businesses and property owners investing in solar PV systems may be eligible for various tax incentives, rebates, grants, and other financial incentives.',
                'These incentives can help offset the upfront cost and accelerate the payback period, making solar investments more financially attractive.',
                'Common incentives include federal investment tax credits (ITC), state-level rebates, renewable energy credits (RECs), and accelerated depreciation.',
            ],
        },
    ]

    return (
        <>
            <section className="bg-theme-page bg-opacity-90 relative py-24 mb-12">
                <div className="top-0 w-full h-full ">
                    <div className="container p-5 m-auto flex items-end h-full w-full">
                        <div className="text-white space-y-3 md:space-y-5">
                            <div className="text-4xl md:text-5xl  text-left">
                                <span className="text-black font-black">
                                    Capex{' '}
                                </span>{' '}
                                <span className="text-theme-default">
                                    (Capital Expenditure)
                                </span>
                            </div>
                            <div className="bg-gradient-to-r from-[#61c06a] to-[#549b9b] inline-block text-transparent bg-clip-text text-3xl font-black my-5">
                                Overview
                            </div>
                            <p className="text-lg text-black text-left mb-8">
                                V-TECH Renewables committed to providing
                                cutting-edge renewable energy solutions that are
                                both efficient and sustainable. With a mission
                                to harness the power of the sun to meet the
                                growing energy needs of businesses and
                                homeowners, we offer a wide range of services
                                designed to maximize energy output and reduce
                                carbon footprints.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mx-auto p-5 -mt-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-stretch">
                    {data.map((cardData, index) => (
                        <CardWithCustomBullet
                            key={index}
                            title={cardData.title}
                            items={cardData.items}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default page
