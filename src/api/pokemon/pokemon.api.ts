import { api } from '@/src/api/instance';
import { Pokemon, PokemonSpecies } from '@/src/api/pokemon/dto/pokemon';

export const pokemonApi = {
  getPokemon(id: number) {
    return api.get<Pokemon>(`pokemon/${id}`);
  },

  getSpecies(id: number) {
    return api.get<PokemonSpecies>(`pokemon-species/${id}/`);
  },
};
