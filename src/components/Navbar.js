import { AppBar, Toolbar , styled, Typography} from '@mui/material'
import React from 'react'
import NightlifeIcon from '@mui/icons-material/Nightlife';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})



const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:'none', sm:'block'}}}>JULIA BOOK</Typography>
        <NightlifeIcon sx={{display:{xs:'block`', sm:'none'}}}/>
      </StyledToolbar>

    </AppBar>
  )
}

export default Navbar