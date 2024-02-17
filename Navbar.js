import React from 'react';
import { AppBar, Toolbar, Button,Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="fixed" color='inherit'>
      <Container maxWidth="lg" >
        <Toolbar sx={{ padding: 0   }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
            PHARMACY MANAGEMENT
          </Typography>
          <Button component={Link} to="/" color="inherit" sx={{ fontSize: '0.8rem', padding: '8px' }}>
            Home
          </Button>
          <Button component={Link} to="/Login" color="inherit" sx={{ fontSize: '0.8rem', padding: '8px' }}>
            Login
          </Button>
          <Button component={Link} to="/Signup" color="inherit" sx={{ fontSize: '0.8rem', padding: '8px' }}>
            Signup
          </Button>
          <Button component={Link} to="/About" color="inherit" sx={{ marginLeft: 'auto', fontSize: '0.8rem', padding: '8px' }}>
            About
          </Button>
          <Button component={Link} to="/Medicines" color="inherit" sx={{ marginLeft: 'auto', fontSize: '0.8rem', padding: '8px' }}>
            Medicines
          </Button>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;