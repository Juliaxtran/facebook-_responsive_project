import React from 'react'
import { Box, ImageList, Typography , ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Divider} from '@mui/material'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const Rightbar = () => {
  return (
    <Box  flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position='fixed'>
        <Typography variant='h6' fontWeight={200}>
          Online Friends
        </Typography>
        <AvatarGroup max={6}  width={200}>
      <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=300" />
      <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=300" />
      <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/5794559/pexels-photo-5794559.jpeg?auto=compress&cs=tinysrgb&w=300" />
      <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/5199158/pexels-photo-5199158.jpeg?auto=compress&cs=tinysrgb&w=300" />
      <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/3616501/pexels-photo-3616501.jpeg?auto=compress&cs=tinysrgb&w=300" />
      <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/3616501/pexels-photo-3616501.jpeg?auto=compress&cs=tinysrgb&w=300" />
    </AvatarGroup>
    <Typography variant='h6' fontWeight={200} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} gap={4} rowHeight={100} >
          <ImageListItem>
            <img
              srcSet="https://images.pexels.com/photos/4655426/pexels-photo-4655426.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Waves"/>
          </ImageListItem>
          <ImageListItem>
            <img
              srcSet="https://images.pexels.com/photos/9890370/pexels-photo-9890370.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=252&fit=crop&h=408"
              alt="Waves"/>
          </ImageListItem>
          <ImageListItem>
            <img
              srcSet="https://images.pexels.com/photos/13912725/pexels-photo-13912725.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Waves"/>
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={200} mt={2}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1812634/pexels-photo-1812634.jpeg?auto=compress&cs=tinysrgb&w=300" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/6019152/pexels-photo-6019152.jpeg?auto=compress&cs=tinysrgb&w=300" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/12599059/pexels-photo-12599059.jpeg?auto=compress&cs=tinysrgb&w=300" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default Rightbar