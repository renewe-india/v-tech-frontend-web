import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <div className="container my-24 mx-auto p-5">
            <div className="flex flex-col lg:flex-row lg:gap-32 items-start justify-center">
                <div className="lg:w-1/3 w-full mb-8 lg:mb-0">
                    <div className="text-4xl md:text-5xl  text-left">
                        <span className="text-black font-bold"> Quality </span>
                        <span className="text-theme-default">Assurance</span>
                    </div>
                    <div className="bg-gradient-to-r from-[#61c06a] to-[#549b9b] inline-block text-transparent bg-clip-text text-3xl font-bold my-5">
                        Overview
                    </div>
                    <p className="text-lg text-left mb-8">
                        V-TECH Renewables ensure seamless coordination for
                        project completion on time. Our Project Manager
                        integrates work between the Engineering and PMC teams
                        and ensure there is no deviation from design, lapse in
                        quality during execution, or reason to defer beyond
                        schedule. It is verified that the work is completed
                        according to the approved design and that all necessary
                        tools are used to deliver the project.
                    </p>
                </div>
                <div className="lg:w-2/3 w-full flex flex-col space-y-8">
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <div className="flex flex-col lg:flex-row items-center gap-5 lg:space-x-4">
                            <div className="relative flex-shrink-0">
                                <div className="p-2 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full">
                                    <Image
                                        src="/Images/quality-assurance/plant-performance-assessment.jpg"
                                        alt="Plant Performance Assessment"
                                        width={150}
                                        height={150}
                                        className="rounded-full border-2"
                                    />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-xl text-theme-default font-bold mb-2">
                                    Plant Performance Assessment
                                </h2>
                                <p className="text-sm">
                                    Plant performance assessment involves the
                                    ongoing monitoring and analysis of the solar
                                    power plant's operational efficiency. Our
                                    Engineers use data analytics and performance
                                    metrics to evaluate the output of the solar
                                    modules, ensuring that the system is
                                    operating optimally. This assessment helps
                                    identify and address any issues that may
                                    affect the overall performance and energy
                                    production of the solar plant.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-4">
                        <div className="flex flex-col lg:flex-row items-center gap-5 lg:space-x-4">
                            <div className="relative flex-shrink-0">
                                <div className="p-2 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full">
                                    <Image
                                        src="/Images/quality-assurance/construction-quality-assurance.jpg"
                                        alt="Construction Quality Assurance"
                                        width={150}
                                        height={150}
                                        className="rounded-full border-2"
                                    />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-xl text-theme-default font-bold mb-2">
                                    Construction Quality Assurance
                                </h2>
                                <p className="text-sm">
                                    Construction quality assurance ensures that
                                    the installation of solar plant meets the
                                    highest standards. This phase involves
                                    rigorous inspections, quality control
                                    measures, and adherence to design
                                    specifications during the construction
                                    process. Our Engineers focus on the
                                    durability, safety, and precision of the
                                    installations to guarantee the long-term
                                    reliability of the solar plant
                                    infrastructure.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-4">
                        <div className="flex flex-col lg:flex-row items-center gap-5 lg:space-x-4">
                            <div className="relative flex-shrink-0">
                                <div className="p-2 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full">
                                    <Image
                                        src="/Images/quality-assurance/solar-module-inspection.jpg"
                                        alt="Solar Module Inspection"
                                        width={150}
                                        height={150}
                                        className="rounded-full border-2"
                                    />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-xl text-theme-default font-bold mb-2">
                                    Solar Module Inspection
                                </h2>
                                <p className="text-sm">
                                    Solar module inspection is a critical step
                                    in ensuring the functionality and durability
                                    of individual solar modules. Our Engineers
                                    inspect each module for defects, damage, or
                                    manufacturing issues that could impact
                                    performance. This meticulous examination
                                    helps identify and replace faulty modules,
                                    ensuring the overall efficiency and
                                    longevity of the solar plant.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-4">
                        <div className="flex flex-col lg:flex-row items-center gap-5 lg:space-x-4">
                            <div className="relative flex-shrink-0">
                                <div className="p-2 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full">
                                    <Image
                                        src="/Images/quality-assurance/equipment-and-balance.jpg"
                                        alt="Equipment and Balance of System Components"
                                        width={150}
                                        height={150}
                                        className="rounded-full border-2"
                                    />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-xl text-theme-default font-bold mb-2">
                                    Equipment and Balance of System Components
                                </h2>
                                <p className="text-sm">
                                    The evaluation of equipment and balance of
                                    system (BOS) components involves a
                                    comprehensive review of all supporting
                                    elements beyond the solar modules. This
                                    includes inverters, cables, mounting
                                    structures, and other crucial components.
                                    Our Engineers assess the quality,
                                    compatibility, and efficiency of these
                                    elements to guarantee the smooth operation
                                    of the entire solar plant.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
