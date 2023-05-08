import React from 'react'
import SocialLinks from './SocialLinks'
import { Hide, Box } from '@chakra-ui/react'
import '../styles/About&InquiriesStyles.css'


function AboutAndInquiries() {
    return (
        <div className='about-and-inquiries visible' >
            <div className='inquiries-page'>
                <div className='flex-container'>
                    <div className='row'>
                        <div className='col res-bottom-list'>
                            <Box w='100%' py={6}>
                                <h6>About Us</h6>
                                <a href="/">Our Story</a>
                                <a href="/">Sustainability</a>
                                <a href="/">Newsroom</a>
                                <a href="/">Careers</a>
                            </Box>
                        </div>
                        <div className='col res-bottom-list'>
                            <Box w='100%' p={4}>
                                <h6>FIND</h6>
                                <a href="/">Menu</a>
                                <a href="/">Nutritional Guide</a>
                                <a href="/">Locations</a>
                                <a href='/'>Little Lemon</a>
                            </Box>
                        </div>
                        <div className='col res-bottom-list'>
                            <h6>ORDER & RESERVE</h6>
                            <a href="/">Dine-In Reservation</a>
                            <a href="/">Gift Card</a>
                            <a href="/">Group & Private Dining</a>
                            <a href="/">Catering & TO-GO</a>
                        </div>
                        <div className='col res-bottom-list'>
                            <h6>INQUIRIES</h6>
                            <a href="/">Contact</a>
                            <a href="/">Global Development</a>
                            <a href="/">Donation Requests</a>
                            <a href="/">FAQs</a>
                        </div>
                    </div>
                    <div className='privacy-section'>
                        <Hide breakpoint='(max-width: 400px)'>
                            <Box>
                                <div className='privacy'>
                                    <a href="/">Privacy Policy</a>
                                    |
                                    <a href="/">Accessibility</a>
                                    |
                                    <a href="/">Terms of Use</a>
                                </div>
                            </Box>
                        </Hide>
                    </div>
                </div>
            </div>
            <SocialLinks />
        </div>
    )
}

export default AboutAndInquiries