import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
  Button,
  Stack,
} from '@mui/material';
import type { Pokemon } from '../types/pokemon';

interface PokemonTableProps {
  pokemon: Pokemon[];
}

type SortField = 'name' | 'height' | 'weight' | 'base_experience';

function convertToCSV(data: Pokemon[]) {
  const header = ['Name', 'Height', 'Weight', 'Base Experience', 'Types'];
  const rows = data.map(p => [
    p.name,
    p.height,
    p.weight,
    p.base_experience,
    p.types.map(t => t.type.name).join(', '),
  ]);
  return [header, ...rows].map(row => row.map(String).join(',')).join('\n');
}

const PokemonTable = ({ pokemon }: PokemonTableProps) => {
  const [orderBy, setOrderBy] = useState<SortField>('name');
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = (field: SortField) => {
    const isAsc = orderBy === field && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(field);
  };

  const sortedPokemon = [...pokemon].sort((a, b) => {
    const aValue = a[orderBy];
    const bValue = b[orderBy];
    
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return order === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    
    return order === 'asc'
      ? Number(aValue) - Number(bValue)
      : Number(bValue) - Number(aValue);
  });

  const handleExportCSV = () => {
    const csv = convertToCSV(sortedPokemon);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pokemon_data.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Stack direction="row" justifyContent="flex-end" mb={1}>
        <Button variant="outlined" size="small" onClick={handleExportCSV}>
          Export CSV
        </Button>
      </Stack>
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: 3,
          boxShadow: 2,
          overflowX: 'auto',
          maxHeight: 420,
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow sx={{ bgcolor: 'grey.100' }}>
              <TableCell sx={{ fontWeight: 700, fontSize: 16, py: 2 }}>
                <TableSortLabel
                  active={orderBy === 'name'}
                  direction={orderBy === 'name' ? order : 'asc'}
                  onClick={() => handleSort('name')}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell sx={{ fontWeight: 700, fontSize: 16, py: 2 }}>
                <TableSortLabel
                  active={orderBy === 'height'}
                  direction={orderBy === 'height' ? order : 'asc'}
                  onClick={() => handleSort('height')}
                >
                  Height
                </TableSortLabel>
              </TableCell>
              <TableCell sx={{ fontWeight: 700, fontSize: 16, py: 2 }}>
                <TableSortLabel
                  active={orderBy === 'weight'}
                  direction={orderBy === 'weight' ? order : 'asc'}
                  onClick={() => handleSort('weight')}
                >
                  Weight
                </TableSortLabel>
              </TableCell>
              <TableCell sx={{ fontWeight: 700, fontSize: 16, py: 2 }}>
                <TableSortLabel
                  active={orderBy === 'base_experience'}
                  direction={orderBy === 'base_experience' ? order : 'asc'}
                  onClick={() => handleSort('base_experience')}
                >
                  Base Experience
                </TableSortLabel>
              </TableCell>
              <TableCell sx={{ fontWeight: 700, fontSize: 16, py: 2 }}>Types</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedPokemon.map((pokemon, idx) => (
              <TableRow
                key={pokemon.id}
                sx={{
                  bgcolor: idx % 2 === 0 ? 'grey.50' : 'background.paper',
                  transition: 'background 0.2s',
                  '&:hover': { bgcolor: 'primary.50' },
                }}
              >
                <TableCell sx={{ py: 1.5, fontSize: 15 }}>{pokemon.name}</TableCell>
                <TableCell sx={{ py: 1.5, fontSize: 15 }}>{pokemon.height}</TableCell>
                <TableCell sx={{ py: 1.5, fontSize: 15 }}>{pokemon.weight}</TableCell>
                <TableCell sx={{ py: 1.5, fontSize: 15 }}>{pokemon.base_experience}</TableCell>
                <TableCell sx={{ py: 1.5, fontSize: 15 }}>
                  {pokemon.types.map(type => type.type.name).join(', ')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PokemonTable; 