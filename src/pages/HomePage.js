import React from 'react'
import HeroSection from '../HomePageComponents/HeroSection'
import SpecialsSection from '../HomePageComponents/SpecialsSection'
import TestimonialSection from '../HomePageComponents/TestimonialSection'
import AboutSection from'../HomePageComponents/AboutSection'
import FooterSection from '../HomePageComponents/FooterSection'
import '../styles/HomePageStyles.css';

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