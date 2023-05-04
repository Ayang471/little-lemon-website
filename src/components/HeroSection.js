import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

function HeroSection() {
    return (
        <div className="hero-section">
            <div className='flex-container'>
                <div className='row'>
                    <div className='col'>
                        <h1>Little Lemon</h1>
                        <p className="city">Chicago</p>
                        <p className='description'>Lorem ipsum dolor sit amet consectetur. Convallis lectus leo tincidunt tincidunt elit aenean. Massa in congue quis id leo tincidunt tincidunt elit aenean. Tincidunt tincidunt elit aenean</p>
                        <Link to="/Booking">Reserve a Table</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection