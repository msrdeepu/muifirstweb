import React, {useState} from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
// import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import {Add as AddIcon} from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { Avatar } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import ImageIcon from '@mui/icons-material/Image';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
})

export default function Add() {
    const [open, setOpen] = useState(false)
  return (
    <>
    <Tooltip
    onClick={(e)=> {setOpen(true)}} 
    title="Delete" 
    sx={{
        position:"fixed", 
        bottom:20, 
        left:{
            xs:"calc(50%-25%)", 
            md:30}}}>
    <Fab 
    color="primary" 
    aria-label="add">
        <AddIcon />
    </Fab>
    </Tooltip>
    <StyledModal
        open={open}
        onClose={(e)=> {setOpen(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  
        width={400} 
        height={300} 
        bgcolor={"background.default"} 
        color={"text.primary"} 
        p={3} borderRadius={5} 
        border={"none"} 
        >
          <Typography 
          variant='h6' 
          textAlign={"center"} 
          color="gray"
          >Create Post
          </Typography>
          <UserBox>
            <Avatar
            src="https://res.cloudinary.com/dawjtloik/image/upload/v1675430905/my%20portfolio%20site/pic2_ujjfjr.png"
            sx={{width:30,height:30}}
             />
             <Typography fontWeight={500} variant='span'>Sandeep Reddy</Typography>
          </UserBox>
          <TextField
          id="standard-multiline-static"
          sx={{width:"100%"}}
          multiline
          rows={3}
          placeholder="What,s on Your mind?"
          variant="standard"
        />
        <Stack direction={"row"} gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color='primary' />
            <ImageIcon color='secondary' />
            <VideoCameraBackIcon color='success'/>
            <PersonAddIcon color='error'/>
        </Stack>
        <ButtonGroup
        fullWidth 
        variant="contained" 
        aria-label="outlined primary button group">
            <Button>
                Post
            </Button>
            <Button 
            sx={{width:"100px"}}
            >
                <CalendarMonthIcon />
            </Button>
            
        </ButtonGroup>
        </Box>
      </StyledModal>
  </>
  )
}
