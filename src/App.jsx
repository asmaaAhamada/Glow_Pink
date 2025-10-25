import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import MainPage from './components/mainPage'
import { AppBar, Toolbar, Typography, Box, Button, IconButton, useTheme } from "@mui/material";
import PageRegester from './components/auth/regster';
import PageLogin from './components/auth/login';
import DetailsPage from './components/details';
import DashboardPage from './components/adminPage/dasbord/dashboard';
import OrdersPage from './components/adminPage/orders';
import CatigoreisPage from './components/adminPage/catigerais';
import SettingPage from './components/adminPage/setting';
import DashboardLayout from './components/adminPage/DashboardLayout';


export default function App(){
  return (
    <>
    

        <Routes>
                    <Route path="/home" element={<MainPage/>} />

          <Route path="/regester" element={<PageRegester/>} />
          <Route path="/login" element={<PageLogin/>} />
                    <Route path="/details" element={<DetailsPage/>} />
{/* ==================adminRouting======================= */}
                    <Route path="/" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="categories" element={<CatigoreisPage />} />
          <Route path="settings" element={<SettingPage />} />
        </Route>

   {/* ==================adminRouting======================= */}
       
        </Routes>
     
    </>
  )
}