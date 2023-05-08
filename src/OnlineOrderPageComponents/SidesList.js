import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Salad } from './MenuList';
import '../styles/MenuListStyles.css'

function SaladsList() {
    return (
        <div className='Category'>
            <div className='container'>
                <div className='row'>
                    {Salad.map(item => (
                        <Card className='cards' >
                            <CardActionArea>
                                <CardMedia
                                    className='images'
                                    component="img"
                                    image={item.img}
                                    alt="Salads"
                                />
                                <CardContent className='content'>
                                    <Typography className='title' gutterBottom variant="h5" component="div">
                                        <h4>{item.title} </h4>
                                    </Typography>
                                    <Typography className='item-price' gutterBottom variant="h5" component="div">
                                        <span>${item.price} </span>
                                    </Typography>
                                    <Typography className='desc' gutterBottom variant="h5" component="div">
                                        {item.desc}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button className='button' size="small">
                                    Add to Cart
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </div>
            </div>
            <div className='Calories'>
                <hr />
                <p>*Lorem ipsum dolor sit amet consectetur. Quis facilisi id semper turpis laoreet orci scelerisque. Quis massa congue egestas mattis leo quam enim. Turpis sed et in egestas. </p>
            </div>
        </div>
    )
}

export default SaladsList