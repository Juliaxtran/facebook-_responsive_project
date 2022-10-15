import React from 'react'
import { Tooltip, IconButton } from '@mui/material'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'


function Add() {
  return (
    <>
      <Tooltip title="Add Post" sx={{
        position:'fixed',
        bottom:20,
        left:{xs:'calc(50% - 25px)', md: 30}}}>
        <IconButton>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </IconButton>
      </Tooltip>
    </>
  )
}

export default Add