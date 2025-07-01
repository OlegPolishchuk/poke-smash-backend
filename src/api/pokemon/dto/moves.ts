import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { AbilityEffectChange } from './pokemon';
import {
  APIResource,
  Description,
  MachineVersionDetail,
  Name,
  NamedAPIResource,
  VerboseEffect,
} from './utility';

export class ContestComboDetail {
  @ApiProperty({ type: [NamedAPIResource] })
  use_before: NamedAPIResource[];

  @ApiProperty({ type: [NamedAPIResource] })
  use_after: NamedAPIResource[];
}

export class ContestComboSets {
  @ApiProperty({ type: ContestComboDetail })
  normal: ContestComboDetail;

  @ApiProperty({ type: ContestComboDetail })
  super: ContestComboDetail;
}

export class MoveFlavorText {
  @ApiProperty()
  flavor_text: string;

  @ApiProperty({ type: NamedAPIResource })
  language: NamedAPIResource;

  @ApiProperty({ type: NamedAPIResource })
  version_group: NamedAPIResource;
}

export class MoveMetaData {
  @ApiProperty({ type: NamedAPIResource })
  ailment: NamedAPIResource;

  @ApiProperty({ type: NamedAPIResource })
  category: NamedAPIResource;

  @ApiPropertyOptional({ nullable: true })
  min_hits: number | null;

  @ApiPropertyOptional({ nullable: true })
  max_hits: number | null;

  @ApiPropertyOptional({ nullable: true })
  min_turns: number | null;

  @ApiPropertyOptional({ nullable: true })
  max_turns: number | null;

  @ApiProperty()
  drain: number;

  @ApiProperty()
  healing: number;

  @ApiProperty()
  crit_rate: number;

  @ApiProperty()
  ailment_chance: number;

  @ApiProperty()
  flinch_chance: number;

  @ApiProperty()
  stat_chance: number;
}

export class MoveStatChange {
  @ApiProperty()
  change: number;

  @ApiProperty({ type: NamedAPIResource })
  stat: NamedAPIResource;
}

export class PastMoveStatValues {
  @ApiPropertyOptional({ nullable: true })
  accuracy: number | null;

  @ApiPropertyOptional({ nullable: true })
  effect_chance: number | null;

  @ApiPropertyOptional({ nullable: true })
  power: number | null;

  @ApiProperty()
  pp: number;

  @ApiProperty({ type: [VerboseEffect] })
  effect_entries: VerboseEffect[];

  @ApiProperty({ type: NamedAPIResource })
  type: NamedAPIResource;

  @ApiProperty({ type: NamedAPIResource })
  version_group: NamedAPIResource;
}

export class Move {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiPropertyOptional({ nullable: true })
  accuracy: number | null;

  @ApiPropertyOptional({ nullable: true })
  effect_chance: number | null;

  @ApiProperty()
  pp: number;

  @ApiProperty()
  priority: number;

  @ApiPropertyOptional({ nullable: true })
  power: number | null;

  @ApiProperty({ type: ContestComboSets })
  contest_combos: ContestComboSets;

  @ApiProperty({ type: NamedAPIResource })
  contest_type: NamedAPIResource;

  @ApiProperty({ type: APIResource })
  contest_effect: APIResource;

  @ApiProperty({ type: NamedAPIResource })
  damage_class: NamedAPIResource;

  @ApiProperty({ type: [VerboseEffect] })
  effect_entries: VerboseEffect[];

  @ApiProperty({ type: [AbilityEffectChange] })
  effect_changes: AbilityEffectChange[];

  @ApiProperty({ type: [MoveFlavorText] })
  flavor_text_entries: MoveFlavorText[];

  @ApiProperty({ type: NamedAPIResource })
  generation: NamedAPIResource;

  @ApiProperty({ type: [MachineVersionDetail] })
  machines: MachineVersionDetail[];

  @ApiProperty({ type: MoveMetaData })
  meta: MoveMetaData;

  @ApiProperty({ type: [Name] })
  names: Name[];

  @ApiProperty({ type: [PastMoveStatValues] })
  past_values: PastMoveStatValues[];

  @ApiProperty({ type: [MoveStatChange] })
  stat_changes: MoveStatChange[];

  @ApiProperty({ type: APIResource })
  super_contest_effect: APIResource;

  @ApiProperty({ type: NamedAPIResource })
  target: NamedAPIResource;

  @ApiProperty({ type: NamedAPIResource })
  type: NamedAPIResource;
}

export class MoveAilment {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ type: [NamedAPIResource] })
  moves: NamedAPIResource[];

  @ApiProperty({ type: [Name] })
  names: Name[];
}

export class MoveBattleStyle {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ type: [Name] })
  names: Name[];
}

export class MoveCategory {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ type: [NamedAPIResource] })
  moves: NamedAPIResource[];

  @ApiProperty({ type: [Description] })
  descriptions: Description[];
}

export class MoveDamageClass {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ type: [Description] })
  descriptions: Description[];

  @ApiProperty({ type: [NamedAPIResource] })
  moves: NamedAPIResource[];

  @ApiProperty({ type: [Name] })
  names: Name[];
}

export class MoveLearnMethod {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ type: [Description] })
  descriptions: Description[];

  @ApiProperty({ type: [Name] })
  names: Name[];

  @ApiProperty({ type: [NamedAPIResource] })
  version_groups: NamedAPIResource[];
}

export class MoveTarget {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ type: [Description] })
  descriptions: Description[];

  @ApiProperty({ type: [NamedAPIResource] })
  moves: NamedAPIResource[];

  @ApiProperty({ type: [Name] })
  names: Name[];
}
