import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import {
  APIResource,
  Description,
  Effect,
  GenerationGameIndex,
  MachineVersionDetail,
  Name,
  NamedAPIResource,
  VerboseEffect,
  VersionGroupFlavorText,
} from './utility';

// Предполагаем, что эти классы уже существуют

export class ItemSprites {
  @ApiProperty({
    example: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/items/potion.png',
    description: 'Default item sprite',
  })
  default: string;
}

export class ItemHolderPokemonVersionDetail {
  @ApiProperty({
    example: 5,
    description: 'Hold chance rarity',
  })
  rarity: number;

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Game version',
  })
  version: NamedAPIResource;
}

export class ItemHolderPokemon {
  @ApiProperty({
    type: NamedAPIResource,
    description: 'Pokémon that holds this item',
  })
  pokemon: NamedAPIResource;

  @ApiProperty({
    type: [ItemHolderPokemonVersionDetail],
    description: 'Version-specific hold details',
  })
  version_details: ItemHolderPokemonVersionDetail[];
}

export class Item {
  @ApiProperty({ example: 1, description: 'Item ID' })
  id: number;

  @ApiProperty({ example: 'master-ball', description: 'Item name' })
  name: string;

  @ApiProperty({ example: 0, description: 'Item cost in shops' })
  cost: number;

  @ApiPropertyOptional({
    example: 10,
    description: 'Fling move power with this item',
    nullable: true,
  })
  fling_power: number | null;

  @ApiPropertyOptional({
    type: NamedAPIResource,
    description: 'Fling move effect with this item',
    nullable: true,
  })
  fling_effect: NamedAPIResource | null;

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Item attributes',
    default: [],
  })
  attributes: NamedAPIResource[];

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Item category',
  })
  category: NamedAPIResource;

  @ApiProperty({
    type: [VerboseEffect],
    description: 'Detailed effect descriptions',
    default: [],
  })
  effect_entries: VerboseEffect[];

  @ApiProperty({
    type: [VersionGroupFlavorText],
    description: 'Version-specific flavor texts',
    default: [],
  })
  flavor_text_entries: VersionGroupFlavorText[];

  @ApiProperty({
    type: [GenerationGameIndex],
    description: 'Game index by generation',
    default: [],
  })
  game_indices: GenerationGameIndex[];

  @ApiProperty({
    type: [Name],
    description: 'Localized item names',
    default: [],
  })
  names: Name[];

  @ApiProperty({
    type: ItemSprites,
    description: 'Item sprites',
  })
  sprites: ItemSprites;

  @ApiProperty({
    type: [ItemHolderPokemon],
    description: 'Pokémon that can hold this item',
    default: [],
  })
  held_by_pokemon: ItemHolderPokemon[];

  @ApiPropertyOptional({
    type: APIResource,
    description: 'Baby trigger for breeding',
    nullable: true,
  })
  baby_trigger_for: APIResource | null;

  @ApiProperty({
    type: [MachineVersionDetail],
    description: 'Machine details',
    default: [],
  })
  machines: MachineVersionDetail[];
}

export class ItemAttribute {
  @ApiProperty({ example: 1, description: 'Attribute ID' })
  id: number;

  @ApiProperty({ example: 'holdable', description: 'Attribute name' })
  name: string;

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Items with this attribute',
    default: [],
  })
  items: NamedAPIResource[];

  @ApiProperty({
    type: [Name],
    description: 'Localized attribute names',
    default: [],
  })
  names: Name[];

  @ApiProperty({
    type: [Description],
    description: 'Attribute descriptions',
    default: [],
  })
  descriptions: Description[];
}

export class ItemCategory {
  @ApiProperty({ example: 1, description: 'Category ID' })
  id: number;

  @ApiProperty({ example: 'stat-boosts', description: 'Category name' })
  name: string;

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Items in this category',
    default: [],
  })
  items: NamedAPIResource[];

  @ApiProperty({
    type: [Name],
    description: 'Localized category names',
    default: [],
  })
  names: Name[];

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Associated item pocket',
  })
  pocket: NamedAPIResource;
}

export class ItemFlingEffect {
  @ApiProperty({ example: 1, description: 'Fling effect ID' })
  id: number;

  @ApiProperty({ example: 'badly-poison', description: 'Effect name' })
  name: string;

  @ApiProperty({
    type: [Effect],
    description: 'Effect descriptions',
    default: [],
  })
  effect_entries: Effect[];

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Items with this fling effect',
    default: [],
  })
  items: NamedAPIResource[];
}

export class ItemPocket {
  @ApiProperty({ example: 1, description: 'Pocket ID' })
  id: number;

  @ApiProperty({ example: 'misc', description: 'Pocket name' })
  name: string;

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Item categories in this pocket',
    default: [],
  })
  categories: NamedAPIResource[];

  @ApiProperty({
    type: [Name],
    description: 'Localized pocket names',
    default: [],
  })
  names: Name[];
}
