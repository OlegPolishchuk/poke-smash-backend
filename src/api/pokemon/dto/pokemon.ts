import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import {
  APIResource,
  Description,
  Effect,
  FlavorText,
  Name,
  NamedAPIResource,
  VerboseEffect,
  VersionEncounterDetail,
  VersionGameIndex,
} from './utility';

// Импорт из './utility'

export class AbilityEffectChange {
  @ApiProperty({ type: [Effect] })
  effect_entries: Effect[];

  @ApiProperty({ type: NamedAPIResource })
  version_group: NamedAPIResource;
}

export class AbilityFlavorText {
  @ApiProperty({ example: 'Powers up punching moves.', description: 'Flavor text' })
  flavor_text: string;

  @ApiProperty({ type: NamedAPIResource })
  language: NamedAPIResource;

  @ApiProperty({ type: NamedAPIResource })
  version_group: NamedAPIResource;
}

export class AbilityPokemon {
  @ApiProperty({ example: false, description: 'Is hidden ability' })
  is_hidden: boolean;

  @ApiProperty({ example: 1, description: 'Ability slot (1-3)' })
  slot: number;

  @ApiProperty({ type: NamedAPIResource })
  pokemon: NamedAPIResource;
}

export class Ability {
  @ApiProperty({ example: 1, description: 'Ability ID' })
  id: number;

  @ApiProperty({ example: 'stench', description: 'Ability name' })
  name: string;

  @ApiProperty({ example: true, description: 'Is main series ability' })
  is_main_series: boolean;

  @ApiProperty({ type: NamedAPIResource })
  generation: NamedAPIResource;

  @ApiProperty({ type: [Name] })
  names: Name[];

  @ApiProperty({ type: [VerboseEffect] })
  effect_entries: VerboseEffect[];

  @ApiProperty({ type: [AbilityEffectChange] })
  effect_changes: AbilityEffectChange[];

  @ApiProperty({ type: [AbilityFlavorText] })
  flavor_text_entries: AbilityFlavorText[];

  @ApiProperty({ type: [AbilityPokemon] })
  pokemon: AbilityPokemon[];
}

export class Characteristic {
  @ApiProperty({ example: 1, description: 'Characteristic ID' })
  id: number;

  @ApiProperty({ example: 0, description: 'Gene modulo value' })
  gene_modulo: number;

  @ApiProperty({ type: [Number], example: [0, 5, 10, 15, 20, 25, 30] })
  possible_values: number[];
}

export class EggGroup {
  @ApiProperty({ example: 1, description: 'Egg group ID' })
  id: number;

  @ApiProperty({ example: 'monster', description: 'Egg group name' })
  name: string;

  @ApiProperty({ type: [Name] })
  names: Name[];

  @ApiProperty({ type: [NamedAPIResource] })
  pokemon_species: NamedAPIResource[];
}

export class PokemonSpeciesGender {
  @ApiProperty({ example: 1, description: 'Gender rate (1-8), -1 for genderless' })
  rate: number;

  @ApiProperty({ type: NamedAPIResource })
  pokemon_species: NamedAPIResource;
}

export class Gender {
  @ApiProperty({ example: 1, description: 'Gender ID' })
  id: number;

  @ApiProperty({ example: 'female', description: 'Gender name' })
  name: string;

  @ApiProperty({ type: [PokemonSpeciesGender] })
  pokemon_species_details: PokemonSpeciesGender[];

  @ApiProperty({ type: [NamedAPIResource] })
  required_for_evolution: NamedAPIResource[];
}

export class GrowthRateExperienceLevel {
  @ApiProperty({ example: 1, description: 'Level' })
  level: number;

  @ApiProperty({ example: 0, description: 'Experience required' })
  experience: number;
}

export class GrowthRate {
  @ApiProperty({ example: 1, description: 'Growth rate ID' })
  id: number;

  @ApiProperty({ example: 'slow', description: 'Growth rate name' })
  name: string;

  @ApiProperty({ example: '\\frac{5x^3}{4}', description: 'Experience formula' })
  formula: string;

  @ApiProperty({ type: [Description] })
  descriptions: Description[];

  @ApiProperty({ type: [GrowthRateExperienceLevel] })
  levels: GrowthRateExperienceLevel[];

  @ApiProperty({ type: [NamedAPIResource] })
  pokemon_species: NamedAPIResource[];
}

export class NatureStatChange {
  @ApiProperty({ example: -1, description: 'Stat change value' })
  max_change: number;

