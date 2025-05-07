import { useState, useEffect } from 'react';
import { Box, Container, Paper, Typography, CircularProgress, Alert, Stack, useMediaQuery, Avatar, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { fetchPokemonList, fetchMultiplePokemon } from '../services/pokemonApi';
import type { Pokemon } from '../types/pokemon';
import PokemonTable from './PokemonTable';
import PokemonStatsChart from './PokemonStatsChart';
import PokemonTypeChart from './PokemonTypeChart';
import PokemonHeightWeightChart from './PokemonHeightWeightChart';
import PokemonExperienceChart from './PokemonExperienceChart';
import Sidebar from './Sidebar';
import Header from './Header';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import TimelineIcon from '@mui/icons-material/Timeline';

const chartOptions = [
  { key: 'stats', label: 'Stats Chart', icon: <BarChartIcon color="primary" />, component: PokemonStatsChart },
  { key: 'type', label: 'Type Chart', icon: <PieChartIcon color="primary" />, component: PokemonTypeChart },
  { key: 'heightWeight', label: 'Height vs Weight', icon: <ScatterPlotIcon color="primary" />, component: PokemonHeightWeightChart },
  { key: 'experience', label: 'Base Experience', icon: <TimelineIcon color="primary" />, component: PokemonExperienceChart },
];

const Dashboard = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCharts, setActiveCharts] = useState<string[]>(['stats', 'type', 'heightWeight', 'experience']);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        setLoading(true);
        const listResponse = await fetchPokemonList(20);
        const pokemonNames = listResponse.results.map(p => p.name);
        const pokemonData = await fetchMultiplePokemon(pokemonNames);
        setPokemon(pokemonData);
        setError(null);
      } catch (err) {
        setError('Failed to load Pokemon data. Please try again later.');
        console.error('Error loading Pokemon:', err);
      } finally {
        setLoading(false);
      }
    };
    loadPokemon();
  }, []);

  const handleSidebarOpen = () => setSidebarOpen(true);
  const handleSidebarClose = () => setSidebarOpen(false);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={3}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', bgcolor: '#f6f8fb', minHeight: '100vh' }}>
      <Header onMenuClick={isSmall ? handleSidebarOpen : undefined} />
      <Sidebar
        open={isSmall ? sidebarOpen : true}
        onClose={handleSidebarClose}
        variant={isSmall ? 'temporary' : 'permanent'}
      />
      <Box component="main" sx={{ flexGrow: 1, p: { xs: 1, sm: 3 }, width: '100vw', maxWidth: '100vw', mt: 8 }}>
        <Container maxWidth={false} sx={{ mt: 2, mb: 4, px: { xs: 0, sm: 2 } }}>
          <Grid container spacing={3} mb={3}>
            {activeCharts.map(key => {
              const chart = chartOptions.find(opt => opt.key === key);
              if (!chart) return null;
              const ChartComponent = chart.component;
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={key} display="flex">
                  <Paper
                    sx={{
                      p: 0,
                      borderRadius: 4,
                      boxShadow: 3,
                      minWidth: 0,
                      width: '100%',
                      maxWidth: '100%',
                      bgcolor: 'background.paper',
                      transition: 'box-shadow 0.2s',
                      '&:hover': { boxShadow: 8 },
                      display: 'flex',
                      flexDirection: 'column',
                      height: 420,
                      margin: '0 auto',
                      flex: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        px: 3,
                        py: 2,
                        borderBottom: '1px solid #f0f0f0',
                        bgcolor: 'grey.50',
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                      }}
                    >
                      <Avatar sx={{ bgcolor: 'primary.100', color: 'primary.main', width: 36, height: 36 }}>
                        {chart.icon}
                      </Avatar>
                      <Typography variant="subtitle1" fontWeight={600} color="text.primary">
                        {chart.label}
                      </Typography>
                    </Box>
                    <Box sx={{ flex: 1, p: 2, pb: 3, minHeight: 0 }}>
                      <ChartComponent pokemon={pokemon} />
                    </Box>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
          <Paper sx={{ p: 2, borderRadius: 3, boxShadow: 2 }}>
            <Typography variant="h6" gutterBottom>Pokemon Data</Typography>
            <PokemonTable pokemon={pokemon} />
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard; 