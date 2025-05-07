import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from 'recharts';
import type { Pokemon } from '../types/pokemon';

interface PokemonStatsChartProps {
  pokemon: Pokemon[];
}

const PokemonStatsChart = ({ pokemon }: PokemonStatsChartProps) => {
  const data = pokemon.map(p => ({
    name: p.name,
    hp: p.stats.find(s => s.stat.name === 'hp')?.base_stat || 0,
    attack: p.stats.find(s => s.stat.name === 'attack')?.base_stat || 0,
    defense: p.stats.find(s => s.stat.name === 'defense')?.base_stat || 0,
    'special-attack': p.stats.find(s => s.stat.name === 'special-attack')?.base_stat || 0,
    'special-defense': p.stats.find(s => s.stat.name === 'special-defense')?.base_stat || 0,
    speed: p.stats.find(s => s.stat.name === 'speed')?.base_stat || 0,
  }));

  return (
    <ResponsiveContainer width="100%" height={340}>
      <BarChart
        data={data}
        margin={{
          top: 30,
          right: 30,
          left: 30,
          bottom: 60,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={false} height={60}>
          <Label value="Pokémon" offset={20} position="insideBottom" />
        </XAxis>
        <YAxis />
        <Tooltip />
        <Bar dataKey="hp" name="HP" fill="#8884d8" />
        <Bar dataKey="attack" name="Attack" fill="#82ca9d" />
        <Bar dataKey="defense" name="Defense" fill="#ffc658" />
        <Bar dataKey="special-attack" name="Special Attack" fill="#ff8042" />
        <Bar dataKey="special-defense" name="Special Defense" fill="#0088fe" />
        <Bar dataKey="speed" name="Speed" fill="#00C49F" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PokemonStatsChart; 