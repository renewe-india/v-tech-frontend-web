import React from 'react'
import AboutSection from '@/components/AboutSection'
import HeroSection from '@/components/HeroSection'
import KnowMoreSection from '@/components/KnowMoreSection'
import NumberSection from '@/components/NumberSection'
import OurGoalSection from '@/components/OurGoalSection'
import WhoWeAre from '@/components/WhoWeAre'

function HomePage() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <NumberSection />
            <WhoWeAre />
            <KnowMoreSection />
            <OurGoalSection />
        </>
    )
}

export default HomePage
