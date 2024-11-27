import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, IconButton, Box } from '@mui/material';
import { AccountCircle, Menu as MenuIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { logout } from './authUtils';

import logo from '../src/assets/DiGiPo.png';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#002B5B', // Navy blue
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '5px 0',
      }}
    >
      <Toolbar>
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {/* Logo and Portal Name */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              gap: 1.5, // Space between logo and text
              flexGrow: 1,
            }}
            onClick={() => navigate('/home')}
          >
            <img src={logo} alt="Portal Logo" style={{ width: 40, height: 40 }} /> {/* Logo */}
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontWeight: 700,
                letterSpacing: 1.1,
                color: '#FFF',
                fontSize: { xs: '1.2rem', sm: '1.5rem' },
                textTransform: 'uppercase',
              }}
            >
              DiGiPo-Anything Else
            </Typography>
          </Box>

          {/* Menu Icon for Mobile */}
          <Box
            sx={{
              display: { xs: 'block', sm: 'none' },
              flexGrow: 0,
            }}
          >
            <IconButton
              sx={{
                color: '#FFF',
              }}
              onClick={toggleMenu}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Navigation Links */}
          <Box
            sx={{
              display: { xs: isMenuOpen ? 'flex' : 'none', sm: 'flex' },
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              gap: 2,
              backgroundColor: { xs: '#002B5B', sm: 'transparent' },
              position: { xs: 'absolute', sm: 'static' },
              top: { xs: '50px', sm: 'auto' },
              left: 0,
              width: { xs: '100%', sm: 'auto' },
              padding: { xs: '10px 0', sm: 0 },
              zIndex: { xs: 10, sm: 'auto' },
            }}
          >
            <Button
              sx={{
                color: '#FFF',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
              onClick={() => navigate('/cases')}
            >
              Cases to File
            </Button>
            <Button
              sx={{
                color: '#FFF',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
              onClick={() => navigate('/complaint-form')}
            >
              File a Complaint
            </Button>
            <Button
              sx={{
                color: '#FFF',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
              onClick={() => navigate('/usercases')}
            >
              Track Complaint
            </Button>
            <Button
              sx={{
                color: '#FFF',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
              onClick={() => navigate('/about')}
            >
              About Us
            </Button>
            <Button
              sx={{
                color: '#FFF',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
              onClick={logout}
            >
              LOGOUT
            </Button>
            <IconButton
              sx={{
                color: '#FFF',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
              onClick={() => navigate('/profile')}
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
