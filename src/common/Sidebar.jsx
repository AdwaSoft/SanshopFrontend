import {
  Box,
  Button,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import { styled } from "@mui/material/styles";

import { navLinks } from "../assets/data";
const StyledSidebarIcon = styled(IconButton)(({ theme }) => ({
  width: "53px",
  height: "53px",
  paddingBottom: "1.5rem",
  paddingTop: "1.5rem",

  marginLeft: "1rem",
  marginRight: "1rem",

  fontSize: "1rem",
  textTransform: "capitalize",
  // color: `${theme.palette.text[500]}`,

  "&:hover": {
    borderRadius: "0.75rem",
    backgroundColor: `${theme.palette.primary[100]}}`,
  },
}));

const StyledSidebarButton = styled(Button)(({ theme }) => ({
  width: "180px",
  height: "43px",
  paddingLeft: "2rem",
  paddingRight: "7rem",
  marginLeft: "1rem",
  marginRight: "1rem",
  marginBottom: "1rem",
  fontSize: "0.875rem",
  textTransform: "capitalize",
  color: `${theme.palette.text[500]}`,

  "&:hover": {
    borderRadius: "0.75rem",
    backgroundColor: `${theme.palette.primary[100]}}`,
  },
}));
const Sidebar = ({ drawerOpen }) => {
  // const [drawerOpen, setDrawerOpen] = useState(true);
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="start"
      justifyContent="flex-start"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        color: "black",
        bgcolor: `${theme.palette.white[500]}`,
      }}
      id="sidebar"
      width={drawerOpen ? "220px" : "80px"}
      height="100vh"
    >
      <Toolbar />

      {!drawerOpen && (
        <StyledSidebarIcon>
          <StorefrontOutlinedIcon />
        </StyledSidebarIcon>
      )}
      {drawerOpen &&
        navLinks.map((item) => (
          <div key={item.title}>
            <Typography
              sx={{
                m: "1.5rem",
              }}
            >
              {item.title}
            </Typography>
            {item.menu.map((link, index) => (
              <div
                key={index}
                style={{
                  width: "160px",
                }}
              >
                <StyledSidebarButton startIcon={link.icon}>
                  {link.name}
                </StyledSidebarButton>
              </div>
            ))}
            <Divider />
          </div>
        ))}
    </Box>
  );
};

export default Sidebar;
