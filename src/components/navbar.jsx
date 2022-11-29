import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Router from 'next/router';

const drawerWidth = 240;
const navItems = ['Popular', 'Latest', 'Trending'];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Link href={"/"}>
        <Typography variant="h6" sx={{ my: 2 }}>
          onlyMovies
        </Typography>
      </Link>
      <Divider />
      <List>
          <ListItem disablePadding>
            <Link href={"/"}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary="Popular" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link href={"/trending"}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary="Trending" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link href={"/tv"}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary="TV Shows" />
              </ListItemButton>
            </Link>
          </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', mb: 5}}>
      <AppBar style={{backgroundColor: "black"}} component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link href='/'>
                onlyMovies
            </Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button  sx={{ color: '#fff' }}>
                <Link href={"/"}>
                  Popular
                </Link>
              </Button>
              <Button  sx={{ color: '#fff' }}>
                <Link href={"/trending"}>
                  Trending
                </Link>
              </Button>
              <Button  sx={{ color: '#fff' }}>
                <Link href={"/tv"}>
                  TV Shows
                </Link>
              </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}



export default Navbar;
