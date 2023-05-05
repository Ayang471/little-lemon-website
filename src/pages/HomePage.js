import React from 'react'
import HeroSection from '../components/HeroSection'
import SpecialsSection from '../components/SpecialsSection'
import TestimonialSection from '../components/TestimonialSection'
import AboutSection from'../components/AboutSection'

function HomePage() {
    return (
        <div className='main'>
            <HeroSection />
            <SpecialsSection />
            <TestimonialSection />
            <AboutSection />
        </div>
    )
}

export default HomePage