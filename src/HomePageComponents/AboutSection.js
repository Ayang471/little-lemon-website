import React from 'react'
import Chef from '../images/restaurant chef B.png'


function AboutSection() {
    return (
        <div className='about-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='res-image'>
                            <img src={Chef} alt='image3' />
                        </div>
                    </div>
                    <div className='col'>
                        <div className="about-summary" >
                            <h1>Little Lemon</h1>
                            <div className='underline'></div>
                            <p className='city'>Chicago</p>
                            <p className='description'>Lorem ipsum dolor sit amet consectetur. Nunc eros amet ut risus blandit urna neque morbi quis.
                                Tincidunt maecenas sed ornare hendrerit posuere interdum amet nunc. Facilisis bibendum nunc
                                erat sem. Sed euismod sed varius ac et feugiat. Nibh pretium purus facilisis pellentesque
                                facilisi dignissim sit in arcu.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection