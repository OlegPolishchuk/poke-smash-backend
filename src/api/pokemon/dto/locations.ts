import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { GenerationGameIndex, Name, NamedAPIResource, VersionEncounterDetail } from './utility';

// Предполагаем, что эти классы уже существуют

export class Location {
  @ApiProperty({ example: 1, description: 'Location ID' })
  id: number;

  @ApiProperty({ example: 'canalave-city', description: 'Location name' })
  name: string;

  @ApiPropertyOptional({
    type: NamedAPIResource,
    description: 'Associated region',
    nullable: true,
  })
  region: NamedAPIResource | null;

  @ApiProperty({
    type: [Name],
    description: 'Localized location names',
    default: [],
  })
  names: Name[];

  @ApiProperty({
    type: [GenerationGameIndex],
    description: 'Game indices by generation',
    default: [],
  })
  game_indices: GenerationGameIndex[];

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Areas within this location',
    default: [],
  })
  areas: NamedAPIResource[];
}

export class EncounterVersionDetails {
  @ApiProperty({
    example: 60,
    description: 'Encounter chance rate',
  })
  rate: number;

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Game version',
  })
  version: NamedAPIResource;
}

export class EncounterMethodRate {
  @ApiProperty({
    type: NamedAPIResource,
    description: 'Encounter method',
  })
  encounter_method: NamedAPIResource;

  @ApiProperty({
    type: [EncounterVersionDetails],
    description: 'Version-specific rates',
    default: [],
  })
  version_details: EncounterVersionDetails[];
}

export class PokemonEncounter {
  @ApiProperty({
    type: NamedAPIResource,
    description: 'Pokémon species',
  })
  pokemon: NamedAPIResource;

  @ApiProperty({
    type: [VersionEncounterDetail],
    description: 'Version encounter details',
    default: [],
  })
  version_details: VersionEncounterDetail[];
}

export class LocationArea {
  @ApiProperty({ example: 1, description: 'Location area ID' })
  id: number;

  @ApiProperty({ example: 'canalave-city-area', description: 'Area name' })
  name: string;

  @ApiProperty({
    example: 1,
    description: 'Internal game index',
  })
  game_index: number;

  @ApiProperty({
    type: [EncounterMethodRate],
    description: 'Encounter method rates',
    default: [],
  })
  encounter_method_rates: EncounterMethodRate[];

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Parent location',
  })
  location: NamedAPIResource;

  @ApiProperty({
    type: [Name],
    description: 'Localized area names',
    default: [],
  })
  names: Name[];

  @ApiProperty({
    type: [PokemonEncounter],
    description: 'Pokémon encounters',
    default: [],
  })
  pokemon_encounters: PokemonEncounter[];
}

export class PalParkEncounterSpecies {
  @ApiProperty({
    example: 50,
    description: 'Base catch score',
  })
  base_score: number;

  @ApiProperty({
    example: 30,
    description: 'Encounter rate',
  })
  rate: number;

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Pokémon species',
  })
  pokemon_species: NamedAPIResource;
}

export class PalParkArea {
  @ApiProperty({ example: 1, description: 'Pal Park area ID' })
  id: number;

  @ApiProperty({ example: 'forest', description: 'Area name' })
  name: string;

  @ApiProperty({
    type: [Name],
    description: 'Localized area names',
    default: [],
  })
  names: Name[];

  @ApiProperty({
    type: [PalParkEncounterSpecies],
    description: 'Pokémon encounters',
    default: [],
  })
  pokemon_encounters: PalParkEncounterSpecies[];
}

export class Region {
  @ApiProperty({ example: 1, description: 'Region ID' })
  id: number;

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Locations in this region',
    default: [],
  })
  locations: NamedAPIResource[];

  @ApiProperty({ example: 'kanto', description: 'Region name' })
  name: string;

  @ApiProperty({
    type: [Name],
    description: 'Localized region names',
    default: [],
  })
  names: Name[];

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Main generation for this region',
  })
  main_generation: NamedAPIResource;

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Regional Pokédexes',
    default: [],
  })
  pokedexes: NamedAPIResource[];

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Version groups in this region',
    default: [],
  })
  version_groups: NamedAPIResource[];
}
