# Pokemon Dashboard

A modern dashboard application that visualizes Pokemon data using the PokeAPI. Built with React, TypeScript, Material-UI, and Recharts.

## Features

- Interactive data visualization with multiple chart types
- Sortable data table
- Responsive design
- Real-time data fetching from PokeAPI
- Error handling and loading states

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd moonarch-take-home
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

- `src/components/` - React components
  - `Dashboard.tsx` - Main dashboard layout
  - `PokemonTable.tsx` - Sortable data table
  - `PokemonStatsChart.tsx` - Bar chart for Pokemon stats
  - `PokemonTypeChart.tsx` - Pie chart for Pokemon types
  - `PokemonHeightWeightChart.tsx` - Scatter plot for height vs weight
  - `PokemonExperienceChart.tsx` - Line chart for base experience
- `src/services/` - API services
  - `pokemonApi.ts` - PokeAPI integration
- `src/types/` - TypeScript type definitions
  - `pokemon.ts` - Pokemon data types

## Technologies Used

- React
- TypeScript
- Material-UI
- Recharts
- Axios
- Vite

## API

This project uses the [PokeAPI](https://pokeapi.co/) to fetch Pokemon data. The API is free to use and doesn't require authentication.

## License

MIT
