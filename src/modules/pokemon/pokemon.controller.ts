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
import { ApiBody, ApiOperation, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';

import { PaginatedListDto } from '@/src/api/pokemon/dto/paginate.dto';
import { Pokemon, PokemonSpecies, PokemonWithStats } from '@/src/api/pokemon/dto/pokemon';
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

  @Get('/list')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get Pokemon list' })
  @ApiQuery({ name: 'limit', type: Number, description: 'pokemon limit (count)', default: 10 })
  @ApiQuery({ name: 'offset', type: Number, description: 'offset (pagination)', default: 0 })
  @ApiResponse({
    status: 200,
    description: 'Pokemon list',
    type: PaginatedListDto<PokemonWithStats>, // Тип для возврата
  })
  @ApiResponse({ status: 404, description: 'evolutions not found' })
  async getPokemonList(
    @Query('limit') limit: number = 10,
    @Query('offset') offset: number = limit,
  ) {
    const list = await this.pokemonService.getPokemonList({ limit, offset });

    return list;
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get Pokemon by ID/Name' })
  @ApiParam({ name: 'id', type: Number || String }) // Описание параметра пути
  @ApiResponse({
    status: 200,
    description: 'Pokemon data',
    type: Pokemon, // Указание типа возвращаемого значения
  })
  @ApiResponse({ status: 404, description: 'Pokemon not found' })
  async getPokemon(@Query() query, @Param() param) {
    const pokemonId = param.id;

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
  async getPokemonSpecies(@Param() param: { id: number }) {
    const pokemonId = +param.id;

    const pokemonSpecies = await this.pokemonService.getPokemonSpecies(pokemonId);

    if (!pokemonSpecies) {
      return new NotFoundException();
    }

    return pokemonSpecies;
  }

  @Get('/statistic/:id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get Pokemon statistic(swipes) by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Pokemon ID' })
  @ApiResponse({
    status: 200,
    description: 'Pokemon statistic data',
    type: PokemonSpecies, // Тип для возврата
  })
  @ApiResponse({ status: 404, description: 'Species not found' })
  async getPokemonStatistic(@Param() param: { id: number }) {
    const pokemonId = +param.id;

    const stats = await this.pokemonService.getPokemonSwipeStatistic(pokemonId);

    if (!stats) {
      return new NotFoundException();
    }

    return stats;
  }

  @Get('/ability/:id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get Pokemon ability by ID/name' })
  @ApiParam({ name: 'id/name', type: Number, description: 'ability ID/name' })
  @ApiResponse({
    status: 200,
    description: 'Pokemon ability data',
    type: PokemonSpecies, // Тип для возврата
  })
  @ApiResponse({ status: 404, description: 'ability not found' })
  async getPokemonAbility(@Param() param: { id: number | string }) {
    const abilityId = param.id;

    const ability = await this.pokemonService.getPokemonAbility(abilityId);

    if (!ability) {
      return new NotFoundException();
    }

    return ability;
  }

  @Get('/weaknesses/:id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get Pokemon weaknesses by ID/name' })
  @ApiParam({ name: 'id/name', type: Number, description: 'weaknesses ID/name' })
  @ApiResponse({
    status: 200,
    description: 'Pokemon weaknesses data',
    type: PokemonSpecies, // Тип для возврата
  })
  @ApiResponse({ status: 404, description: 'weaknesses not found' })
  async getPokemonWeaknesses(@Param() param: { id: number | string }) {
    const pokemonID = param.id;

    const weaknesses = await this.pokemonService.getPokemonWeaknesses(pokemonID);

    return { weaknesses };
  }

  @Get('/evolutions/:id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get Pokemon evolutions by ID/name' })
  @ApiParam({ name: 'id/name', type: Number, description: 'evolutions ID/name' })
  @ApiResponse({
    status: 200,
    description: 'Pokemon evolutions data',
    type: PokemonSpecies, // Тип для возврата
  })
  @ApiResponse({ status: 404, description: 'evolutions not found' })
  async getPokemonEvolutions(@Param() param: { id: number | string }) {
    const pokemonID = param.id;

    console.log('pokemonID =>', pokemonID);

    const evolutions = await this.pokemonService.getPokemonEvolutions(pokemonID);

    return evolutions;
  }
}