  @ApiProperty({ type: NamedAPIResource })
  pokeathlon_stat: NamedAPIResource;
}

export class MoveBattleStylePreference {
  @ApiProperty({ example: 60, description: 'Low HP preference percentage' })
  low_hp_preference: number;

  @ApiProperty({ example: 40, description: 'High HP preference percentage' })
  high_hp_preference: number;

  @ApiProperty({ type: NamedAPIResource })
  move_battle_style: NamedAPIResource;
}

export class Nature {
  @ApiProperty({ example: 1, description: 'Nature ID' })
  id: number;

  @ApiProperty({ example: 'hardy', description: 'Nature name' })
  name: string;

  @ApiPropertyOptional({ type: NamedAPIResource, nullable: true })
  decreased_stat: NamedAPIResource | null;

  @ApiPropertyOptional({ type: NamedAPIResource, nullable: true })
  increased_stat: NamedAPIResource | null;

  @ApiPropertyOptional({ type: NamedAPIResource, nullable: true })
  hates_flavor: NamedAPIResource | null;

  @ApiPropertyOptional({ type: NamedAPIResource, nullable: true })
  likes_flavor: NamedAPIResource | null;

  @ApiProperty({ type: [NatureStatChange] })
  pokeathlon_stat_changes: NatureStatChange[];

  @ApiProperty({ type: [MoveBattleStylePreference] })
  move_battle_style_preferences: MoveBattleStylePreference[];

  @ApiProperty({ type: [Name] })
  names: Name[];
}

export class NaturePokeathlonStatAffect {
  @ApiProperty({ example: -2, description: 'Maximum stat change' })
  max_change: number;

  @ApiProperty({ type: NamedAPIResource })
  nature: NamedAPIResource;
}

export class NaturePokeathlonStatAffectSets {
  @ApiProperty({ type: [NaturePokeathlonStatAffect] })
  increase: NaturePokeathlonStatAffect[];

  @ApiProperty({ type: [NaturePokeathlonStatAffect] })
  decrease: NaturePokeathlonStatAffect[];
}

export class PokeathlonStat {
  @ApiProperty({ example: 1, description: 'Pokeathlon stat ID' })
  id: number;

  @ApiProperty({ example: 'speed', description: 'Stat name' })
  name: string;

  @ApiProperty({ type: [Name] })
  names: Name[];

  @ApiProperty({ type: NaturePokeathlonStatAffectSets })
  affecting_natures: NaturePokeathlonStatAffectSets;
}

export class PokemonAbility {
  @ApiProperty({ example: false, description: 'Is hidden ability' })
  is_hidden: boolean;

  @ApiProperty({ example: 1, description: 'Ability slot' })
  slot: number;

  @ApiProperty({ type: NamedAPIResource })
  ability: NamedAPIResource;
}

export class PokemonType {
  @ApiProperty({ example: 1, description: 'Type slot' })
  slot: number;

  @ApiProperty({ type: NamedAPIResource })
  type: NamedAPIResource;
}

export class PokemonHeldItemVersion {
  @ApiProperty({ type: NamedAPIResource })
  version: NamedAPIResource;

  @ApiProperty({ example: 5, description: 'Held item rarity' })
  rarity: number;
}

export class PokemonHeldItem {
  @ApiProperty({ type: NamedAPIResource })
  item: NamedAPIResource;

  @ApiProperty({ type: [PokemonHeldItemVersion] })
  version_details: PokemonHeldItemVersion[];
}

export class PokemonMoveVersion {
  @ApiProperty({ type: NamedAPIResource })
  move_learn_method: NamedAPIResource;

  @ApiProperty({ type: NamedAPIResource })
  version_group: NamedAPIResource;

  @ApiProperty({ example: 15, description: 'Level learned at' })
  level_learned_at: number;
}

export class PokemonMove {
  @ApiProperty({ type: NamedAPIResource })
  move: NamedAPIResource;

  @ApiProperty({ type: [PokemonMoveVersion] })
  version_group_details: PokemonMoveVersion[];
}

export class PokemonStat {
  @ApiProperty({ type: NamedAPIResource })
  stat: NamedAPIResource;

  @ApiProperty({ example: 0, description: 'Effort value points' })
  effort: number;

  @ApiProperty({ example: 45, description: 'Base stat value' })
  base_stat: number;
}

export class PokemonSprites {
  @ApiPropertyOptional({
    example: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  })
  front_default: string | null;

  @ApiPropertyOptional()
  front_shiny: string | null;

  @ApiPropertyOptional()
  front_female: string | null;

  @ApiPropertyOptional()
  front_shiny_female: string | null;

  @ApiPropertyOptional()
  back_default: string | null;

  @ApiPropertyOptional()
  back_shiny: string | null;

  @ApiPropertyOptional()
  back_female: string | null;

  @ApiPropertyOptional()
  back_shiny_female: string | null;

  @ApiPropertyOptional({ type: Object })
  other?: Record<string, any>;

  @ApiPropertyOptional({ type: Object })
  versions?: Record<string, any>;
}

export class LocationAreaEncounter {
  @ApiProperty({ type: NamedAPIResource })
  location_area: NamedAPIResource;

  @ApiProperty({ type: [VersionEncounterDetail] })
  version_details: VersionEncounterDetail[];
}

export class Pokemon {
  @ApiProperty({ example: 1, description: 'Pokémon ID' })
  id: number;

  @ApiProperty({ example: 'bulbasaur', description: 'Pokémon name' })
  name: string;

  @ApiProperty({ example: 64, description: 'Base experience yield' })
  base_experience: number;

  @ApiProperty({ example: 7, description: 'Height in decimetres' })
  height: number;

  @ApiProperty({ example: true, description: 'Is default form' })
  is_default: boolean;

  @ApiProperty({ example: 1, description: 'Sort order' })
  order: number;

  @ApiProperty({ example: 69, description: 'Weight in hectograms' })
  weight: number;

  @ApiProperty({ type: [PokemonAbility] })
  abilities: PokemonAbility[];

  @ApiProperty({ type: [NamedAPIResource] })
  forms: NamedAPIResource[];

  @ApiProperty({ type: [VersionGameIndex] })
  game_indices: VersionGameIndex[];

  @ApiProperty({ type: [PokemonHeldItem] })
  held_items: PokemonHeldItem[];

  @ApiProperty({
    example: '/api/v2/pokemon/1/encounters',
    description: 'Location encounters endpoint',
  })
  location_area_encounters: string;

  @ApiProperty({ type: [PokemonMove] })
  moves: PokemonMove[];

  @ApiProperty({ type: PokemonSprites })
  sprites: PokemonSprites;

  @ApiProperty({ type: NamedAPIResource })
  species: NamedAPIResource;

  @ApiProperty({ type: [PokemonStat] })
  stats: PokemonStat[];

  @ApiProperty({ type: [PokemonType] })
  types: PokemonType[];
}

export class PokemonColor {
  @ApiProperty({ example: 1, description: 'Color ID' })
  id: number;

  @ApiProperty({ example: 'black', description: 'Color name' })
  name: string;

  @ApiProperty({ type: [Name] })
  names: Name[];

  @ApiProperty({ type: [NamedAPIResource] })
  pokemon_species: NamedAPIResource[];
}

export class PokemonFormSprites {
  @ApiPropertyOptional({
    example: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  })
  front_default: string | null;

  @ApiPropertyOptional()
  front_shiny: string | null;

  @ApiPropertyOptional()
  back_default: string | null;

  @ApiPropertyOptional()
  back_shiny: string | null;
}

export class PokemonForm {
  @ApiProperty({ example: 1, description: 'Form ID' })
  id: number;

  @ApiProperty({ example: 'bulbasaur', description: 'Form name' })
  name: string;

  @ApiProperty({ example: 1, description: 'Sort order' })
  order: number;

  @ApiProperty({ example: 1, description: 'Form order within species' })
  form_order: number;

  @ApiProperty({ example: true, description: 'Is default form' })
  is_default: boolean;

  @ApiProperty({ example: false, description: 'Is battle only' })
  is_battle_only: boolean;

  @ApiProperty({ example: false, description: 'Is mega evolution' })
  is_mega: boolean;

  @ApiProperty({ example: 'Normal', description: 'Form name' })
  form_name: string;

  @ApiProperty({ type: NamedAPIResource })
  pokemon: NamedAPIResource;

  @ApiProperty({ type: PokemonFormSprites })
  sprites: PokemonFormSprites;

  @ApiProperty({ type: NamedAPIResource })
  version_group: NamedAPIResource;

  @ApiProperty({ type: [Name] })
  names: Name[];

  @ApiProperty({ type: [Name] })
  form_names: Name[];
}

export class PokemonHabitat {
  @ApiProperty({ example: 1, description: 'Habitat ID' })
  id: number;

  @ApiProperty({ example: 'cave', description: 'Habitat name' })
  name: string;

  @ApiProperty({ type: [Name] })
  names: Name[];

  @ApiProperty({ type: [NamedAPIResource] })
  pokemon_species: NamedAPIResource[];
}

export class AwesomeName {
  @ApiProperty({ example: 'Lizard', description: 'Scientific name' })
  awesome_name: string;

  @ApiProperty({ type: NamedAPIResource })
  language: NamedAPIResource;
}

export class PokemonShape {
  @ApiProperty({ example: 1, description: 'Shape ID' })
  id: number;

  @ApiProperty({ example: 'ball', description: 'Shape name' })
  name: string;

  @ApiProperty({ type: [AwesomeName] })
  awesome_names: AwesomeName[];

  @ApiProperty({ type: [Name] })
  names: Name[];

  @ApiProperty({ type: [NamedAPIResource] })
  pokemon_species: NamedAPIResource[];
}

export class Genus {
  @ApiProperty({ example: 'Seed Pokémon', description: 'Genus name' })
  genus: string;

  @ApiProperty({ type: NamedAPIResource })
  language: NamedAPIResource;
}

export class PokemonSpeciesDexEntry {
  @ApiProperty({ example: 1, description: 'Dex entry number' })
  entry_number: number;

  @ApiProperty({ type: NamedAPIResource })
  pokedex: NamedAPIResource;
}

export class PalParkEncounterArea {
  @ApiProperty({ example: 50, description: 'Base score' })
  base_score: number;

  @ApiProperty({ example: 30, description: 'Encounter rate' })
  rate: number;

  @ApiProperty({ type: NamedAPIResource })
  area: NamedAPIResource;
}

export class PokemonSpeciesVariety {
  @ApiProperty({ example: true, description: 'Is default variety' })
  is_default: boolean;

  @ApiProperty({ type: NamedAPIResource })
  pokemon: NamedAPIResource;
}

export class PokemonSpecies {
  @ApiProperty({ example: 1, description: 'Species ID' })
  id: number;

  @ApiProperty({ example: 'bulbasaur', description: 'Species name' })
  name: string;

  @ApiProperty({ example: 1, description: 'Dex order' })
  order: number;

  @ApiProperty({ example: 1, description: 'Gender rate (1-8), -1 for genderless' })
  gender_rate: number;

  @ApiProperty({ example: 45, description: 'Capture rate (0-255)' })
  capture_rate: number;

  @ApiProperty({ example: 50, description: 'Base happiness (0-255)' })
  base_happiness: number;

  @ApiProperty({ example: false, description: 'Is baby Pokémon' })
  is_baby: boolean;

  @ApiProperty({ example: false, description: 'Is legendary Pokémon' })
  is_legendary: boolean;

  @ApiProperty({ example: false, description: 'Is mythical Pokémon' })
  is_mythical: boolean;

  @ApiProperty({ example: 20, description: 'Hatch counter' })
  hatch_counter: number;

  @ApiProperty({ example: false, description: 'Has gender differences' })
  has_gender_differences: boolean;

  @ApiProperty({ example: false, description: 'Can switch forms' })
  forms_switchable: boolean;

  @ApiProperty({ type: NamedAPIResource })
  growth_rate: NamedAPIResource;

  @ApiProperty({ type: [PokemonSpeciesDexEntry] })
  pokedex_numbers: PokemonSpeciesDexEntry[];

  @ApiProperty({ type: [NamedAPIResource] })
  egg_groups: NamedAPIResource[];

  @ApiProperty({ type: NamedAPIResource })
  color: NamedAPIResource;

  @ApiProperty({ type: NamedAPIResource })
  shape: NamedAPIResource;

  @ApiPropertyOptional({ type: NamedAPIResource, nullable: true })
  evolves_from_species: NamedAPIResource | null;

  @ApiProperty({ type: APIResource })
  evolution_chain: APIResource;

  @ApiPropertyOptional({ type: NamedAPIResource, nullable: true })
  habitat: NamedAPIResource | null;

  @ApiProperty({ type: NamedAPIResource })
  generation: NamedAPIResource;

  @ApiProperty({ type: [Name] })
  names: Name[];

  @ApiProperty({ type: [PalParkEncounterArea] })
  pal_park_encounters: PalParkEncounterArea[];

  @ApiProperty({ type: [FlavorText] })
  flavor_text_entries: FlavorText[];

  @ApiProperty({ type: [Description] })
  form_descriptions: Description[];

  @ApiProperty({ type: [Genus] })
  genera: Genus[];

  @ApiProperty({ type: [PokemonSpeciesVariety] })
  varieties: PokemonSpeciesVariety[];
}
