import {
  Body,
  Controller,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Query,
  Session,
  UnauthorizedException,
} from '@nestjs/common';

import { AppSession } from '@/src/modules/auth/types';
import { SwipePokemonDto } from '@/src/modules/pokemon/dto/pokemon.dto';
import { PokemonService } from '@/src/modules/pokemon/pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  @Post('swipe')
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

  @Get(':id')
  @HttpCode(200)
  async getPokemon(@Query() query, @Param() param) {
    const pokemonId = +param.id;

    console.log('pokemonId =>', pokemonId);

    const pokemon = await this.pokemonService.getPokemon(pokemonId);

    if (!pokemon) {
      return new NotFoundException();
    }

    return pokemon;
  }
}
