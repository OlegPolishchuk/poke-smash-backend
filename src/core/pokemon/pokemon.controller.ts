import {
  Body,
  Controller,
  HttpCode,
  Post,
  Req,
  Session,
  UnauthorizedException,
} from '@nestjs/common';

import { AppSession } from '@/src/core/auth/types';
import { SwipePokemonDto } from '@/src/core/pokemon/dto/pokemon.dto';
import { PokemonService } from '@/src/core/pokemon/pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  @Post()
  @HttpCode(201)
  async swipe(@Session() session: AppSession, @Body() pokemonDto: SwipePokemonDto) {
    const userId = session.user.id;
    const pokemonData = { pokemon_id: pokemonDto.pokemon_id, user_id: userId };

    if (!userId) {
      return new UnauthorizedException();
    }

    if (pokemonDto.action === 'like') {
      await this.pokemonService.like(pokemonData);
    }

    if (pokemonDto.action === 'dislike') {
      await this.pokemonService.dislike(pokemonData);
    }
  }
}
