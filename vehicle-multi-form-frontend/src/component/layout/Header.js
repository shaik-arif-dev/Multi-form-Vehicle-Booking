import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Container,
  IconButton,
  useScrollTrigger,
  Slide,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { 
  Menu as MenuIcon,
  DirectionsCar as CarIcon,
  Person as PersonIcon,
  Logout as LogoutIcon,
  Dashboard as DashboardIcon
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Add your logout logic here
    handleClose();
    navigate('/login');
  };

  return (
    <HideOnScroll>
      <AppBar 
        position="sticky" 
        color="default" 
        elevation={1}
        sx={{ 
          bgcolor: 'background.paper',
          backdropFilter: 'blur(10px)',
          background: 'rgba(255, 255, 255, 0.8)',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
          margin: '0 auto',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* Logo / Brand */}
            <Box 
              component={Link} 
              to="/" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                textDecoration: 'none',
                color: 'primary.main',
                '&:hover': {
                  opacity: 0.8
                }
              }}
            >
              <CarIcon sx={{ fontSize: 32, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ 
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                }}
              >
                VEHICLE BOOKING
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
              <Button 
                component={Link} 
                to="/" 
                color="inherit"
                sx={{ 
                  textTransform: 'none',
                  fontWeight: 500,
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: 'rgba(25, 118, 210, 0.04)'
                  }
                }}
              >
                Home
              </Button>
              <Button 
                component={Link} 
                to="/bookings" 
                color="inherit"
                sx={{ 
                  textTransform: 'none',
                  fontWeight: 500,
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: 'rgba(25, 118, 210, 0.04)'
                  }
                }}
              >
                My Bookings
              </Button>
              
              {/* User Profile Menu */}
              <IconButton
                onClick={handleMenu}
                size="small"
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                sx={{ 
                  ml: 1,
                  bgcolor: 'primary.light',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    '& .MuiSvgIcon-root': {
                      color: 'white'
                    }
                  }
                }}
              >
                <PersonIcon sx={{ color: 'primary.contrastText' }} />
              </IconButton>
            </Box>

            {/* Mobile Menu Button */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>

        {/* Mobile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.1))',
              mt: 1.5,
              minWidth: 200,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={() => navigate('/profile')}>
            <Avatar /> Profile
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => navigate('/bookings')}>
            <ListItemIcon>
              <DashboardIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>My Bookings</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </MenuItem>
        </Menu>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;