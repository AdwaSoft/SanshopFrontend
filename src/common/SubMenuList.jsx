import React from "react";
import StyledSubMenuListButton from "./SidebarPro";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import { ListAltRounded } from "@mui/icons-material";

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  fontSize: "16px",
  color: `${theme.palette.text[500]}`,
}));

const SubMenuList = ({ to }) => {
  const theme = useTheme();
  return (
    <Box>
      <List dense>
        <ListItem>
          <FiberManualRecordRoundedIcon
            sx={{
              width: "10px",
              height: "10px",
              color: `${theme.palette.text[500]}`,
            }}
            fontSize="small"
            color="primary"
          />
          <ListItemButton>
            <StyledLink to="/managment/products">List</StyledLink>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <FiberManualRecordRoundedIcon
            sx={{
              width: "10px",
              height: "10px",
              color: `${theme.palette.text[500]}`,
            }}
            fontSize="small"
          />
          <ListItemButton>
            <StyledLink to="managment/productscreate">Create</StyledLink>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default SubMenuList;
