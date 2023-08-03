import React, { useState } from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";

import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products/Products";
import ProductCreate from "./pages/Products/ProductCreate";
import ProductDetail from "./pages/Products/ProductDetail";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";

import useMediaQuery from "@mui/material/useMediaQuery";
import EditProduct from "pages/Products/EditProduct";
import Layout from "common/Layout";

const App = () => {
  const nonMobile = useMediaQuery("(min-width:564px)");

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/managment/products" element={<Products />} />
        <Route path="/managment/productdelete/:id" element={<Products />} />
        <Route path="/managment/productsdetail" element={<ProductDetail />} />
        <Route path="/managment/productscreate" element={<ProductCreate />} />
        <Route path="/managment/products/:id" element={<EditProduct />} />
        <Route
          path="/managment/productsdetail/:id"
          element={<ProductDetail />}
        />
      </Route>
    </Routes>
  );
};

export default App;
