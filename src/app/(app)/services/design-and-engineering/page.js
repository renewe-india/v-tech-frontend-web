import CurvyLine from '@/components/CurvyLine'
import WaveBackground from '@/components/WaveBackground'
import React from 'react'

const DesignAndEngineering = () => {
    return (
        <div className="container my-24 mx-auto p-5">
            <div className="text-4xl md:text-5xl  md:max-w-4xl ">
                <span className="text-black font-black ">Design</span>{' '}
                <span className="text-theme-default">&amp; Engineering</span>
            </div>
            <div className="bg-gradient-to-r from-[#61c06a] to-[#549b9b] inline-block text-transparent bg-clip-text text-3xl font-black my-5">
                Overview
            </div>
            <p className="text-lg text-left mb-8">
                V-TECH Renewables specializes in conducting thorough feasibility
                studies to assess the viability of solar power projects. Our
                team of electrical Engineers offers tailored solutions for a
                wide range of solar plant installations. In collaboration with
                our civil and structural engineering experts, we design robust
                and efficient structures. Our detailed engineering services
                prioritize precision in optimizing solar system layouts and
                configurations.
            </p>
            <div className="relative ">
                <CurvyLine />
                <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    <div className="relative bg-white rounded-lg shadow-md p-6">
                        <div className="absolute top-[20px] left-[-16px] w-8 h-8 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full" />
                        <h2 className="text-xl font-bold mb-4">
                            Feasibility Studies
                        </h2>
                        <p className="text-gray-700">
                            Studies are a critical phase in the design and
                            engineering of solar power projects. These studies
                            assess the viability and potential challenges
                            associated with implementing solar energy systems.
                            Our Engineers analyze factors such as geographical
                            location, available sunlight, and local regulations
                            to determine the feasibility of solar plant
                            installations.
                        </p>
                    </div>
                    <div className="relative bg-white rounded-lg shadow-md p-6">
                        <div className="absolute top-[20px] left-[-16px] w-8 h-8 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full" />
                        <h2 className="text-xl font-bold mb-4">
                            Electrical Engineering
                        </h2>
                        <p className="text-gray-700">
                            This includes designing layout of solar plant. SLD,
                            PVsyst, AC & DC cabling layouts with calculations,
                            earthing & LA layouts with calculations, sub-station
                            & transmission lines.
                        </p>
                    </div>
                    <div className="relative bg-white rounded-lg shadow-md p-6">
                        <div className="absolute top-[20px] left-[-16px] w-8 h-8 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full" />
                        <h2 className="text-xl font-bold mb-4">
                            Civil and Structural Engineering
                        </h2>
                        <p className="text-gray-700">
                            Civil and structural engineering are essential
                            components in the development of solar power
                            projects. Our Engineers focus on the design and
                            construction of the physical infrastructure needed
                            to support solar modules, including module mounting
                            structure (MMS), STAAD Analysis, civil foundations,
                            and mounting systems.
                        </p>
                    </div>
                    <div className="relative bg-white rounded-lg shadow-md p-6">
                        <div className="absolute top-[20px] left-[-16px] w-8 h-8 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full" />
                        <h2 className="text-xl font-bold mb-4">
                            Detailed Engineering
                        </h2>
                        <p className="text-gray-700">
                            Our team prepares the designs, project engineering
                            and execution drawings in conjunction to the
                            technical specifications, design criteria and
                            procedures, best of engineering codes and standard
                            engineering practices for a utility scale solar PV
                            plant.
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative mt-8 lg:mt-16">
                <CurvyLine />
                <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    <div className="relative bg-white rounded-lg shadow-md p-6">
                        <div className="absolute top-[20px] left-[-16px] w-8 h-8 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full" />
                        <h2 className="text-xl font-bold mb-4">
                            Power System Studies
                        </h2>
                        <p className="text-gray-700">
                            Power system studies in the context of solar plant
                            encompass a thorough examination of electrical
                            systems. Our Engineers conduct studies to analyze
                            power flow, short circuits, and other electrical
                            phenomena to ensure the safe and reliable
                            integration of solar power into existing power
                            grids. These studies help design systems that
                            efficiently generate, and distribute solar-generated
                            electricity.
                        </p>
                    </div>
                    <div className="relative bg-white rounded-lg shadow-md p-6">
                        <div className="absolute top-[20px] left-[-16px] w-8 h-8 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full" />
                        <h2 className="text-xl font-bold mb-4">
                            Flood Risk Assessment
                        </h2>
                        <p className="text-gray-700">
                            Flood risk assessment is a crucial step in ensuring
                            the resilience and durability of solar plant
                            installations. Our Engineers assess the site's
                            vulnerability to floods, considering factors such as
                            terrain, proximity to water bodies, and historical
                            flood data. The goal is to design solar systems that
                            can withstand potential flood events, minimizing
                            damage and ensuring long-term functionality.
                        </p>
                    </div>
                    <div className="relative bg-white rounded-lg shadow-md p-6">
                        <div className="absolute top-[20px] left-[-16px] w-8 h-8 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full" />
                        <h2 className="text-xl font-bold mb-4">
                            Owner's Engineers
                        </h2>
                        <p className="text-gray-700">
                            The role of an Owner's Engineers involves
                            representing the project owner's interests
                            throughout the solar power project development
                            process. This includes overseeing the design and
                            construction phases, ensuring compliance with
                            specifications, and verifying that the project meets
                            quality standards. Owner's Engineers act as a
                            liaison between the project owner and other
                            stakeholders, providing expertise and guidance to
                            ensure successful project outcomes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesignAndEngineering
