import { ApiProperty } from '@nestjs/swagger';

import { Type } from '@/src/api/pokemon/dto/types';

// Вспомогательные классы
class Generation {
  @ApiProperty()
  name: string;

  @ApiProperty()
  url: string;
}

class Language {
  @ApiProperty()
  name: string;

  @ApiProperty()
  url: string;
}

class AbilityName {
  @ApiProperty()
  name: string;

  @ApiProperty({ type: Language })
  language: Language;
}

class EffectEntry {
  @ApiProperty()
  effect: string;

  @ApiProperty()
  short_effect: string;

  @ApiProperty({ type: Language })
  language: Language;
}

class VersionGroup {
  @ApiProperty()
  name: string;

  @ApiProperty()
  url: string;
}

class EffectChangeEntry {
  @ApiProperty()
  effect: string;

  @ApiProperty({ type: Language })
  language: Language;
}

class EffectChange {
  @ApiProperty({ type: VersionGroup })
  version_group: VersionGroup;

  @ApiProperty({ type: [EffectChangeEntry] })
  effect_entries: EffectChangeEntry[];
}

class FlavorTextEntry {
  @ApiProperty()
  flavor_text: string;

  @ApiProperty({ type: Language })
  language: Language;

  @ApiProperty({ type: VersionGroup })
  version_group: VersionGroup;
}

class PokemonReference {
  @ApiProperty()
  name: string;

  @ApiProperty()
  url: string;
}

class PokemonAbilityEntry {
  @ApiProperty()
  is_hidden: boolean;

  @ApiProperty()
  slot: number;

  @ApiProperty({ type: PokemonReference })
  pokemon: PokemonReference;
}

// Основной класс Ability
export class Ability {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  is_main_series: boolean;

  @ApiProperty({ type: Generation })
  generation: Generation;

  @ApiProperty({ type: [AbilityName] })
  names: AbilityName[];

  @ApiProperty({ type: [EffectEntry] })
  effect_entries: EffectEntry[];

  @ApiProperty({ type: [EffectChange] })
  effect_changes: EffectChange[];

  @ApiProperty({ type: [FlavorTextEntry] })
  flavor_text_entries: FlavorTextEntry[];

  @ApiProperty({ type: [PokemonAbilityEntry] })
  pokemon: PokemonAbilityEntry[];
}
