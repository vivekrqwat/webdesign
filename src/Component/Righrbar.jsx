import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import Convo from "./Convo.jsx"
import React from 'react'

export default function Righrbar() {
  return (
   
    <Box sx={{
        display:{xs:"none",sm:"block"}
    }} flex={2} p={2}>
    <Box position="fixed" width={300}>
      <Typography variant="h6" >ONLINE FRIENDS</Typography>
      <AvatarGroup max={7}>
  <Avatar alt="Remy Sharp" src="https://i.pinimg.com/564x/af/4c/1c/af4c1ceb6a9bf491e829d201ea2a02a5.jpg" />
  <Avatar alt="Travis Howard" src="https://staticbiassets.in/thumb/msid-49636231,width-700,height-525,imgsize-52744/how-does-clash-of-clans-work.jpg" />
  <Avatar alt="Cindy Baker" src="https://clashofclansnation.com/wp-content/uploads/2022/04/th-9.jpg" />
  <Avatar alt="https://static.vecteezy.com/system/resources/thumbnails/005/276/776/small_2x/logo-icon-person-on-white-background-free-vector.jpg" src="" />
  <Avatar alt="Agnes Walker" src="https://clashofclansnation.com/wp-content/uploads/2022/04/f58096cd710ceeef62f4500d75806994.jpg" />
  <Avatar alt="Trevor Henderson" src="https://i.pinimg.com/736x/9e/9f/7e/9e9f7e3c92d172e5594c0adef86fd666.jpg" />

  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>
<Typography> LATEST PIC</Typography>

<ImageList cols={3} rowHeight={100} gap={5} >
<ImageListItem >
  <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/unnamed_3_HNdkgHK.width-1300.png"></img>
</ImageListItem>
<ImageListItem>
  <img src="https://w0.peakpx.com/wallpaper/346/545/HD-wallpaper-clash-of-clans-town-hall-14-clash-of-clans-games-2021-games-artstation.jpg"></img>
</ImageListItem>
<ImageListItem>
  <img src="https://static-sg.winudf.com/wupload/xy/aprojectadmin/lohPMot3.jpeg?imageMogr2/thumbnail/600x"></img>
</ImageListItem>

</ImageList>
<Typography> LATEST CONVersation</Typography>
<Convo>
</Convo>
    </Box>
    
    </Box>
  )
}
