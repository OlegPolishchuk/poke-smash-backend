import { ApiProperty } from '@nestjs/swagger';

import { Name, NamedAPIResource } from './utility';

// Предполагаем, что эти классы уже существуют

export class EncounterMethod {
  @ApiProperty({ example: 1, description: 'Encounter method ID' })
  id: number;

  @ApiProperty({ example: 'walk', description: 'Encounter method name' })
  name: string;

  @ApiProperty({
    example: 1,
    description: 'Sorting order value',
  })
  order: number;

  @ApiProperty({
    type: [Name],
    description: 'Localized encounter method names',
  })
  names: Name[];
}

export class EncounterCondition {
  @ApiProperty({ example: 1, description: 'Encounter condition ID' })
  id: number;

  @ApiProperty({ example: 'swarm', description: 'Condition name' })
  name: string;

  @ApiProperty({
    type: [Name],
    description: 'Localized condition names',
  })
  names: Name[];

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Possible condition values',
  })
  values: NamedAPIResource[];
}

export class EncounterConditionValue {
  @ApiProperty({ example: 1, description: 'Condition value ID' })
  id: number;

  @ApiProperty({ example: 'swarm-yes', description: 'Value name' })
  name: string;

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Associated encounter condition',
  })
  condition: NamedAPIResource;

  @ApiProperty({
    type: [Name],
    description: 'Localized value names',
  })
  names: Name[];
}
