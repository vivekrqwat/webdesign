import { AppBar, Badge, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import RocketIcon from '@mui/icons-material/Rocket';
import Rocket from '@mui/icons-material/Rocket';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';

export default function Navbar() {
    const StyleToolbar=styled(Toolbar)({
        display:"flex",
        justifyContent:"space-between"
    });
    const Searchbar=styled("div")(({theme})=>(
        {
        background:"white",
        padding:"0 10px",
        borderRadius:theme.shape.borderRadius,
        width:"40%",

    }))
    const Iconcontainer=styled("Box")(({theme})=>({
        display:"none",
        flexDirection:"row",
        gap:"20px",
        alignItems:"center",
        [theme.breakpoints.up("sm")]:{display:"flex"}

    }))
    const UserAvatar=styled("Box")(({theme})=>({
        display:"flex",
        alignItems:"center",
        gap:"10px",
        [theme.breakpoints.up("sm")]:{display:"none"}
    }))
    const [open,setopen]=useState(false)
    const  handleClose=()=>{}
    return (
    
   <AppBar position='sticky'>
    
    <StyleToolbar>
        <Typography sx={{display:{xs:"none",sm:"block"}}}>V_WEB</Typography>
        <Rocket sx={{display:{xs:"block",sm:"none"}}}></Rocket>
        <Searchbar><InputBase></InputBase></Searchbar>
        <Iconcontainer>
            <Badge badgeContent={4} color="error">
                <MailIcon  ></MailIcon>
            </Badge>

        {/* //notification */}
        <Badge badgeContent={4} color="error">
               <NotificationsNoneIcon></NotificationsNoneIcon>
            </Badge>
            {/* avatar */}
            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEZmD3BKx8PBSIS2Z-wYG9RUAmhKOFQd3EzQ&s" 
            sx={{width:30,height:30}}
            onClick={(e)=>{setopen((true))}}
            />
           




        </Iconcontainer>
        <UserAvatar onClick={(e)=>{setopen((true))}}>
            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEZmD3BKx8PBSIS2Z-wYG9RUAmhKOFQd3EzQ&s" 
            sx={{width:30,height:30}}/>
            </UserAvatar>


            {/* "menu" */}

            <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
       onClose={e=>setopen(false)}
        open={open}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>

      </Menu>

            
        
    </StyleToolbar>
  

   </AppBar>
  )
}
