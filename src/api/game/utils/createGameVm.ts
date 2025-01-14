import { Game } from '@/type/Game'
import { GameStatus } from '@/constant/GameStatus.ts'

export function createGameVm(game: Game): GameVm {
    return {
        gameId: game.gameId,
        hostPlayerId: game.hostPlayerId,
        rivalPlayerId: game.rivalPlayerId,
        roomId: game.roomId,
        gameStatus: game.gameStatus,
        createdAt: game.createdAt,
    }
}

export type GameVm = {
    gameId: string
    hostPlayerId: string
    rivalPlayerId?: string
    roomId: string
    gameStatus: GameStatus
    createdAt: Date
}
