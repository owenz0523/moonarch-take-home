import { render, screen } from '@testing-library/react';
import PokemonTable from './PokemonTable';
import type { Pokemon } from '../types/pokemon';
import { describe, it, expect } from 'vitest';

const mockPokemon: Pokemon[] = [
  {
    id: 1,
    name: 'bulbasaur',
    base_experience: 64,
    height: 7,
    weight: 69,
    sprites: { front_default: '', back_default: '' },
    stats: [],
    types: [
      { type: { name: 'grass' } },
      { type: { name: 'poison' } },
    ],
  },
];

describe('PokemonTable', () => {
  it('renders table headers', () => {
    render(<PokemonTable pokemon={mockPokemon} />);
    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Height/i)).toBeInTheDocument();
    expect(screen.getByText(/Weight/i)).toBeInTheDocument();
    expect(screen.getByText(/Base Experience/i)).toBeInTheDocument();
    expect(screen.getByText(/Types/i)).toBeInTheDocument();
  });

  it('renders a pokemon row', () => {
    render(<PokemonTable pokemon={mockPokemon} />);
    expect(screen.getByText('bulbasaur')).toBeInTheDocument();
    expect(screen.getByText('grass, poison')).toBeInTheDocument();
  });
}); 