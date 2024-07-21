import React from 'react'

function page() {
    const terms = [
        {
            title: 'Scheduling and Controlling',
            description:
                'Scheduling and controlling are integral aspects of project management. Scheduling involves creating a timeline and assigning resources to specific tasks, ensuring that the project progresses according to plan. Controlling involves monitoring and adjusting project activities to ensure they align with the project schedule and objectives. Effective scheduling and controlling contribute to the timely and efficient completion of projects.',
        },
        {
            title: 'Procurement Management',
            description:
                'Procurement management involves the processes of acquiring goods, services, or works from external sources to fulfill project requirements. This includes planning, sourcing, contracting, and controlling procurement activities. Efficient procurement management ensures that the necessary resources are obtained in a cost-effective and timely manner, contributing to the overall success of the project.',
        },
        {
            title: 'Resource Management',
            description:
                'Resource management in project management refers to the strategic allocation and utilization of resources, including personnel, equipment, and materials. Effectively managing resources ensures that the project team is adequately equipped to perform their tasks, leading to optimized project performance and successful outcomes.',
        },
        {
            title: 'Budget Management',
            description:
                'Budget management is the process of planning, estimating, and controlling the financial aspects of a project. It involves creating a budget, tracking expenditures, and ensuring that the project stays within financial constraints. Successful budget management is crucial for achieving project goals while maintaining financial sustainability.',
        },
        {
            title: 'Asset Management',
            description:
                'Asset management involves the systematic planning and control of physical and non-physical assets throughout their lifecycle. In the context of project management, this includes identifying, acquiring, and managing assets essential to project success. Effective asset management contributes to project efficiency, reliability, and long-term sustainability.',
        },
        {
            title: 'Due Diligence',
            description:
                'Due diligence in project management refers to the thorough investigation and analysis conducted before making critical decisions or entering into agreements. This involves assessing risks, opportunities, and potential challenges associated with the project. Due diligence ensures informed decision-making and reduces uncertainties throughout the project lifecycle',
        },
    ]
    return (
        <div className="container my-24 mx-auto p-5">
            <div className="flex flex-col lg:flex-row lg:gap-32 items-start justify-center">
                <div className="lg:w-1/3 w-full mb-8 lg:mb-0">
                    <div className="text-4xl md:text-5xl  text-left ">
                        <span className="text-black font-bold"> Project</span>{' '}
                        <span className="text-theme-default">Management</span>
                    </div>
                    <div className="bg-gradient-to-r from-[#61c06a] to-[#549b9b] inline-block text-transparent bg-clip-text text-3xl font-bold my-5">
                        Overview
                    </div>
                    <p className="text-lg text-left mb-8">
                        V-TECH Renewables offers comprehensive Solar Project
                        Management services that ensure the successful execution
                        of your solar energy projects from concept to
                        completion. Our expert team oversees every aspect of the
                        project lifecycle, guaranteeing efficiency, quality, and
                        timely delivery.
                    </p>
                </div>
                <div className="lg:w-2/3 w-full flex flex-col">
                    <ul className="bg-[#f2f2f2] pl-4 lg:pl-20 pr-4 rounded-lg shadow-md py-4 space-y-4">
                        {terms.map((term, index) => (
                            <li key={index} className="">
                                <div className="flex items-start  gap-4 mt-2">
                                    <div className="p-1 mt-1 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-[#f2f2f2] rounded-full" />
                                    </div>
                                    <span className="text-[#61c06a] font-semibold">
                                        {term.title}
                                    </span>
                                </div>
                                <div className="term-description text-base">
                                    <p>{term.description}</p>
                                </div>
                                <hr className="bg-black " />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default page
