import { api } from '@/src/api/instance';
import { Pokemon } from '@/src/api/pokemon/types/pokemon';

export const pokemonApi = {
  getPokemon(id: number) {
    return api.get<Pokemon>(`pokemon/${id}`);
  },
};
