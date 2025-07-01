import { ApiProperty } from '@nestjs/swagger';

import { Description, Name, NamedAPIResource } from './utility';

// Предполагаем, что эти классы уже существуют

export class Generation {
  @ApiProperty({ example: 1, description: 'Generation ID' })
  id: number;

  @ApiProperty({ example: 'generation-i', description: 'Generation name' })
  name: string;

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Abilities introduced in this generation',
  })
  abilities: NamedAPIResource[];

  @ApiProperty({
    type: [Name],
    description: 'Localized generation names',
  })
  names: Name[];

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Main region for this generation',
  })
  main_region: NamedAPIResource;

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Moves introduced in this generation',
  })
  moves: NamedAPIResource[];

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Pokémon species introduced in this generation',
  })
  pokemon_species: NamedAPIResource[];

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Types introduced in this generation',
  })
  types: NamedAPIResource[];

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Version groups in this generation',
  })
  version_groups: NamedAPIResource[];
}

export class PokemonEntry {
  @ApiProperty({
    example: 1,
    description: 'Entry number in Pokédex',
  })
  entry_number: number;

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Pokémon species reference',
  })
  pokemon_species: NamedAPIResource;
}

export class Pokedex {
  @ApiProperty({ example: 1, description: 'Pokédex ID' })
  id: number;

  @ApiProperty({ example: 'kanto', description: 'Pokédex name' })
  name: string;

  @ApiProperty({
    example: true,
    description: 'Is main series Pokédex',
  })
  is_main_series: boolean;

  @ApiProperty({
    type: [Description],
    description: 'Localized Pokédex descriptions',
  })
  descriptions: Description[];

  @ApiProperty({
    type: [Name],
    description: 'Localized Pokédex names',
  })
  names: Name[];

  @ApiProperty({
    type: [PokemonEntry],
    description: 'Pokémon entries in this Pokédex',
  })
  pokemon_entries: PokemonEntry[];

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Associated region',
  })
  region: NamedAPIResource;

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Relevant version groups',
  })
  version_groups: NamedAPIResource[];
}

export class Version {
  @ApiProperty({ example: 1, description: 'Version ID' })
  id: number;

  @ApiProperty({ example: 'red', description: 'Version name' })
  name: string;

  @ApiProperty({
    type: [Name],
    description: 'Localized version names',
  })
  names: Name[];

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Associated version group',
  })
  version_group: NamedAPIResource;
}

export class VersionGroup {
  @ApiProperty({ example: 1, description: 'Version group ID' })
  id: number;

  @ApiProperty({ example: 'red-blue', description: 'Version group name' })
  name: string;

  @ApiProperty({
    example: 1,
    description: 'Sorting order',
  })
  order: number;

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Associated generation',
  })
  generation: NamedAPIResource;

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Move learn methods in this group',
  })
  move_learn_methods: NamedAPIResource[];

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Pokédexes in this group',
  })
  pokedexes: NamedAPIResource[];

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Regions accessible in this group',
  })
  regions: NamedAPIResource[];

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Versions in this group',
  })
  versions: NamedAPIResource[];
}
