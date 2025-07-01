import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { Name, NamedAPIResource } from './utility';

// Предполагаем, что эти классы уже существуют

export class EvolutionDetail {
  @ApiPropertyOptional({
    type: NamedAPIResource,
    description: 'Required evolution item',
    nullable: true,
  })
  item: NamedAPIResource | null;

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Evolution trigger',
  })
  trigger: NamedAPIResource;

  @ApiPropertyOptional({
    example: 1,
    description: 'Required gender (1=male, 2=female, 3=genderless)',
    nullable: true,
  })
  gender: number | null;

  @ApiPropertyOptional({
    type: NamedAPIResource,
    description: 'Required held item',
    nullable: true,
  })
  held_item: NamedAPIResource | null;

  @ApiPropertyOptional({
    type: NamedAPIResource,
    description: 'Required known move',
    nullable: true,
  })
  known_move: NamedAPIResource | null;

  @ApiPropertyOptional({
    type: NamedAPIResource,
    description: 'Required move type',
    nullable: true,
  })
  known_move_type: NamedAPIResource | null;

  @ApiPropertyOptional({
    type: NamedAPIResource,
    description: 'Required location',
    nullable: true,
  })
  location: NamedAPIResource | null;

  @ApiPropertyOptional({
    example: 30,
    description: 'Minimum level',
    nullable: true,
  })
  min_level: number | null;

  @ApiPropertyOptional({
    example: 220,
    description: 'Minimum happiness',
    nullable: true,
  })
  min_happiness: number | null;

  @ApiPropertyOptional({
    example: 100,
    description: 'Minimum beauty',
    nullable: true,
  })
  min_beauty: number | null;

  @ApiPropertyOptional({
    example: 3,
    description: 'Minimum affection',
    nullable: true,
  })
  min_affection: number | null;

  @ApiPropertyOptional({
    example: true,
    description: 'Requires overworld rain',
    nullable: true,
  })
  needs_overworld_rain: boolean | null;

  @ApiPropertyOptional({
    type: NamedAPIResource,
    description: 'Required party species',
    nullable: true,
  })
  party_species: NamedAPIResource | null;

  @ApiPropertyOptional({
    type: NamedAPIResource,
    description: 'Required party Pokémon type',
    nullable: true,
  })
  party_type: NamedAPIResource | null;

  @ApiPropertyOptional({
    example: 1,
    description: 'Required stat relation (1: Atk > Def, 0: Atk = Def, -1: Atk < Def)',
    nullable: true,
  })
  relative_physical_stats: number | null;

  @ApiPropertyOptional({
    example: 'day',
    description: 'Required time of day (day/night)',
    nullable: true,
  })
  time_of_day: string | null;

  @ApiPropertyOptional({
    type: NamedAPIResource,
    description: 'Required trade species',
    nullable: true,
  })
  trade_species: NamedAPIResource | null;

  @ApiPropertyOptional({
    example: false,
    description: 'Requires turning 3DS upside-down',
    nullable: true,
  })
  turn_upside_down: boolean | null;
}

export class ChainLink {
  @ApiProperty({
    example: false,
    description: 'Is this a baby Pokémon',
  })
  is_baby: boolean;

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Pokémon species at this stage',
  })
  species: NamedAPIResource;

  @ApiProperty({
    type: [EvolutionDetail],
    description: 'Evolution details',
    default: [],
  })
  evolution_details: EvolutionDetail[];

  @ApiProperty({
    type: [ChainLink],
    description: 'Next evolution stages',
    default: [],
  })
  evolves_to: ChainLink[];
}

export class EvolutionChain {
  @ApiProperty({ example: 1, description: 'Evolution chain ID' })
  id: number;

  @ApiPropertyOptional({
    type: NamedAPIResource,
    description: 'Item held when breeding to produce baby Pokémon',
    nullable: true,
  })
  baby_trigger_item: NamedAPIResource | null;

  @ApiProperty({
    type: ChainLink,
    description: 'Base evolution chain link',
  })
  chain: ChainLink;
}

export class EvolutionTrigger {
  @ApiProperty({ example: 1, description: 'Evolution trigger ID' })
  id: number;

  @ApiProperty({ example: 'level-up', description: 'Trigger name' })
  name: string;

  @ApiProperty({
    type: [Name],
    description: 'Localized trigger names',
  })
  names: Name[];

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Affected Pokémon species',
  })
  pokemon_species: NamedAPIResource[];
}
