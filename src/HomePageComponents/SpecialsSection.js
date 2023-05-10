import React from 'react'
import greeksalad from '../images/greek salad.png'
import burchetta from '../images/Vector.png'
import lemondessert from '../images/lemon dessert.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function SpecialsSection() {
  return (
      <div className="specials">
          <div className='container'>
              <div className="row">
                  <div className='d-flex flew-row'>
                      <span className="orange-wedge-L invert"></span>
                      <h1 className="text-uppercase">This weeks specials!</h1>
                      <span className="orange-wedge-L"></span>
                  </div>
              </div>
              <section>
                  <div className='row'>
                      <div className='col'>
                          <Card className='card'>
                              <CardActionArea>
                                  <CardMedia
                                      component="img"
                                      height="200px"
                                      width="100%"
                                      image={greeksalad}
                                      alt="greek salad"
                                  />
                                  <CardContent className="card-body">
                                      <Typography >
                                          <h4>Greek Salad <small>$12.99</small></h4>
                                          <p>This famous greek salad of crispy lettuce, peppers,
                                              olives and our Chicago style feta cheese,
                                              garnished with crunchy garlic and rosemary croutons.</p>
                                      </Typography>
                                  </CardContent>
                              </CardActionArea>
                              <CardActions>
                                  <Button className='order-delivery'>
                                      <a href="/">
                                          Order a Delivery
                                          <span> <FontAwesomeIcon icon={faCar} /></span>
                                      </a>
                                  </Button>
                              </CardActions>
                          </Card>
                      </div>
                      <div className='col'>
                          <Card className='card'>
                              <CardActionArea>
                                  <CardMedia
                                      component="img"
                                      height="200px"
                                      width="100%"
                                      image={burchetta}
                                      alt="greek salad"
                                  />
                                  <CardContent className="card-body">
                                      <Typography >
                                          <h4>Burchetta <small>$5.99</small></h4>
                                          <p>This famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                                      </Typography>
                                  </CardContent>
                              </CardActionArea>
                              <CardActions>
                                  <Button className='order-delivery'>
                                      <a href="/">
                                          Order a Delivery
                                          <span> <FontAwesomeIcon icon={faCar} /></span>
                                      </a>
                                  </Button>
                              </CardActions>
                          </Card>
                      </div>
                      <div className='col'>
                          <Card className='card' >
                              <CardActionArea>
                                  <CardMedia
                                      component="img"
                                      height="200px"
                                      width="100%"
                                      image={lemondessert}
                                      alt="greek salad"
                                  />
                                  <CardContent className="card-body">
                                      <Typography >
                                          <h4>Lemon Dessert <small>$5.00</small></h4>
                                          <p>This famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                                      </Typography>
                                  </CardContent>
                              </CardActionArea>
                              <CardActions>
                                  <Button className='order-delivery'>
                                      <a href="/">
                                          Order a Delivery
                                          <span> <FontAwesomeIcon icon={faCar} /></span>
                                      </a>
                                  </Button>
                              </CardActions>
                          </Card>
                      </div>
                      <div className='col'>
                          <Card className='card'>
                              <CardActionArea>
                                  <CardMedia
                                      component="img"
                                      height="200px"
                                      width="100%"
                                      image={lemondessert}
                                      alt="greek salad"
                                  />
                                  <CardContent className="card-body">
                                      <Typography >
                                          <h4>Lemon Dessert <small>$5.00</small></h4>
                                          <p>This famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                                      </Typography>
                                  </CardContent>
                              </CardActionArea>
                              <CardActions>
                                  <Button className='order-delivery'>
                                      <a href="/">
                                          Order a Delivery
                                          <span> <FontAwesomeIcon icon={faCar} /></span>
                                      </a>
                                  </Button>
                              </CardActions>
                          </Card>
                      </div>
                  </div>
              </section>
          </div>
      </div>
  )
}

export default SpecialsSection