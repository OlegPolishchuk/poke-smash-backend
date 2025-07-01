import { ApiProperty } from '@nestjs/swagger';

import { NamedAPIResource } from './utility';

// Предполагаем, что класс уже существует

export class Machine {
  @ApiProperty({ example: 1, description: 'Machine ID' })
  id: number;

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Corresponding TM/HM item',
  })
  item: NamedAPIResource;

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Move taught by this machine',
  })
  move: NamedAPIResource;

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Compatible version group',
  })
  version_group: NamedAPIResource;
}
