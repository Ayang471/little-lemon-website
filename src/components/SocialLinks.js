import React from 'react'
import { SocialIcon } from 'react-social-icons';

function SocialLinks() {
    return (
        <div className='socialLink'>
            <div className='social-links-list'>
                <div className='social-links'>
                    <a href="/"><SocialIcon className="icons" network="facebook" style={{ height: 28, width: 28 }} /></a>
                </div>
                <div className='social-links'>
                    <a href="/"><SocialIcon className="icons" network="instagram" style={{ height: 28, width: 28 }} /></a>
                </div>
                <div className='social-links'>
                    <a href="/"><SocialIcon className="icons" network="twitter" style={{ height: 28, width: 28 }} /></a>
                </div>
                <div className='social-links'>
                    <a href="/"><SocialIcon className="icons" network="youtube" style={{ height: 28, width: 28 }} /></a>
                </div>
                <div className='social-links'>
                    <a href="/"><SocialIcon className="icons" network="tiktok" style={{ height: 28, width: 28 }} /></a>
                </div>
            </div>
            <footer>© 2023 Little Lemon - US, Inc. All Rights Reserved</footer>
        </div>
    )
}

export default SocialLinks