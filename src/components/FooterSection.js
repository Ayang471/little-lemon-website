import React from 'react'
import '../HomePageStyles.css'
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
                      <Hide breakpoint='(max-width: 400px)'>
                          <Box>
                              <img src={footerImage} alt='footer-img' />
                          </Box>
                      </Hide>
                  </div>
                  <div className="col">
                      <p>Doormat Nagivation</p>
                      <div><Link to="/home" >Home</Link></div>
                      <div><Link to="/about" >About</Link></div>
                      <div><Link to="/menu" >Menu</Link></div>
                      <div><Link to="/booking" >Reservation</Link></div>
                      <div><Link to="/online-order" >Online Order</Link></div>
                      <div><Link to="/login" >LogIn</Link></div>
                  </div>

                  <div className="col">
                      <p>Contact</p>
                      <div><a href='/'>San Jose, CA</a></div>
                      <div><a href="/">xxx-xxx-xxxx</a></div>
                      <div><a a href="/">example@Little-Lemon.com</a></div>
                  </div>

                  <div className='col social-link-icons'>
                      <Hide breakpoint='(max-width: 400px)'>
                          <Box>
                              <p>Social Media</p>
                              <div className='social-icons'>
                                  <div className="icons" ><SocialIcon network="twitter" style={{ height: 30, width: 30 }} /></div>
                                  <div className="icons"><SocialIcon network="instagram" style={{ height: 30, width: 30 }} /></div>
                                  <div className="icons"><SocialIcon network="facebook" style={{ height: 30, width: 30 }} /></div>
                              </div>
                          </Box>
                      </Hide>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default FooterSection