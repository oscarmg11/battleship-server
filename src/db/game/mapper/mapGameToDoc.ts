import { Game } from '@/type/Game'
import { GameDoc } from '@/db/game/mapper/mapDocToGame'

export function mapGameToDoc(game: Game | Omit<Game, 'gameId'>): GameDoc {
    return {
        roomId: game.roomId,
        hostConnectionId: game.hostConnectionId,
        createdAt: game.createdAt,
    }
}
