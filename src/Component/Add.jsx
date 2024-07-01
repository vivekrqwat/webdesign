import React, { useState } from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonIcon from '@mui/icons-material/Person';
import { Avatar, Box, Button, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material';
export default function Add() {
    const[open1,setopen1]=useState(false);
    const StyleMOdel=styled(Modal)({
        display:"flex",
  alignItems:"center",
  justifyContent:"center"
    })

    const UserAvatar=styled("Box")(({theme})=>({
        display:"flex",
        alignItems:"center",
        gap:"10px",
       
    }))

  return (
   <>
   <Tooltip title="Delete" sx={{position:"fixed",bottom:20,left:{xs:"calc(50%-25px)",md:30}}}
   onClick={e=>setopen1(true)}>
   <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
</Tooltip>
{/* "modal" */}



<StyleMOdel
  open={open1}
  onClose={(e)=>setopen1(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  
>
  <Box width={500} height={380} bgcolor={"background.default"}
    color={"text.primary"} 
    borderRadius={"20px"}>
    <Typography variant="h6" color={"gray"} textAlign={"center"}> CREATE POST</Typography>

    <UserAvatar onClick={(e)=>{setopen((true))}}>
            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEZmD3BKx8PBSIS2Z-wYG9RUAmhKOFQd3EzQ&s" 
            sx={{width:30,height:30}}/>
            <Typography>jhon</Typography>
            </UserAvatar>
            <TextField
          id="standard-textarea"
          label="new Post"
          placeholder="What is in your mind"
          multiline
          variant="standard"
          sx={{width:"100%",height:"20%"}}

        />
        <Stack direction="row" gap={2} mt={2} md={3}>
            <AddAPhotoIcon color='primary'> 
            </AddAPhotoIcon>
            <Typography>add pic</Typography>
            <PersonIcon color='secondary'></PersonIcon>
            <Typography>TAG</Typography>
            <VideoCameraBackIcon color='error'></VideoCameraBackIcon>
            <Typography>vedio</Typography>
           

        </Stack>
        <Button variant='contained' color="primary"sx={{width:"90%",margin:"15px"}} >POSt</Button>
    
  </Box>
</StyleMOdel>

   </>
  )
}
