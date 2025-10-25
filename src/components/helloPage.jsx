// src/Contente.jsx
import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import r1 from "../assets/imageProducts/r1.jpg"
import { Link } from "react-router-dom";
export default function HelloPage() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        px: { xs: 2, md: 8 },
        py: { xs: 4, md: 8 },
        minHeight: "70vh",
      }}
    >
      {/* النص */}
      <Box
        sx={{
          flex: { xs: "1 1 100%", md: "1 1 45%" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: theme.palette.primary.main,
            mb: 2,
          }}
        >
          Welcome to GlowPink
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontSize: "1.1rem",
            color: theme.palette.text.secondary,
          }}
        >
          The best online shopping experience for tech enthusiasts — discover
          the latest gadgets, devices, and accessories all in one place.
          <br />
          A unique shopping experience created by Asma and Ola to bring you the
          latest technology at the best prices.
        </Typography>
          

       <Link to="/regester" style={{ textDecoration: "none" }}>
  <Button
    variant="contained"
    color="primary"
    size="large"
    sx={{
      borderRadius: 2,
      textTransform: "none",
      px: 4,
      py: 1.2,
    }}
  >
    Get Started
  </Button>
</Link>

       
      </Box>

      {/* الصورة */}
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          flex: { xs: "1 1 100%", md: "1 1 45%" },
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
          mt: { xs: 4, md: 0 },
        }}
      >
        <img
          src={r1}
          alt="Tech products"
          width={400}
          height={400}
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "20px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        />
      </Box>
    </Box>
  );
}
