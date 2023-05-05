import React from 'react'
import HeroSection from '../components/HeroSection'
import SpecialsSection from '../components/SpecialsSection'
import TestimonialSection from '../components/TestimonialSection'

function HomePage() {
    return (
        <div className='main'>
            <HeroSection />
            <SpecialsSection />
            <TestimonialSection />
        </div>
    )
}

export default HomePage