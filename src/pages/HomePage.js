import React from 'react'
import HeroSection from '../components/HeroSection'
import SpecialsSection from '../components/SpecialsSection'
import TestimonialSection from '../components/TestimonialSection'
import AboutSection from'../components/AboutSection'
import FooterSection from '../components/FooterSection'
import '../HomePageStyles.css';

function HomePage() {
    return (
        <div className='main'>
            <HeroSection />
            <SpecialsSection />
            <TestimonialSection />
            <AboutSection />
            <FooterSection />
        </div>
    )
}

export default HomePage