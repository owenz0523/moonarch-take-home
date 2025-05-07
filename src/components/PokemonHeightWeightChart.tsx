import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from 'recharts';
import type { Pokemon } from '../types/pokemon';

interface PokemonHeightWeightChartProps {
  pokemon: Pokemon[];
}

const PokemonHeightWeightChart = ({ pokemon }: PokemonHeightWeightChartProps) => {
  const data = pokemon.map(p => ({
    name: p.name,
    height: p.height,
    weight: p.weight,
  }));

  return (
    <ResponsiveContainer width="100%" height={340}>
      <ScatterChart
        margin={{
          top: 30,
          right: 30,
          bottom: 60,
          left: 30,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="height" name="Height" unit="dm" tick={false} height={60}>
          <Label value="Height (dm)" offset={20} position="insideBottom" />
        </XAxis>
        <YAxis type="number" dataKey="weight" name="Weight" unit="hg" />
        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          formatter={(value, name) => [`${value} ${name === 'height' ? 'dm' : 'hg'}`, name]}
          labelFormatter={(label) => `Pokemon: ${label}`}
        />
        <Legend />
        <Scatter
          name="Height vs Weight"
          data={data}
          fill="#8884d8"
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default PokemonHeightWeightChart; 