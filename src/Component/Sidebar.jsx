import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import Switch from '@mui/material/Switch';
import React from 'react'

export default function Sidebar({mode1,setmode}) {
  
  return (
    
        <Box  flex={1} p={2} sx={{display:{xs:"none",sm:"block"}}}>
          
          <Box position="fixed">
          {/* list */}
          <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="home">
              <ListItemIcon>
              <HomeIcon></HomeIcon>
              </ListItemIcon>
              <ListItemText>HOME</ListItemText>
           
            </ListItemButton>
          </ListItem>
          {/* //pages */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="home">
              <ListItemIcon>
               <AutoStoriesIcon></AutoStoriesIcon>
              </ListItemIcon>
              <ListItemText>pages</ListItemText>
            
            </ListItemButton>
          </ListItem>
          {/* "settings" */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="home">
              <ListItemIcon>
              <SettingsIcon></SettingsIcon>
              </ListItemIcon>
              <ListItemText>settings</ListItemText>
         
            </ListItemButton>
          </ListItem>
          {/* "profile" */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="home">
              <ListItemIcon>
               <PersonIcon></PersonIcon>
              </ListItemIcon>
              <ListItemText>profile</ListItemText>
            </ListItemButton>
          </ListItem>
          {/* "groups" */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="home">
              <ListItemIcon>
            <GroupIcon></GroupIcon>
              </ListItemIcon>
              <ListItemText>group</ListItemText>
            </ListItemButton>
          </ListItem>
{/* "marketplace" */}
        
        <ListItem disablePadding>
            <ListItemButton component="a" href="home">
              <ListItemIcon>
             <StorefrontIcon></StorefrontIcon>
              </ListItemIcon>
              <ListItemText>marketplace</ListItemText>
            </ListItemButton>
          </ListItem>
             {/* "swicth" */}
             <ListItem disablePadding>
            <ListItemButton component="a" href="home">
              <ListItemIcon>
             <ModeNightIcon></ModeNightIcon>
              </ListItemIcon>
              <Switch    onChange={e=>setmode(mode1=== "light"?"dark":"light")}/>
            </ListItemButton>
          </ListItem>



          </List>
       

          </Box>
          
          



        </Box>
      
    
  )
}
