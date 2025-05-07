import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { Pokemon } from '../types/pokemon';

interface PokemonTypeChartProps {
  pokemon: Pokemon[];
}

const COLORS = [
  '#90caf9', // light blue
  '#a5d6a7', // light green
  '#ffcc80', // light orange
  '#f48fb1', // pink
  '#ce93d8', // purple
  '#ffe082', // yellow
  '#80cbc4', // teal
  '#b0bec5', // blue grey
  '#ffab91', // peach
  '#b39ddb', // lavender
  '#c5e1a5', // lime
  '#ffecb3', // cream
  '#bcaaa4', // brown grey
  '#e1bee7', // light purple
  '#fff59d', // light yellow
  '#a7ffeb', // aqua
];

const PokemonTypeChart = ({ pokemon }: PokemonTypeChartProps) => {
  const typeCount = pokemon.reduce((acc, p) => {
    p.types.forEach(type => {
      const typeName = type.type.name;
      acc[typeName] = (acc[typeName] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const data = Object.entries(typeCount).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <ResponsiveContainer width="100%" height={340}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent, x, y }) => (
            <text
              x={x}
              y={y}
              fill="#222"
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={14}
              fontWeight={600}
            >
              {name} ({Math.round(percent * 100)}%)
            </text>
          )}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PokemonTypeChart; 