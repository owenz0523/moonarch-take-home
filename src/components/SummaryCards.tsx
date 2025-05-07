import { Grid, Paper, Typography, Box, Avatar } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import BugReportIcon from '@mui/icons-material/BugReport';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const summary = [
  {
    icon: <BarChartIcon color="primary" fontSize="large" />,
    label: 'Activity Monitoring',
    value: 42,
    color: '#e3f2fd',
  },
  {
    icon: <PieChartIcon sx={{ color: '#1976d2' }} fontSize="large" />,
    label: 'Status Pages',
    value: 4,
    color: '#e8f5e9',
  },
  {
    icon: <BugReportIcon sx={{ color: '#d32f2f' }} fontSize="large" />,
    label: 'Number of Incidents',
    value: 12,
    color: '#ffebee',
  },
  {
    icon: <EmojiEventsIcon sx={{ color: '#388e3c' }} fontSize="large" />,
    label: 'Global Uptime',
    value: '99.28%',
    color: '#e8f5e9',
  },
];

const SummaryCards = () => (
  <Grid container spacing={3} mb={3}>
    {summary.map((item) => (
      <Grid item xs={12} sm={6} md={3} key={item.label}>
        <Paper elevation={2} sx={{ p: 2, borderRadius: 3, display: 'flex', alignItems: 'center', gap: 2, bgcolor: item.color }}>
          <Avatar sx={{ bgcolor: 'white', color: 'primary.main', width: 48, height: 48, boxShadow: 1 }}>
            {item.icon}
          </Avatar>
          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              {item.label}
            </Typography>
            <Typography variant="h5" fontWeight={700} color="text.primary">
              {item.value}
            </Typography>
          </Box>
        </Paper>
      </Grid>
    ))}
  </Grid>
);

export default SummaryCards; 