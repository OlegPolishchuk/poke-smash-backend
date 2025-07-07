import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

import { Type } from '@/src/api/pokemon/dto/types';

export class PaginationDto {
  @ApiProperty()
  limit: number;

  @ApiProperty()
  offset: number;
}

export interface PaginatedList<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T;
}

export class PaginatedListDto<T> {
  @ApiProperty({ description: 'Total number of items' })
  @IsNumber()
  count: number;

  @ApiProperty({
    description: 'URL to next page of results',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  next: string | null;

  @ApiProperty({
    description: 'URL to previous page of results',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  previous: string | null;

  @ApiProperty({
    description: 'Array of paginated results',
    type: [Object], // Конкретный тип укажите при использовании
  })
  results: T[];
}
