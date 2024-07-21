'use client'
import Image from 'next/image'
function page() {
    const tabs = [
        {
            id: 'quality-management',
            title: 'Quality Management Systems (QMS)',
            image: '/Images/I-M-S/quality-management.jpg',
            description:
                'Quality management in the context of solar plant servicing involves the implementation of systematic processes to ensure that the products and services meet or exceed customer expectations. This includes adherence to industry standards, continuous improvement practices, and rigorous quality control measures throughout the design, engineering, and installation phases. Quality management systems aim to deliver reliable and high-performance solar solutions.',
        },
        {
            id: 'environmental-management',
            title: 'Environmental Management Systems (EMS)',
            image: '/Images/I-M-S/environmental-management.jpg',
            description:
                'Environmental management focuses on minimizing the environmental impact of solar power projects. This includes strategies to reduce carbon footprint, minimize waste generation, and ensure responsible sourcing of materials. Our Engineers and project managers implement environmentally friendly practices to contribute to sustainable and eco-friendly energy solutions.',
        },
        {
            id: 'health-safety-management-systems',
            title: 'Occupational Health and Safety Management Systems (OH&S)',
            image: '/Images/I-M-S/health-safety-management-systems.jpg',
            description:
                'Health and safety management systems are critical for ensuring the well-being of workers, clients, and the community during the various stages of solar projects. This involves the development and implementation of safety protocols, training programs, and risk assessments. Our Engineers and project teams prioritize a safe working environment to prevent accidents and promote the health and safety of all stakeholders involved in solar projects.',
        },
    ]

    return (
        <div className="container my-24 mx-auto p-5">
            <div className="text-4xl md:text-5xl  text-left">
                <span className="text-black font-bold "> Integrated </span>
                <span className="text-theme-default">
                    Management System (IMS)
                </span>
            </div>
            <div className="bg-gradient-to-r from-[#61c06a] to-[#549b9b] inline-block text-transparent bg-clip-text text-3xl font-bold my-5">
                Overview
            </div>
            <p className="text-lg text-left mb-8">
                V-TECH Renewables facilitates IMS services for certifications of
                ISO 9001:2015, ISO 14001:2015, ISO 45001:2018. An Integrated
                Management System (IMS) consolidates quality, environmental,
                health and safety, risk, compliance, and other management
                standards into a unified framework. It improves efficiency,
                reduces costs, ensures compliance, enhances stakeholder
                confidence, and promotes continuous improvement across an
                organization, fostering resilience and sustainable growth. IMS
                implementation involves planning, documentation, training,
                integration, monitoring, and continuous refinement to align with
                organizational goals and regulatory requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-24 lg:gap-8 mt-24">
                {tabs.map(tab => (
                    <div
                        key={tab.id}
                        className="relative border rounded-lg p-6 cursor-pointer bg-theme-page">
                        <div className="flex flex-col items-center mb-4">
                            <div className="relative w-full flex justify-center">
                                <div className="absolute -top-24 p-2 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full">
                                    <Image
                                        src={tab.image}
                                        alt={tab.title}
                                        width={150}
                                        height={150}
                                        className="rounded-full border-2"
                                    />
                                </div>
                            </div>
                            <h2 className="text-xl text-center font-bold mt-24">
                                {tab.title}
                            </h2>
                        </div>
                        <p className="text-center text-base">
                            {tab.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page
