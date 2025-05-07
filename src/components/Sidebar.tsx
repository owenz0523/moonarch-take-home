import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Divider, IconButton } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import TableChartIcon from '@mui/icons-material/TableChart';
import AddChartIcon from '@mui/icons-material/AddChart';
import CloseIcon from '@mui/icons-material/Close';
import type { DrawerProps } from '@mui/material';

const drawerWidth = 220;

type SidebarProps = {
  open: boolean;
  onClose: () => void;
  variant?: DrawerProps['variant'];
};

const Sidebar = ({ open, onClose, variant = 'permanent' }: SidebarProps) => (
  <Drawer
    variant={variant}
    open={open}
    onClose={onClose}
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
    }}
  >
    <Toolbar sx={{ justifyContent: 'flex-end', minHeight: 64 }}>
      {variant === 'temporary' && (
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      )}
    </Toolbar>
    <Divider />
    <List>
      <ListItem button>
        <ListItemIcon><BarChartIcon /></ListItemIcon>
        <ListItemText primary="Stats Chart" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><PieChartIcon /></ListItemIcon>
        <ListItemText primary="Type Chart" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><TableChartIcon /></ListItemIcon>
        <ListItemText primary="Data Table" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><AddChartIcon /></ListItemIcon>
        <ListItemText primary="Add Chart" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar; 