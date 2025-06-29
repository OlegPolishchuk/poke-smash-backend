import { IsIn, IsNumber } from 'class-validator';

export class SwipePokemonDto {
  @IsNumber()
  pokemon_id: number;

  @IsIn(['like', 'dislike'])
  action: 'like' | 'dislike';
}
