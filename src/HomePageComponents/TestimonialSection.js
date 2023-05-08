import React from 'react'
import Avatar from '@mui/material/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function TestimonialSection() {
  return (
      <div className="testimonials">
          <div className="sub-heading">
              <h1>Testimonials</h1>
              <div className="border"></div>
          </div>
          <section className='container'>
              <div className='row'>
                  <div className='col'>
                      <Card className='review-card' >
                          <Avatar
                              className='avatar'
                              alt="Remy Sharp"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRxfERFlApLKpIifup2oj0wda4S4g_wmb_g&usqp=CAU"
                              sx={{ width: 125, height: 125 }}
                          />
                          <div className='review-star'>
                              <div><FontAwesomeIcon icon={faStar} /></div>
                              <div><FontAwesomeIcon icon={faStar} /></div>
                              <div><FontAwesomeIcon icon={faStar} /></div>
                              <div><FontAwesomeIcon icon={faStar} /></div>
                              <div><FontAwesomeIcon icon={faStar} /></div>
                          </div>
                          <CardContent className="card_content">
                              <strong>First Last</strong>
                              <p>Lorem ipsum dolor sit amet. Convallis massa in tincidunt elit aenean. Massa in congue quis id...</p>
                          </CardContent>
                      </Card>
                  </div>
                  <div className='col'>
                      <Card className='review-card'>
                          <Avatar
                              className='avatar'
                              alt="Remy Sharp"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRxfERFlApLKpIifup2oj0wda4S4g_wmb_g&usqp=CAU"
                              sx={{ width: 125, height: 125 }}
                          />
                          <div className='review-star'>
                              <div><FontAwesomeIcon icon={faStar} /></div>
                              <div><FontAwesomeIcon icon={faStar} /></div>
                              <div><FontAwesomeIcon icon={faStar} /></div>
                              <div><FontAwesomeIcon icon={faStar} /></div>
                          </div>
                          <CardContent className="card_content">
                              <strong>First Last</strong>
                              <p>Lorem ipsum dolor sit amet. Convallis massa in tincidunt elit aenean. Massa in congue quis id...</p>
                          </CardContent>
                      </Card>
                  </div>
                  <div className='col'>
                      <Card className='review-card'>
                          <Avatar
                              className='avatar'
                              alt="Remy Sharp"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRxfERFlApLKpIifup2oj0wda4S4g_wmb_g&usqp=CAU"
                              sx={{ width: 125, height: 125 }}
                          />
                          <div className='review-star'>
                              <div><FontAwesomeIcon icon={faStar} /></div>
                              <div><FontAwesomeIcon icon={faStar} /></div>
                              <div><FontAwesomeIcon icon={faStar} /></div>
                              <div><FontAwesomeIcon icon={faStar} /></div>
                          </div>
                          <CardContent className="card_content">
                              <strong>First Last</strong>
                              <p>Lorem ipsum dolor sit amet. Convallis massa in tincidunt elit aenean. Massa in congue quis id...</p>
                          </CardContent>
                      </Card>
                  </div>
                  <div className='col'>
                      <Card className='review-card'>
                          <Avatar
                              className='avatar'
                              alt="Remy Sharp"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRxfERFlApLKpIifup2oj0wda4S4g_wmb_g&usqp=CAU"
                              sx={{ width: 125, height: 125 }}
                          />
                          <div className='review-star'>
                              <div><FontAwesomeIcon icon={faStar} /></div>
                              <div><FontAwesomeIcon icon={faStar} /></div>
                              <div><FontAwesomeIcon icon={faStar} /></div>
                              <div><FontAwesomeIcon icon={faStar} /></div>
                              <div><FontAwesomeIcon icon={faStar} /></div>
                          </div>
                          <CardContent className="card_content">
                              <strong>First Last</strong>
                              <p>Lorem ipsum dolor sit amet. Convallis massa in tincidunt elit aenean. Massa in congue quis id...</p>
                          </CardContent>
                      </Card>
                  </div>
              </div>
          </section>
      </div>
  )
}

export default TestimonialSection