import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import MainPage from './components/mainPage'
import { AppBar, Toolbar, Typography, Box, Button, IconButton, useTheme } from "@mui/material";
import PageRegester from './components/auth/regster';
import PageLogin from './components/auth/login';
import DetailsPage from './components/details';


export default function App(){
  return (
    <>
    
   
        <Routes>
          <Route path="/" element={<MainPage/>} />
                    <Route path="/home" element={<MainPage/>} />

          <Route path="/regester" element={<PageRegester/>} />
          <Route path="/login" element={<PageLogin/>} />
                    <Route path="/details" element={<DetailsPage/>} />


          
        </Routes>
     
    </>
  )
}