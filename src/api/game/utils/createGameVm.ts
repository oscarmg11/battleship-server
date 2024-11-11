import { Game } from '@/type/Game'

export function createGameVm(game: Game): GameVm {
    return {
        gameId: game.gameId,
        roomId: game.roomId,
        createdAt: game.createdAt,
    }
}

export type GameVm = {
    gameId: string
    roomId: string
    createdAt: Date
}
