import { Game } from '@/type/Game'

export function createGameVm(game: Game): GameVm {
    return {
        gameId: game.gameId,
        hostPlayerId: game.hostPlayerId,
        roomId: game.roomId,
        createdAt: game.createdAt,
    }
}

export type GameVm = {
    gameId: string
    hostPlayerId: string
    roomId: string
    createdAt: Date
}
