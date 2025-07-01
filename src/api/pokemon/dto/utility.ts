import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class NamedAPIResource {
  @ApiProperty({ example: 'potion', description: 'Resource name' })
  name: string;

  @ApiProperty({
    example: 'https://pokeapi.co/api/v2/item/1/',
    description: 'API URL',
  })
  url: string;
}

export class Name {
  @ApiProperty({ example: 'Potion', description: 'Localized name' })
  name: string;

  @ApiProperty({ type: NamedAPIResource, description: 'Language reference' })
  language: NamedAPIResource;
}

export class NamedAPIResourceList {
  @ApiProperty({
    example: 1000,
    description: 'Total resources count',
  })
  count: number;

  @ApiPropertyOptional({
    example: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
    description: 'Next page URL',
    nullable: true,
  })
  next: string | null;

  @ApiPropertyOptional({
    example: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
    description: 'Previous page URL',
    nullable: true,
  })
  previous: string | null;

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'List of named resources',
  })
  results: NamedAPIResource[];
}

export class Language {
  @ApiProperty({ example: 1, description: 'Language ID' })
  id: number;

  @ApiProperty({ example: 'en', description: 'Language name' })
  name: string;

  @ApiProperty({
    example: true,
    description: 'Is official language',
  })
  official: boolean;

  @ApiProperty({
    example: 'en',
    description: 'ISO 639 code',
  })
  ios639: string;

  @ApiProperty({
    example: 'us',
    description: 'ISO 3166 code',
  })
  iso3166: string;

  @ApiProperty({
    type: [Name],
    description: 'Localized language names',
  })
  names: Name[];
}

export class APIResource {
  @ApiProperty({
    example: 'https://pokeapi.co/api/v2/ability/1/',
    description: 'API URL',
  })
  url: string;
}

export class Description {
  @ApiProperty({
    example: 'Increases attack',
    description: 'Description text',
  })
  description: string;

  @ApiProperty({ type: NamedAPIResource, description: 'Language reference' })
  language: NamedAPIResource;
}

export class Effect {
  @ApiProperty({
    example: 'Raises attack by 1 stage',
    description: 'Effect description',
  })
  effect: string;

  @ApiProperty({ type: NamedAPIResource, description: 'Language reference' })
  language: NamedAPIResource;
}

export class Encounter {
  @ApiProperty({
    example: 5,
    description: 'Minimum encounter level',
  })
  min_level: number;

  @ApiProperty({
    example: 15,
    description: 'Maximum encounter level',
  })
  max_level: number;

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Required condition values',
    default: [],
  })
  condition_values: NamedAPIResource[];

  @ApiProperty({
    example: 30,
    description: 'Encounter chance percentage',
  })
  chance: number;

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Encounter method',
  })
  method: NamedAPIResource;
}

export class FlavorText {
  @ApiProperty({
    example: 'A common sight in forests...',
    description: 'Flavor text',
  })
  flavor_text: string;

  @ApiProperty({ type: NamedAPIResource, description: 'Language reference' })
  language: NamedAPIResource;

  @ApiProperty({ type: NamedAPIResource, description: 'Game version' })
  version: NamedAPIResource;
}

export class GenerationGameIndex {
  @ApiProperty({
    example: 1,
    description: 'Internal game index',
  })
  game_index: number;

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Game generation',
  })
  generation: NamedAPIResource;
}

export class MachineVersionDetail {
  @ApiProperty({
    type: APIResource,
    description: 'Machine reference',
  })
  machine: APIResource;

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Version group',
  })
  version_group: NamedAPIResource;
}

export class VerboseEffect {
  @ApiProperty({
    example: 'Raises the Attack stat of the user by one stage',
    description: 'Detailed effect',
  })
  effect: string;

  @ApiProperty({
    example: 'Raises Attack by 1 stage',
    description: 'Short effect description',
  })
  short_effect: string;

  @ApiProperty({ type: NamedAPIResource, description: 'Language reference' })
  language: NamedAPIResource;
}

export class VersionEncounterDetail {
  @ApiProperty({
    type: NamedAPIResource,
    description: 'Game version',
  })
  version: NamedAPIResource;

  @ApiProperty({
    example: 50,
    description: 'Max encounter chance percentage',
  })
  max_chance: number;

  @ApiProperty({
    type: [Encounter],
    description: 'Encounter details',
    default: [],
  })
  encounter_details: Encounter[];
}

export class VersionGameIndex {
  @ApiProperty({
    example: 1,
    description: 'Internal game index',
  })
  game_index: number;

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Game version',
  })
  version: NamedAPIResource;
}

export class VersionGroupFlavorText {
  @ApiProperty({
    example: 'A common Pokémon...',
    description: 'Flavor text',
  })
  text: string;

  @ApiProperty({ type: NamedAPIResource, description: 'Language reference' })
  language: NamedAPIResource;

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Version group',
  })
  version_group: NamedAPIResource;
}
