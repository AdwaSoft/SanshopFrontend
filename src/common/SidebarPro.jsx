import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  Box,
  Button,
  Divider,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";

import { styled, useTheme } from "@mui/material/styles";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { KeyboardArrowRight } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import SubMenuList from "./SubMenuList";
const DashboardMenu = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: "black",
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const SubMenuTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.white[300],
    color: theme.palette.text[500],
    boxShadow: theme.shadows[2],
    describeChild: true,
    textDecoration: "none",
    width: "100px",
    height: "100px",
    textAlign: "start",
    padding: "4px 0 10px 0px",
    margin: "0px",
  },
}));

export const StyledSubMenuListButton = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  color: `${theme.palette.text[500]} !important`,
}));

const StyledsubMenu = ({
  menuToggled,
  setMenuToggled,
  title,
  to,
  icon,
  selected,
  setSelected,
  drawerCollapse,
}) => {
  const theme = useTheme();
  return (
    <Box>
      <SubMenuTooltip
        placement="right-start"
        title={drawerCollapse ? <SubMenuList to={to} /> : ""}
      >
        <MenuItem
          active={selected === title}
          style={{
            color: "black",
          }}
          onClick={() => {
            setMenuToggled(!menuToggled);
            setSelected(title);
          }}
          icon={icon}
          suffix={
            menuToggled ? (
              <KeyboardArrowDownIcon sx={{ mt: "0.3rem", pt: "0.3rem" }} />
            ) : (
              <KeyboardArrowRight sx={{ mt: "0.3rem", pt: "0.3rem" }} />
            )
          }
        >
          <Typography>{title}</Typography>
          <Link to={to} />
        </MenuItem>
      </SubMenuTooltip>
      {/* list */}
      {menuToggled && selected === title && !drawerCollapse && (
        <Box ml={3.4} display="flex" alignItems="start" justifyContent="start">
          <Box
            sx={{
              height: "70px",
              width: "2px",
              backgroundColor: `${theme.palette.primary[100]} !important`,
            }}
          />
          <Box display="flex" flexDirection="column" ml={3}>
            <StyledSubMenuListButton>
              {" "}
              <Link to="/managment/products" />
              List
            </StyledSubMenuListButton>

            {/* <StyledSubMenuListButton>
              {" "}
              <Link to={`${to}detail`} />
              Detail
            </StyledSubMenuListButton> */}
            <StyledSubMenuListButton>
              {" "}
              <Link to="/managment/productscreate" /> Create
            </StyledSubMenuListButton>
          </Box>
        </Box>
      )}
    </Box>
  );
};

