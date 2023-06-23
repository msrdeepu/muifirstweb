import React from "react";
import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import AddToHomeScreenIcon from "@mui/icons-material/AddToHomeScreen";
import { Box } from "@mui/material";
import { InputBase } from "@mui/material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
}));

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          LOGO
        </Typography>
        <AddToHomeScreenIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            alt="Sandeep"
            src="https://res.cloudinary.com/dawjtloik/image/upload/v1670395600/education_site/student-3_huc8y4.png"
            sx={{ width: 30, height: 30 }}
          />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
}
