import React from 'react';
import { Tooltip, IconButton, Modal, Box, Typography , styled, Avatar, TextField, Stack} from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import PersonAddIcon from '@mui/icons-material/PersonAdd';


function Add() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const StyledModal =  styled(Modal)({
    display: 'flex',
    alignItems:'center',
    justifyContent:'center'
  });


  const UserBox=  styled(Box)({
    display: 'flex',
    alignItems:'center',
    gap: '10px',
    marginBottom: '10px'
  });

  return (
    <>
      <Tooltip title="Add Post"
      onClick={handleOpen}
       sx={{
        position: 'fixed',
        bottom: 20,
        left: { xs: 'calc(50% - 25px)', md: 30 }
      }}>
        <IconButton>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </IconButton>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor='white' padding={3} borderRadius={5}>
         <Typography  variant='h6' color='gray' textAlign="center">Add Post</Typography>
         <UserBox>
          <Avatar src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Typography variant='span' textAlign="center" >Jessica Pham</Typography>
         </UserBox>
         <TextField
          sx={{width:'100%'}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
        />
        <Stack direction='row' gap={1} mt={2} mb={3}>
          <EmojiEmotionsIcon color='primary'/>
          <ImageIcon color='secondary'/>
          <VideoCameraFrontIcon color='success'/>
          <PersonAddIcon color='error'/>
        </Stack>
        </Box>
      </StyledModal>
    </>
  )
}

export default Add