const Sidebar = ({ drawerCollapsed }) => {
  const nonMobile = useMediaQuery("(min-width:564px)");
  const theme = useTheme();
  const [menuToggled, setMenuToggled] = useState(false);

  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      fontSize="13px"
      sx={{
        "& .pro-sidebar-inner": {
          background: `${theme.palette.white[500]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
          padding: "0 17px 0 0px",
        },
        "& .pro-inner-item": {
          padding: "3px 35px 3px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: `${theme.palette.primary[500]} !important`,
          border: `1px solid ${theme.palette.primary[100]}`,
          borderRadius: "10px",
          backgroundColor: `${theme.palette.primary[100]} !important`,
          pointerEvents: "auto",
        },
        "& .pro-menu-item.active": {
          color: `${theme.palette.primary[500]} !important`,
          border: `1px solid ${theme.palette.primary[100]}`,
          borderRadius: "10px",
          background: `${theme.palette.primary[100]} !important`,
        },

        "& .pro-menu-item": {
          mb: "8px",
        },
        "& .pro-item-content": {
          fontSize: "13px",
        },
      }}
    >
      <ProSidebar
        collapsedWidth="80px"
        width="220px"
        collapsed={drawerCollapsed}
      >
        <Menu iconShape="square">
          <Box pr="12%" paddingLeft={drawerCollapsed ? "15%" : "5%"}>
            <Toolbar />

            {/* <Typography
              fontWeight={drawerCollapsed ? "normal" : "bold"}
              textAlign={drawerCollapsed ? "left" : "center"}
              variant={drawerCollapsed ? "body1" : ""}
              margin={
                drawerCollapsed ? "15px 0px 15px 0px" : "25px 0px 25px 10px"
              }
              fontSize={drawerCollapsed ? "12px" : ""}
              sx={{
                color: theme.palette.text[500],
              }}
            >
              Dashboard
            </Typography>
            <DashboardMenu
              title="General"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <DashboardMenu
              title="Purchase"
              to="/purchasereport"
              icon={<InventoryOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <DashboardMenu
              title="Profit"
              to="/profit"
              icon={<MonetizationOnOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Divider
              sx={{
                mb: "20px",
                mt: "20px",
              }}
            /> */}
            {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4 */}

            {/* <Typography
              fontWeight={drawerCollapsed ? "normal" : "bold"}
              textAlign={drawerCollapsed ? "left" : "center"}
              variant={drawerCollapsed ? "body1" : ""}
              margin={
                drawerCollapsed ? "15px 0px 15px 0px" : "15px 0px 15px 10px"
              }
              fontSize={drawerCollapsed ? "12px" : ""}
              sx={{
                color: theme.palette.text[500],
              }}
            >
              Managment
            </Typography> */}

            <StyledsubMenu
              title="Products"
              to="/managment/products"
              icon={<Inventory2OutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              menuToggled={menuToggled}
              setMenuToggled={setMenuToggled}
              drawerCollapse={drawerCollapsed}
            />
            {/* <StyledsubMenu
              title="Users"
              to="/users"
              icon={<PeopleAltOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              menuToggled={menuToggled}
              setMenuToggled={setMenuToggled}
              drawerCollapse={drawerCollapsed}
            />
            <StyledsubMenu
              title="Shop "
              to="/shops"
              icon={<StorefrontOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              menuToggled={menuToggled}
              setMenuToggled={setMenuToggled}
              drawerCollapse={drawerCollapsed}
            />
            <StyledsubMenu
              title="Role"
              to="/roles"
              icon={<SecurityOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              menuToggled={menuToggled}
              setMenuToggled={setMenuToggled}
              drawerCollapse={drawerCollapsed}
            />
            <Divider
              sx={{
                mb: "20px",
                mt: "20px",
              }}
            />
            <Typography
              fontWeight={drawerCollapsed ? "normal" : "bold"}
              textAlign={drawerCollapsed ? "left" : "center"}
              variant={drawerCollapsed ? "body1" : ""}
              margin={
                drawerCollapsed ? "15px 0px 15px 0px" : "15px 0px 15px 10px"
              }
              fontSize={drawerCollapsed ? "12px" : ""}
              sx={{
                color: theme.palette.text[500],
              }}
            >
              Sales
            </Typography>
            <StyledsubMenu
              title="Sales"
              to="/sales"
              icon={<PointOfSaleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              menuToggled={menuToggled}
              setMenuToggled={setMenuToggled}
              drawerCollapse={drawerCollapsed}
            />
            <Divider
              sx={{
                mb: "20px",
                mt: "20px",
              }}
            />
            <Typography
              fontWeight={drawerCollapsed ? "normal" : "bold"}
              textAlign={drawerCollapsed ? "left" : "center"}
              variant={drawerCollapsed ? "body1" : ""}
              margin={
                drawerCollapsed ? "15px 0px 15px 0px" : "15px 0px 15px 10px"
              }
              fontSize={drawerCollapsed ? "12px" : ""}
              sx={{
                color: theme.palette.text[500],
              }}
            >
              Account
            </Typography>
            <StyledsubMenu
              title="Account"
              to="/Account"
              icon={<ManageAccountsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              menuToggled={menuToggled}
              setMenuToggled={setMenuToggled}
              drawerCollapse={drawerCollapsed}
            />
            <Divider
              sx={{
                mb: "20px",
                mt: "20px",
              }}
            />
            <Typography
              fontWeight={drawerCollapsed ? "normal" : "bold"}
              textAlign={drawerCollapsed ? "left" : "center"}
              variant={drawerCollapsed ? "body1" : ""}
              margin={
                drawerCollapsed ? "15px 0px 15px 0px" : "15px 0px 15px 10px"
              }
              fontSize={drawerCollapsed ? "12px" : ""}
              sx={{
                color: theme.palette.text[500],
              }}
            >
              Ecommerce
            </Typography>

            <StyledsubMenu
              title="Product"
              to="/products"
              icon={<Inventory2OutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              menuToggled={menuToggled}
              setMenuToggled={setMenuToggled}
              drawerCollapse={drawerCollapsed}
            />
            <StyledsubMenu
              title="User"
              to="/users"
              icon={<PeopleAltOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              menuToggled={menuToggled}
              setMenuToggled={setMenuToggled}
              drawerCollapse={drawerCollapsed}
            />
            <StyledsubMenu
              title="Shops "
              to="/shops"
              icon={<StorefrontOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              menuToggled={menuToggled}
              setMenuToggled={setMenuToggled}
              drawerCollapse={drawerCollapsed}
            />
            <StyledsubMenu
              title="Roles"
              to="/roles"
              icon={<SecurityOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              menuToggled={menuToggled}
              setMenuToggled={setMenuToggled}
              drawerCollapse={drawerCollapsed}
            />
            <Typography
              fontWeight={drawerCollapsed ? "normal" : "bold"}
              textAlign={drawerCollapsed ? "left" : "center"}
              variant={drawerCollapsed ? "body1" : ""}
              margin={
                drawerCollapsed ? "15px 0px 15px 0px" : "15px 0px 15px 10px"
              }
              sx={{
                color: theme.palette.text[500],
              }}
            >
              Sales
            </Typography>

            <StyledsubMenu
              title="Sales"
              to="/sales"
              icon={<PointOfSaleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              menuToggled={menuToggled}
              setMenuToggled={setMenuToggled}
              drawerCollapse={drawerCollapsed}
            /> */}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
