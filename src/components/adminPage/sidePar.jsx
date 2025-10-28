

import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Outlet, useLocation } from 'react-router-dom';
//icon
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import StoreIcon from '@mui/icons-material/Store';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'; 


import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';


const drawerWidth = 240;

function SidPar(props) {

const pages = ['Dashboard', 'Products','Orders', 'Categories','Users'];


const iconsMap = {
  Dashboard: <DashboardIcon />,
  Products :<StoreIcon/>,
    Users :<PeopleAltIcon/>,

  Orders: <ShoppingCartIcon />,
  Categories: <CategoryIcon />,
  
};

const location = useLocation();

  const theme = useTheme();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
      {pages.map((text, index) => {
const href = `/${text.toLowerCase()}`;
const isActive = location.pathname === href;
 // /dashboard, /orders, /categories, /settings
        return (
          <ListItem key={text} disablePadding>
          <ListItemButton
  component={Link}
  to={href}
  sx={{
    bgcolor: isActive ? theme.palette.primary.main : 'transparent',
    color: isActive ? '#fff' : 'inherit', 
    '&:hover': {
      bgcolor: isActive ? theme.palette.primary.dark : theme.palette.action.hover
    }
  }}
>

              <ListItemIcon  sx={{
    color: isActive ? theme.palette.primary.main : theme.palette.primary.main,
    color: isActive ? '#fff' :  "#d628ab", 
    '&:hover': {
      color: isActive ? theme.palette.primary.dark : theme.palette.action.hover
    }
  }} >
            {iconsMap[text]}
          </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/*  زر فتح السايد بار على الموبايل */}
       <IconButton
       
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
                    sx={{ position: 'fixed', top: 50, left: 16, zIndex: 12000, display: { sm: "none" }, color: theme.palette.primary.main }}

        // sx={{ display: { sm: 'none' }, position: 'fixed', top: 80, left: 16, zIndex: 1200 }}
      >
        <MenuIcon />
      </IconButton>

      {/* ✅ Drawer */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* ✅ المحتوى الرئيسي */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

SidPar.propTypes = {
  window: PropTypes.func,
};

export default SidPar;
