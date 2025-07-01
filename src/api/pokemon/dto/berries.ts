import { ApiProperty } from '@nestjs/swagger';

// Базовые классы -----------------------------------------------------------
export class NamedAPIResource {
  @ApiProperty({ example: 'cheri', description: 'Resource name' })
  name: string;

  @ApiProperty({
    example: 'https://pokeapi.co/api/v2/berry/1/',
    description: 'API URL',
  })
  url: string;
}

export class Name {
  @ApiProperty({ example: 'Cheri', description: 'Localized name' })
  name: string;

  @ApiProperty({ type: NamedAPIResource, description: 'Language reference' })
  language: NamedAPIResource;
}

// Основные DTO для Berry ---------------------------------------------------
export class BerryFlavorMap {
  @ApiProperty({
    example: 10,
    description: 'Flavor potency level',
  })
  potency: number;

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Berry flavor details',
  })
  flavor: NamedAPIResource;
}

export class Berry {
  @ApiProperty({ example: 1, description: 'Berry ID' })
  id: number;

  @ApiProperty({ example: 'cheri', description: 'Berry name' })
  name: string;

  @ApiProperty({
    example: 3,
    description: 'Growth time in hours',
  })
  growth_time: number;

  @ApiProperty({
    example: 5,
    description: 'Maximum harvest count',
  })
  max_harvest: number;

  @ApiProperty({
    example: 60,
    description: 'Natural gift power value',
  })
  natural_gift_power: number;

  @ApiProperty({ example: 20, description: 'Size in millimeters' })
  size: number;

  @ApiProperty({
    example: 25,
    description: 'Smoothness quality level',
  })
  smoothness: number;

  @ApiProperty({
    example: 15,
    description: 'Soil drying speed rate',
  })
  soil_dryness: number;

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Berry firmness details',
  })
  firmness: NamedAPIResource;

  @ApiProperty({
    type: [BerryFlavorMap],
    description: 'Berry flavor mappings',
  })
  flavors: BerryFlavorMap[];

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Associated item details',
  })
  item: NamedAPIResource;

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Natural gift type',
  })
  natural_gift_type: NamedAPIResource;
}

export class BerryFirmness {
  @ApiProperty({ example: 1, description: 'Firmness ID' })
  id: number;

  @ApiProperty({ example: 'very-soft', description: 'Firmness name' })
  name: string;

  @ApiProperty({
    type: [NamedAPIResource],
    description: 'Berries with this firmness',
  })
  berries: NamedAPIResource[];

  @ApiProperty({
    type: [Name],
    description: 'Localized firmness names',
  })
  names: Name[];
}

export class FlavorBerryMap {
  @ApiProperty({
    example: 10,
    description: 'Flavor potency level',
  })
  potency: number;

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Berry reference',
  })
  berry: NamedAPIResource;
}

export class BerryFlavor {
  @ApiProperty({ example: 1, description: 'Flavor ID' })
  id: number;

  @ApiProperty({ example: 'spicy', description: 'Flavor name' })
  name: string;

  @ApiProperty({
    type: [FlavorBerryMap],
    description: 'Berries with this flavor',
  })
  berries: FlavorBerryMap[];

  @ApiProperty({
    type: NamedAPIResource,
    description: 'Associated contest type',
  })
  contest_type: NamedAPIResource;

  @ApiProperty({
    type: [Name],
    description: 'Localized flavor names',
  })
  names: Name[];
}
