
import { AppBar, Toolbar, Typography, Box, Button, IconButton, useTheme } from "@mui/material";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useThemeContext } from "../desighn/ThemeContext";
import { Link } from "react-router-dom";

export default function NavPage() {
  const theme = useTheme();
  const { mode, setMode } = useThemeContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{     zIndex: (theme) => theme.zIndex.drawer + 1, // ✅ هذا يخلي الناف فوق السايدبار
bgcolor: theme.palette.background.paper, boxShadow: `1px 1px 1px ${theme.palette.primary.main}`}} position="fixed">
        <Toolbar>
          <IconButton size="large" edge="start" sx={{ mr: 2, color: theme.palette.primary.main }}>
            <LocalGroceryStoreIcon />
          </IconButton>

          <Typography variant="h6" sx={{ color: theme.palette.text.primary, flexGrow: 1 }}>
            GlowPink
          </Typography>
                     <Link to="/home"  style={{ textDecoration: 'none' }}>


          <Typography className="media" variant="h6" sx={{ color: theme.palette.text.primary, flexGrow: 1 ,mr:2

// ,@midea screen 

          }}>
            Home
          </Typography>
</Link>
         
          <div style={{ justifyContent: "space-between", gap: "15px", display: "flex", alignItems: "center" }}>
            {/* ===============sighn_up====================== */}
           <Link to="/regester">
              <Button sx={{ border: `2px solid ${theme.palette.primary.main}`, borderRadius: "5px", color: theme.palette.text.primary }}>
                Regester
              </Button>
           </Link>

                      <Link to="/login">

              <Button sx={{ backgroundColor: theme.palette.background.paper, borderRadius: "5px", color: theme.palette.primary.main }}>
                Login
              </Button>
           </Link>
                        {/* ===============///sighn_up/////====================== */}

            {/* زر تغيير الوضع */}
            <IconButton sx={{ color: mode === 'light' ? '#000' : '#fff', 
          bgcolor: mode === 'light' ? '#fff' : '#333', // خلفية خفيفة للأيقونة
          '&:hover': {
            bgcolor: mode === 'light' ? '#eee' : '#444',
          },}} onClick={() => setMode(mode === "light" ? "dark" : "light")} color="inherit">
              {mode === "light" ? <DarkMode /> : <LightMode />}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
