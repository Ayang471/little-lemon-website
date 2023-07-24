import React from 'react'
import footerImage from '../images/logo1.png'
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom'
import { Hide, Box } from '@chakra-ui/react'

function FooterSection() {
    return (
        <div className='footer-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                    <Hide breakpoint='(max-width: 482px)'>
                            <Link to="/home"><img src={footerImage} alt='footer-img' /></Link>
                    </Hide>
                </div>
                <div className="col">
                    <p>Doormat Nagivation</p>
                    <Link to="/home" >Home</Link>
                    <Link to="/about" >About</Link>
                    <Link to="/menu" >Menu</Link>
                    <Link to="/booking" >Reservation</Link>
                    <Link to="/online-order" >Online Order</Link>
                    <Link to="/login" >LogIn</Link>
                </div>

                <div className="col">
                    <p>Contact</p>
                    <a href='/'>San Jose, CA</a>
                    <a href="/">xxx-xxx-xxxx</a>
                    <a a href="/">example@Little-Lemon.com</a>
                </div>

                <div className='col social-link-icons'>
                    <div className='col'>
                        <Hide breakpoint='(max-width: 482px)'>
                 
                                <p>Social Media</p>
                                <div className='social-icons'>
                                    <SocialIcon className="icons" network="twitter" style={{ height: 24, width: 24 }} />
                                    <SocialIcon className="icons" network="instagram" style={{ height: 24, width: 24 }} />
                                    <SocialIcon className="icons" network="facebook" style={{ height: 24, width: 24 }} />
                                </div>
                        
                        </Hide>
                    </div>
                </div>
            </div>
        </div>
        </div >
    )
}

export default FooterSection