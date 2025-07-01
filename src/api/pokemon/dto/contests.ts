import { ApiProperty } from '@nestjs/swagger';

import { Effect, FlavorText, NamedAPIResource } from './utility';

// Предполагаем, что эти классы уже существуют

export class ContestName {
  @ApiProperty({ example: 'Cool', description: 'Contest name' })
  name: string;

  @ApiProperty({ example: 'red', description: 'Associated color' })
  color: string;

  @ApiProperty({ type: NamedAPIResource, description: 'Language reference' })
  language: NamedAPIResource;
}

export class ContestType {
  @ApiProperty({ example: 1, description: 'Contest type ID' })
  id: number;

  @ApiProperty({ example: 'cool', description: 'Contest type name' })
  name: string;

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Associated berry flavor',
  })
  berry_flavor: NamedAPIResource;

  @ApiProperty({
    type: [ContestName],
    description: 'Localized contest names',
  })
  names: ContestName[];
}

export class ContestEffect {
  @ApiProperty({ example: 1, description: 'Contest effect ID' })
  id: number;

  @ApiProperty({
    example: 4,
    description: 'Base appeal hearts gained',
  })
  appeal: number;

  @ApiProperty({
    example: 0,
    description: 'Base jam hearts inflicted',
  })
  jam: number;

  @ApiProperty({
    type: [Effect],
    description: 'Effect entries',
  })
  effect_entries: Effect[];

  @ApiProperty({
    type: [FlavorText],
    description: 'Flavor text entries',
  })
  flavor_text_entries: FlavorText[];
}

export class SuperContestEffect {
  @ApiProperty({ example: 1, description: 'Super contest effect ID' })
  id: number;

  @ApiProperty({
    example: 2,
    description: 'Appeal level',
  })
  appeal: number;

  @ApiProperty({
    type: [FlavorText],
    description: 'Flavor text entries',
  })
  flavor_text_entries: FlavorText[];

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Associated moves',
  })
  moves: NamedAPIResource[];
}
