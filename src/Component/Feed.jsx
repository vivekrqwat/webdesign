import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import React from 'react'
import Post from './Post';

function Feed() {
  return (
   
    <Box  flex={4} p={2}>
   

   {/* "card" */}
   <Post></Post>
   <Post></Post>
   <Post></Post>

  
    </Box>
  )
}

export default Feed
