import axios from 'axios';
import type { Pokemon, PokemonListResponse } from '../types/pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemonList = async (limit: number = 20, offset: number = 0): Promise<PokemonListResponse> => {
  const response = await axios.get(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
  return response.data;
};

export const fetchPokemonDetails = async (name: string): Promise<Pokemon> => {
  const response = await axios.get(`${BASE_URL}/pokemon/${name}`);
  return response.data;
};

export const fetchMultiplePokemon = async (names: string[]): Promise<Pokemon[]> => {
  const promises = names.map(name => fetchPokemonDetails(name));
  return Promise.all(promises);
}; 