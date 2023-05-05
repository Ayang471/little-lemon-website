import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import logo from '../images/logo4.png';
import '../AboutPageStyles.css'


function AboutPageContent() {
    return (
        <div className='about-content'>
            <div className='container'>
                <div className='about-main'>
                    <h1>About Little Lemon</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Leo at nec blandit non. Urna ipsum risus tempor sagittis. Lorem ipsum dolor sit amet consectetur. Leo at nec blandit non. Urna ipsum risus tempor sagittis.</p>
                </div>
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent className='time'>
                            June, 2019
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <img src={logo} alt="logo" className='logo-separator' />
     
                            <TimelineConnector className='connector' color="#333333" />
                        </TimelineSeparator>
                        <TimelineContent className='content-description'>Lorem ipsum dolor sit amet consectetur. Ante nisl donec nunc sed orci non. </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent className='time'>
                            August, 2020
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <img src={logo} alt="logo" className='logo-separator' />

                            <TimelineConnector className='connector' />
                        </TimelineSeparator>
                        <TimelineContent className='content-description'>Lorem ipsum dolor sit amet consectetur. Ante nisl donec nunc sed orci non. </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent className='time'>
                            April, 2021
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <img src={logo} alt="logo" className='logo-separator' />
                 
                            <TimelineConnector className='connector' />
                        </TimelineSeparator>
                        <TimelineContent className='content-description'>Lorem ipsum dolor sit amet consectetur. Ante nisl donec nunc sed orci non. </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent className='time'>
                            December, 2021
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <img src={logo} alt="logo" className='logo-separator' />
                            {/* <TimelineDot />*/}
                            <TimelineConnector className='connector' />
                        </TimelineSeparator>
                        <TimelineContent className='content-description'>Lorem ipsum dolor sit amet consectetur. Ante nisl donec nunc sed orci non. </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent className='time'>
                            May, 2022
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <img src={logo} alt="logo" className='logo-separator' />
     
                            <TimelineConnector className='connector' />
                        </TimelineSeparator>
                        <TimelineContent className='content-description'>Lorem ipsum dolor sit amet consectetur. Ante nisl donec nunc sed orci non. </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent className='time'>
                            February, 2023
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <img src={logo} alt="logo" className='logo-separator' />
                  
                            <TimelineConnector className='connector' />
                        </TimelineSeparator>
                        <TimelineContent className='content-description'>Lorem ipsum dolor sit amet consectetur. Ante nisl donec nunc sed orci non. </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent >
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <img src={logo} alt="logo" className='logo-separator' />
                        </TimelineSeparator>
                        <TimelineContent></TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
    )
}

export default AboutPageContent