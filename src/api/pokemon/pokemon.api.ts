import { api } from '@/src/api/instance';
import { Ability } from '@/src/api/pokemon/dto/ability';
import { Pokemon, PokemonSpecies } from '@/src/api/pokemon/dto/pokemon';
import { Stat } from '@/src/api/pokemon/dto/stats';
import { Type } from '@/src/api/pokemon/dto/types';

export const pokemonApi = {
  getPokemon(id: number) {
    return api.get<Pokemon>(`pokemon/${id}`);
  },

  getSpecies(id: number) {
    return api.get<PokemonSpecies>(`pokemon-species/${id}/`);
  },

  getAbility(id: number | string) {
    return api.get<Ability>(`ability/${id}`);
  },

  getType(id: number | string) {
    return api.get<Type>(`type/${id}`);
  },

  getStat(id: number | string) {
    return api.get<Stat>(`stat/${id}`);
  },
};
