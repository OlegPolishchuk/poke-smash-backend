import { OnEvent } from '@nestjs/event-emitter';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { PokemonStats } from '@prisma/generated/prisma';
import { Server, Socket } from 'socket.io';

import { StatisticsService } from './statistics.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class PokemonGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  constructor(private readonly statisticsService: StatisticsService) {}

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  @SubscribeMessage('join-pokemon-room')
  async handleJoinPokemonRoom(@MessageBody() pokemonId: number, @ConnectedSocket() client: Socket) {
    const roomName = `pokemon-${pokemonId}`;
    client.join(roomName);

    // Отправляем только этому клиенту статистику по покемону
    const stat = await this.statisticsService.getStatisticByPokemonId(pokemonId);
    client.emit('pokemon-stat', stat);
  }

  // Публичная функция, вызывается из сервиса
  async emitStatisticUpdate(stat: PokemonStats) {
    const maxActionCount = await this.statisticsService.getMaxActionsCount();
    const room = `pokemon-${stat.pokemon_id}`;

    const statistics = {
      ...stat,
      max_action_count: maxActionCount,
    };

    this.server.to(room).emit('pokemon-stat', statistics);
  }

  @OnEvent('statistic.updated') // <-- вот здесь подписка
  handleStatisticUpdated(stat: PokemonStats) {
    this.emitStatisticUpdate(stat);
  }
}
