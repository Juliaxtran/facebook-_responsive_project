import { AppBar, Toolbar, styled, Typography, Box, InputBase , Badge, Avatar} from '@mui/material'
import React from 'react'
import NightlifeIcon from '@mui/icons-material/Nightlife';
import MailIcon from '@mui/icons-material/Mail';
import Notification from '@mui/icons-material/Notifications';



const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}))

// if the break point is larger the small the displat will be flex

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: "20px",
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display:"flex"
  }
}))

const UserBox = styled(Box)(({ theme }) => ({
display: 'none',
alignItems: 'center',
gap: "10px",
[theme.breakpoints.down('sm')]: {
display:  'flex'
}

}));

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>JULIA BOOK</Typography>
        <NightlifeIcon sx={{ display: { xs: 'block`', sm: 'none' } }} />
        <Search><InputBase placeholder='search...' /></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon  />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notification />
          </Badge>
          <Avatar sx={{width: 30, height: 30}} src='https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        </Icons>
        <UserBox >
        <Avatar sx={{width: 30, height: 30}} src='https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <Typography variant='span'>Julia</Typography>
        </UserBox>
      </StyledToolbar>

    </AppBar>
  )
}

export default Navbar