import { ApiProperty } from '@nestjs/swagger';

import { APIResource, Name, NamedAPIResource } from './utility';

export class MoveStatAffect {
  @ApiProperty()
  change: number;

  @ApiProperty({ type: NamedAPIResource })
  move: NamedAPIResource;
}

export class MoveStatAffectSets {
  @ApiProperty({ type: [MoveStatAffect] })
  increase: MoveStatAffect[];

  @ApiProperty({ type: [MoveStatAffect] })
  decrease: MoveStatAffect[];
}

export class NatureStatAffectSets {
  @ApiProperty({ type: [NamedAPIResource] })
  increase: NamedAPIResource[];

  @ApiProperty({ type: [NamedAPIResource] })
  decrease: NamedAPIResource[];
}

export class Stat {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  game_index: number;

  @ApiProperty()
  is_battle_only: boolean;

  @ApiProperty({ type: MoveStatAffectSets })
  affecting_moves: MoveStatAffectSets;

  @ApiProperty({ type: NatureStatAffectSets })
  affecting_natures: NatureStatAffectSets;

  @ApiProperty({ type: [APIResource] })
  characteristics: APIResource[];

  @ApiProperty({ type: NamedAPIResource })
  move_damage_class: NamedAPIResource;

  @ApiProperty({ type: [Name] })
  names: Name[];
}
