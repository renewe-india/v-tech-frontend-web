import React from 'react'

function AboutSection() {
    return (
        <>
            <section className="mt-32 lg:mt-32 bg-black bg-opacity-90 ">
                <div className="bg-gradient-to-r from-[#61c06a] to-[#549b9b] p-2"></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 container mx-auto py-12 px-4">
                    <div className="w-full rounded-3xl overflow-hidden lg:relative  lg:left-0">
                        <img
                            src="/Images/about.jpg"
                            className="w-full h-full object-cover"
                            alt="bg"
                        />
                    </div>
                    <div className="space-y-4 text-white">
                        <div className="text-xl text-theme-default font-semibold">
                            About Us
                        </div>
                        <div>
                            <div className="text-4xl  font-bold ">
                                V-TECH RENEWABLES
                            </div>
                            <div className="text-xl md:text-lg text-theme-default font-extrabold tracking-wide">
                                Empowering Lives with Sustainable Energy
                            </div>
                        </div>

                        <div className="text-lg">
                            Founded in 2009 as V-TECH Consultancy Services,
                            we've embarked on a transformative journey marked by
                            an unwavering commitment to sustainability. Over the
                            past two decades, we have dedicated ourselves to
                            delivering top-notch Services &amp; Solutions in
                            Renewable Energy spectrum including Electrical,
                            Civil, and Piping Infrastructure for Commercial,
                            Industrial, and Residential segments.
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-gradient-to-r from-[#61c06a] to-[#549b9b] p-2"></div>
        </>
    )
}

export default AboutSection
