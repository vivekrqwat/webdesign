import React from 'react'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

export default function Post() {
  return (
    <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader={new Date().toDateString()}
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://i0.wp.com/gamingonphone.com/wp-content/uploads/2021/03/91duOGX58CL-1-780x470.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />}  />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
      
    </Card>
    
  )
}
