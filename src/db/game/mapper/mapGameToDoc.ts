import { Game } from '@/type/Game'
import { GameDoc } from '@/db/game/mapper/mapDocToGame'

export function mapGameToDoc(game: Game | Omit<Game, 'gameId'>): GameDoc {
    return {
        roomId: game.roomId,
        hostPlayerId: game.hostPlayerId,
        hostConnectionId: game.hostConnectionId,
        rivalPlayerId: game.rivalPlayerId,
        rivalConnectionId: game.rivalConnectionId,
        createdAt: game.createdAt,
        deleteAt: game.deleteAt,
    }
}
