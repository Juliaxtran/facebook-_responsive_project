import React from 'react'
import { Box, List, ListItem, Switch } from '@mui/material'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import ModeNightIcon from '@mui/icons-material/ModeNight';



const Sidebar = () => {
   const [checked, setChecked] = React.useState(true);

   const handleChange = (event) => {
     setChecked(event.target.checked);
   };
   return (
      <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
         <List>
            <ListItem disablePadding>
               <ListItemButton component='a' href='#'>
                  <ListItemIcon>
                     <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Homepage" />
               </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
               <ListItemButton component='a' href='#'>
                  <ListItemIcon>
                     <ArticleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Pages" />
               </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
               <ListItemButton component='a' href='#'>
                  <ListItemIcon>
                     <GroupIcon />
                  </ListItemIcon>
                  <ListItemText primary="Groups" />
               </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
               <ListItemButton component='a' href='#'>
                  <ListItemIcon>
                     <StorefrontIcon />
                  </ListItemIcon>
                  <ListItemText primary="Marketplace" />
               </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
               <ListItemButton component='a' href='#'>
                  <ListItemIcon>
                     <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="Friends" />
               </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
               <ListItemButton component='a' href='#'>
                  <ListItemIcon>
                     <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
               </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
               <ListItemButton component='a' href='#'>
                  <ListItemIcon>
                     <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
               </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
               <ListItemButton component='a' href='#'>
                  <ListItemIcon>
                   <ModeNightIcon/>
                  </ListItemIcon>
                  <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{'aria-label': 'controlled'}} />
               </ListItemButton>
            </ListItem>
         </List>
      </Box>
   )
}

export default Sidebar