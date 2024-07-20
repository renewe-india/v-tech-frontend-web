import Image from 'next/image'
import React from 'react'

function Page() {
    return (
        <>
            <section className="bg-theme-page bg-opacity-90 relative py-24  mb-12">
                <div className="top-0 w-full h-full ">
                    <div className="container p-5 m-auto flex items-end h-full w-full">
                        <div className="text-white space-y-3 md:space-y-5">
                            <div className="text-4xl md:text-5xl text-left ">
                                <span className="text-black font-extrabold">
                                    {' '}
                                    Engineering,
                                </span>{' '}
                                <span className="text-theme-default">
                                    Procurement and Construction (EPC)
                                </span>
                            </div>
                            <div className="bg-gradient-to-r from-[#61c06a] to-[#549b9b] inline-block text-transparent bg-clip-text text-3xl font-extrabold my-5">
                                Overview
                            </div>
                            <p className="text-lg text-black text-left mb-8">
                                V-TECH Renewables a leading provider of
                                comprehensive Engineering, Procurement, and
                                Construction (EPC) services. We specialize in
                                delivering turnkey Renewable Energy Solutions
                                that are customized to meet the unique needs of
                                our clients, ensuring optimal performance,
                                reliability, and sustainability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mx-auto p-5 -mt-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white rounded-md shadow-md p-4 relative">
                        <div className="flex flex-col lg:flex-row items-center gap-5 ">
                            <div className="relative flex-shrink-0">
                                <div className="p-2 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full">
                                    <Image
                                        src="/Images/engineering-procurement-and-construction/planning.jpg"
                                        alt="Plant Performance Assessment"
                                        width={120}
                                        height={120}
                                        className="rounded-full border-2"
                                    />
                                </div>
                            </div>
                            <div className="text-xl text-theme-default font-bold text-left mb-2 lg:pr-2">
                                <span> Planning &amp; Conceptualization</span>
                            </div>
                        </div>
                        <ul className="mt-3 mx-5 list-none">
                            <li className="flex items-start  gap-4 mt-2">
                                <div className="p-1 mt-1 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-[#f2f2f2] rounded-full" />
                                </div>
                                This initial phase involves defining the
                                project's scope, objectives, and requirements.
                                It includes conducting feasibility studies, site
                                assessments, and preliminary engineering
                                designs.
                            </li>
                            <li className="flex items-start  gap-4 mt-2">
                                <div className="p-1 mt-1 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-[#f2f2f2] rounded-full" />
                                </div>
                                During this stage, project stakeholders identify
                                project goals, establish budgets, and develop
                                schedules. They may also obtain necessary
                                permits and approvals.
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white rounded-md shadow-md p-4 relative">
                        <div className="flex flex-col lg:flex-row items-center gap-5 ">
                            <div className="relative flex-shrink-0">
                                <div className="p-2 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full">
                                    <Image
                                        src="/Images/engineering-procurement-and-construction/construction.jpg"
                                        alt="Implementation & Construction"
                                        width={120}
                                        height={120}
                                        className="rounded-full border-2"
                                    />
                                </div>
                            </div>
                            <div className="text-xl text-theme-default font-bold text-left mb-2 lg:pr-2">
                                Implementation & Construction
                            </div>
                        </div>
                        <ul className="mt-3 mx-5 list-disc">
                            <li className="flex items-start  gap-4 mt-2">
                                <div className="p-1 mt-1 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-[#f2f2f2] rounded-full" />
                                </div>
                                Once the planning phase is complete and all
                                necessary approvals are obtained, the project
                                moves into the implementation stage.
                            </li>
                            <li className="flex items-start  gap-4 mt-2">
                                <div className="p-1 mt-1 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-[#f2f2f2] rounded-full" />
                                </div>
                                In this phase, detailed engineering designs are
                                created, and procurement activities begin to
                                acquire materials, equipment, and services
                                required for construction.
                            </li>
                            <li className="flex items-start  gap-4 mt-2">
                                <div className="p-1 mt-1 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-[#f2f2f2] rounded-full" />
                                </div>
                                Construction activities commence, including site
                                preparation, foundation construction, structural
                                erection, installation of equipment and systems,
                                and integration of various components.
                            </li>
                            <li className="flex items-start  gap-4 mt-2">
                                <div className="p-1 mt-1 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-[#f2f2f2] rounded-full" />
                                </div>
                                Project management and supervision ensure that
                                construction progresses according to the plan,
                                meeting quality, safety, and timeline
                                requirements.
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white rounded-md shadow-md p-4 relative">
                        <div className="flex flex-col lg:flex-row items-center gap-5 ">
                            <div className="relative flex-shrink-0">
                                <div className="p-2 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full">
                                    <Image
                                        src="/Images/engineering-procurement-and-construction/operations.jpg"
                                        alt="Operations & Maintenance"
                                        width={120}
                                        height={120}
                                        className="rounded-full border-2"
                                    />
                                </div>
                            </div>
                            <div className="text-xl text-theme-default font-bold text-left mb-2 lg:pr-2">
                                Operation & Maintenance
                            </div>
                        </div>
                        <ul className="mt-3 mx-5 list-disc">
                            <li className="flex items-start  gap-4 mt-2">
                                <div className="p-1 mt-1 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-[#f2f2f2] rounded-full" />
                                </div>
                                After the construction phase, the focus shifts
                                to operating and maintaining the completed
                                facility or system. Operations involve the
                                day-to-day management and functioning of the
                                asset to achieve its intended purpose.
                            </li>
                            <li className="flex items-start  gap-4 mt-2">
                                <div className="p-1 mt-1 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-[#f2f2f2] rounded-full" />
                                </div>
                                This includes running equipment, managing
                                personnel, and ensuring efficient performance.
                            </li>
                            <li className="flex items-start  gap-4 mt-2">
                                <div className="p-1 mt-1 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-[#f2f2f2] rounded-full" />
                                </div>
                                Maintenance activities aim to preserve the
                                asset's functionality, reliability, and
                                lifespan.
                            </li>
                            <li className="flex items-start  gap-4 mt-2">
                                <div className="p-1 mt-1 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-[#f2f2f2] rounded-full" />
                                </div>
                                This may include preventive maintenance,
                                scheduled inspections, repairs, and
                                replacements. Ongoing monitoring and
                                optimization help identify and address any
                                issues or inefficiencies to ensure continuous
                                performance and maximize asset value over its
                                lifecycle.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
