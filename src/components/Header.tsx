import { AppBar, Toolbar, Typography, Box, Button, Avatar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => (
  <AppBar position="fixed" color="inherit" elevation={1} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    <Toolbar>
      <Box display="flex" alignItems="center" flexGrow={1}>
        {onMenuClick && (
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={onMenuClick} sx={{ mr: 1 }}>
            <MenuIcon />
          </IconButton>
        )}
        <img src="https://cdn-icons-png.flaticon.com/512/188/188987.png" alt="Logo" width={32} height={32} style={{ marginRight: 12 }} />
        <Typography variant="h6" color="primary" fontWeight={700} sx={{ letterSpacing: 1 }}>
          Moonarch
        </Typography>
      </Box>
      <Typography variant="body1" color="text.secondary" sx={{ mr: 2 }}>
        Hello, Trainer
      </Typography>
      <Avatar alt="User" src="https://randomuser.me/api/portraits/lego/1.jpg" />
    </Toolbar>
  </AppBar>
);

export default Header; 