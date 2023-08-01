import React, { useState } from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import Appbar from "./common/Appbar";
import SidebarPro from "./common/SidebarPro";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products/Products";
import ProductCreate from "./pages/Products/ProductCreate";
import ProductDetail from "./pages/Products/ProductDetail";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import EditProduct from "pages/Products/EditProduct";

const App = () => {
  const nonMobile = useMediaQuery("(min-width:564px)");
  const theme = useTheme();
  // const drawerCollapsed = useSelector((state) => state.general.collapsed)
  const [drawerCollapsed, setDrawerCollapsed] = useState(false);
  return (
    <Box className="app" id="main content">
      <Appbar
        drawerCollapsed={drawerCollapsed}
        setDrawerCollapsed={setDrawerCollapsed}
      />
      <CssBaseline />
      <Toolbar />
      <Box
        id="main content"
        display="flex"
        justifyContent="start"
        alignItems="center"
      >
        {/* <Sidebar drawerOpen={drawerOpen} /> */}
        <Box
          sx={{
            position: "fixed",
            top: 30,
            left: 0,
            height: "100vh",

            "&:hover": {
              overflowY: "scroll",
            },
            overflow: "hidden",
          }}
        >
          <SidebarPro drawerCollapsed={drawerCollapsed} />
        </Box>

        <Box
          sx={{
            borderRadius: "10px",
            backgroundColor: `${theme.palette.background[500]}`,
            mt: 2,
            p: { xs: 0, sm: 4 },
          }}
          width={drawerCollapsed ? "92.2%" : "84%"}
          marginLeft={drawerCollapsed ? "91px" : "220px"}
          id="content"
          height="auto"
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/managment/products" element={<Products />} />
            <Route path="/managment/productdelete/:id" element={<Products />} />
            <Route
              path="/managment/productsdetail"
              element={<ProductDetail />}
            />
            <Route
              path="/managment/productscreate"
              element={<ProductCreate />}
            />
            <Route path="/managment/products/:id" element={<EditProduct />} />
            <Route
              path="/managment/productsdetail/:id"
              element={<ProductDetail />}
            />
          </Routes>
        </Box>
        {/* <Box backgroundColor="white" height="400px" width="30px"></Box> */}
      </Box>
    </Box>
  );
};

export default App;
