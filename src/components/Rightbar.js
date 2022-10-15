import React from 'react'
import { Box, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const Rightbar = () => {
  return (
    <Box  flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position='fixed'>
        <Typography variant='h6' fontWeight={200}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
    </AvatarGroup>
      </Box>
    </Box>
  )
}

export default Rightbar