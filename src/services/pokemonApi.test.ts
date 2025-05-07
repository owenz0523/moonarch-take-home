import { describe, it, expect, beforeAll, afterAll, afterEach } from 'vitest';
import { fetchPokemonList } from './pokemonApi';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

const mockResponse = {
  count: 1,
  next: null,
  previous: null,
  results: [
    { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
  ],
};

const server = setupServer(
  http.get('https://pokeapi.co/api/v2/pokemon', () => {
    return HttpResponse.json(mockResponse);
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('fetchPokemonList', () => {
  it('returns a list of pokemon', async () => {
    const data = await fetchPokemonList(1, 0);
    expect(data).toHaveProperty('results');
    expect(data.results[0].name).toBe('bulbasaur');
  });
}); 