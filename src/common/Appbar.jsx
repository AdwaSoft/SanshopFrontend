import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  InputAdornment,
  InputBase,
  Link,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../assets/san-logo.png";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginLeft: "15px",
  marginRight: "15px",
  fontWeight: "normal",
  fontSize: "14px",
  width: "30px",
  height: "30px",
  border: `1px solid ${theme.palette.primary[200]} `,
  backgroundColor: ` ${theme.palette.primary[100]}`,
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: ` ${theme.palette.primary[700]}`,
    color: ` ${theme.palette.white[300]}`,
    fontWeight: "normal",
  },
}));

const StyledIconButtonBlue = styled(IconButton)(({ theme }) => ({
  border: `1px solid ${theme.palette.blue[200]} `,
  backgroundColor: ` ${theme.palette.blue[100]}`,
  borderRadius: "5px",
  width: "30px",
  height: "30px",
  "&:hover": {
    backgroundColor: ` ${theme.palette.blue[500]}`,
    color: ` ${theme.palette.white[300]}`,
  },
}));
const Appbar = ({ drawerCollapsed, setDrawerCollapsed }) => {
  // const [drawerOpen, setDrawerOpen] = useState(true);
  const nonMobile = useMediaQuery("(min-width:564px)");
  const theme = useTheme();
  const [clicked, setClicked] = useState(false);
  const handleSidebar = () => {
    setDrawerCollapsed(!drawerCollapsed);
  };
  return (
    <Box mt={1}>
      <AppBar
        elevation={0}
        id="nav"
        style={{
          paddingTop: "10px",
          backgroundColor: "white",
          color: `${theme.palette.primary[500]}`,
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <img src={logo} width="65px" height="auto" marginleft="0px" />
          </Box>

          {nonMobile && (
            <Typography
              variant="h5"
              sx={{
                color: `${theme.palette.text[500]}`,
                fontWeight: 700,
                mr: { xs: "0px", sm: "70px" },
                textTransform: "capitalize",
              }}
            >
              SHOP
            </Typography>
          )}

          <StyledIconButton onClick={handleSidebar}>
            <MenuIcon />
          </StyledIconButton>
          <Box flexGrow={1}>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton disabled>
                      <SearchOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                width: { xs: "240px", sm: "500px" },
                mr: { xs: 2, sm: "" },
              }}
            ></TextField>
          </Box>
          {nonMobile && (
            <Box display="flex">
              <StyledIconButton>
                <NotificationsNoneIcon />
              </StyledIconButton>
              <StyledIconButtonBlue>
                <TranslateOutlinedIcon />
              </StyledIconButtonBlue>
              <StyledIconButton>
                <StoreOutlinedIcon />
              </StyledIconButton>
            </Box>
          )}
          {nonMobile && (
            <Button
              startIcon={
                <Avatar
                  sx={{
                    width: "24px",
                    height: "24px",
                  }}
                />
              }
              endIcon={<SettingsOutlinedIcon />}
              variant="outlined"
              clickable="true"
              sx={{
                height: "40px",
                borderRadius: "40px",
                border: `1px solid ${theme.palette.blue[200]} `,
                backgroundColor: ` ${theme.palette.blue[100]}`,

                "&:hover": {
                  backgroundColor: ` ${theme.palette.blue[500]}`,
                  color: ` ${theme.palette.white[300]}`,
                },
              }}
            />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
