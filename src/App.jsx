import { useState } from 'react'
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings'
import './App.css'
import { Box, Container, Stack, Typography, createTheme } from '@mui/material';
import { styled } from '@mui/material';
import { theme } from './Theme';
import Sidebar from './Component/Sidebar';
import Righrbar from './Component/Righrbar';
import Feed from './Component/Feed';
import Navbar from './Component/Navbar';
import Add from './Component/Add';
import { ThemeProvider } from '@emotion/react';
function App() {
  const[mode1,setmode]=useState("light")
  console.log("console.log:",mode1)
  const darkTheme=createTheme({
    palette:{
      mode:mode1,
    },
  })
  


  return (
    <ThemeProvider theme={darkTheme}>
    <Box sx={{border:"2px solid red" ,margin:"-14px"}}
    bgcolor={"background.default"}
    color={"text.primary"}
    >
      <Navbar></Navbar>
      
      
      <Stack spacing={2} direction="row" justifyContent={'space-between'}>
      <Sidebar setmode={setmode} mode1={mode1}></Sidebar>
     <Feed></Feed>
     <Righrbar></Righrbar>

      </Stack>
      <Add></Add>


    </Box>
    </ThemeProvider>  
  )
}

export default App
