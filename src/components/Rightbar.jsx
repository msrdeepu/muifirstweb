import React from "react";
import { Box, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

export default function Rightbar() {
  return (
    <Box
      
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed" width={350}>
        <Typography 
        variant="h6" 
        fontWeight={100}
        >
        Online Friends
        </Typography>
        <AvatarGroup max={7}>
            <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/dawjtloik/image/upload/v1662982218/my%20portfolio%20site/tourism/tour-2_2x_tbq9ih.png" />
            <Avatar alt="Travis Howard" src="https://res.cloudinary.com/dawjtloik/image/upload/v1675430905/my%20portfolio%20site/pic1_cjpji8.png" />
            <Avatar alt="Cindy Baker" src="https://res.cloudinary.com/dawjtloik/image/upload/v1675430906/my%20portfolio%20site/pic3_e8wiuq.png" />
            <Avatar alt="Agnes Walker" src="https://res.cloudinary.com/dawjtloik/image/upload/v1662982218/my%20portfolio%20site/tourism/tour-1_2x_fuscev.png" />
            <Avatar alt="Trevor Henderson" src="https://res.cloudinary.com/dawjtloik/image/upload/v1662982219/my%20portfolio%20site/tourism/united_nd27lg.jpg" />
            <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/dawjtloik/image/upload/v1662982217/my%20portfolio%20site/tourism/img-customer_2x-900x500_monxoo.png" />
            <Avatar alt="Travis Howard" src="https://res.cloudinary.com/dawjtloik/image/upload/v1675430905/my%20portfolio%20site/pic1_cjpji8.png" />
            <Avatar alt="Cindy Baker" src="https://res.cloudinary.com/dawjtloik/image/upload/v1675430906/my%20portfolio%20site/pic3_e8wiuq.png" />
            <Avatar alt="Agnes Walker" src="https://res.cloudinary.com/dawjtloik/image/upload/v1675430905/my%20portfolio%20site/pic2_ujjfjr.png" />
            <Avatar alt="Trevor Henderson" src="https://res.cloudinary.com/dawjtloik/image/upload/v1675430905/my%20portfolio%20site/pic1_cjpji8.png" />
        </AvatarGroup>
        <Typography 
        variant="h6" 
        fontWeight={100}
        mt={2}
        mb={2}
        >
        Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
              <img 
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              alt="latest-pic"
              />
            </ImageListItem>
            <ImageListItem>
              <img 
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
              alt="latest-pic"
              />
            </ImageListItem>
            <ImageListItem>
              <img 
              src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
              alt="latest-pic"
              />
            </ImageListItem>
            <ImageListItem>
              <img 
              src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
              alt="latest-pic"
              />
            </ImageListItem>
            <ImageListItem>
              <img 
              src="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
              alt="latest-pic"
              />
            </ImageListItem>
            <ImageListItem>
              <img 
              src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6"
              alt="latest-pic"
              />
            </ImageListItem>
        </ImageList>
        <Typography 
        variant="h6" 
        fontWeight={100}
        mt={2}
        
        >
        Recent Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/dawjtloik/image/upload/v1662982217/my%20portfolio%20site/tourism/img-customer_2x-900x500_monxoo.png" />
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
          <Avatar alt="Travis Howard" src="https://res.cloudinary.com/dawjtloik/image/upload/v1662982218/my%20portfolio%20site/tourism/img-slider_hykfow.png" />
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
          <Avatar alt="Cindy Baker" src="https://res.cloudinary.com/dawjtloik/image/upload/v1662982217/my%20portfolio%20site/tourism/tour_img-1355873-145-1_etiu30.jpg" />
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
  );
}
