import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from 'recharts';
import type { Pokemon } from '../types/pokemon';

interface PokemonExperienceChartProps {
  pokemon: Pokemon[];
}

const PokemonExperienceChart = ({ pokemon }: PokemonExperienceChartProps) => {
  const data = pokemon
    .sort((a, b) => a.base_experience - b.base_experience)
    .map(p => ({
      name: p.name,
      experience: p.base_experience,
    }));

  return (
    <ResponsiveContainer width="100%" height={340}>
      <LineChart
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
        <Legend verticalAlign="top" height={36} />
        <Line
          type="monotone"
          dataKey="experience"
          name="Base Experience"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PokemonExperienceChart; 