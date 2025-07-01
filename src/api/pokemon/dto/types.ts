import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { GenerationGameIndex, Name, NamedAPIResource } from './utility';

export class TypePokemon {
  @ApiProperty({
    example: 1,
    description: 'Type slot (1-3)',
  })
  slot: number;

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Pokémon with this type',
  })
  pokemon: NamedAPIResource;
}

export class TypeRelations {
  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Types immune to this type',
  })
  no_damage_to: NamedAPIResource[];

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Types resistant to this type',
  })
  half_damage_to: NamedAPIResource[];

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Types weak to this type',
  })
  double_damage_to: NamedAPIResource[];

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Types that are immune to this type',
  })
  no_damage_from: NamedAPIResource[];

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Types that resist this type',
  })
  half_damage_from: NamedAPIResource[];

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Types that are super effective against this type',
  })
  double_damage_from: NamedAPIResource[];
}

export class Type {
  @ApiProperty({
    example: 1,
    description: 'Type ID',
  })
  id: number;

  @ApiProperty({
    example: 'fire',
    description: 'Type name',
  })
  name: string;

  @ApiProperty({
    type: TypeRelations,
    description: 'Damage relations with other types',
  })
  damage_relations: TypeRelations;

  @ApiProperty({
    type: [GenerationGameIndex],
    description: 'Game indices by generation',
  })
  game_indices: GenerationGameIndex[];

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Generation introduced',
  })
  generation: NamedAPIResource;

  @ApiPropertyOptional({
    type: NamedAPIResource,
    description: 'Associated move damage class',
    nullable: true,
  })
  move_damage_class: NamedAPIResource | null;

  @ApiProperty({
    type: [Name],
    description: 'Localized type names',
  })
  names: Name[];

  @ApiProperty({
    type: [TypePokemon],
    description: 'Pokémon with this type',
  })
  pokemon: TypePokemon[];

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Moves of this type',
  })
  moves: NamedAPIResource[];
}
