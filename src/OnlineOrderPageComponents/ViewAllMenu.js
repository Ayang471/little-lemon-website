import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { category } from './MenuCategorySection';
import '../styles/MenuListStyles.css'

function ViewAllMenu() {
    const handleCardClick = (category) => {
        window.location.href = `/category/${category}`;
    };

    return (
        <div className='View-All-List'>
            <div className='container'>
                <div className='row'>
                    {category.map(item => (
                        <Card className='selection-cards' key={item.category} >
                            <CardActionArea onClick={(e) => handleCardClick(item.category)}>
                                <CardMedia
                                    className='list-images'
                                    component="img"
                                    image={item.img}
                                    alt={item.category}
                                />
                                <CardContent>
                                    <Typography className='selection-title' gutterBottom variant="h5" component="div">
                                        {item.category}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ViewAllMenu