import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import MainPage from './components/mainPage'
import { AppBar, Toolbar, Typography, Box, Button, IconButton, useTheme } from "@mui/material";


export default function App(){
  return (
    <>
    
    <MainPage/>
        {/* <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes> */}
     
    </>
  )
}