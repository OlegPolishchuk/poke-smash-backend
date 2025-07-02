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
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

import { Pokemon, PokemonSpecies } from '@/src/api/pokemon/dto/pokemon';
import { AppSession } from '@/src/modules/auth/types';
import { SwipePokemonDto } from '@/src/modules/pokemon/dto/pokemon.dto';
import { PokemonService } from '@/src/modules/pokemon/pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  @Post('swipe')
  @HttpCode(201)
  @ApiOperation({ summary: 'Swipe Pokemon' }) // Описание операции
  @ApiBody({ type: SwipePokemonDto }) // Указание типа тела запроса
  @ApiResponse({ status: 201, description: 'Swipe recorded' }) // Успешный ответ
  @ApiResponse({ status: 401, description: 'Unauthorized' }) // Ошибка аутентификации
  async swipe(@Session() session: AppSession, @Body() pokemonDto: SwipePokemonDto) {
    const userId = session.user_id;
    const pokemonData = { pokemon_id: pokemonDto.pokemon_id, user_id: userId };

    console.log('pokemonData =>', pokemonData);

    if (!userId) {
      return new UnauthorizedException();
    }

    await new Promise((res) => {
      setTimeout(res, 2000);
    });

    if (pokemonDto.action === 'like') {
      return await this.pokemonService.like(pokemonData);
    }

    if (pokemonDto.action === 'dislike') {
      return await this.pokemonService.dislike(pokemonData);
    }
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get Pokemon by ID' })
  @ApiParam({ name: 'id', type: Number }) // Описание параметра пути
  @ApiResponse({
    status: 200,
    description: 'Pokemon data',
    type: Pokemon, // Указание типа возвращаемого значения
  })
  @ApiResponse({ status: 404, description: 'Pokemon not found' })
  async getPokemon(@Query() query, @Param() param) {
    const pokemonId = +param.id;

    console.log('pokemonId =>', pokemonId);

    const pokemon = await this.pokemonService.getPokemon(pokemonId);

    if (!pokemon) {
      return new NotFoundException();
    }

    return pokemon;
  }

  @Get('/species/:id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get Pokemon species by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Species ID' })
  @ApiResponse({
    status: 200,
    description: 'Pokemon species data',
    type: PokemonSpecies, // Тип для возврата
  })
  @ApiResponse({ status: 404, description: 'Species not found' })
  async getPokemonSpecies(@Param() param) {
    const pokemonId = +param.id;

    const pokemonSpecies = await this.pokemonService.getPokemonSpecies(pokemonId);

    if (!pokemonSpecies) {
      return new NotFoundException();
    }

    return pokemonSpecies;
  }
}
