import type { GameStatus } from '@/constant/GameStatus.ts'

export type Game = {
    gameId: string
    roomId: string
    hostPlayerId: string
    rivalPlayerId?: string
    hostConnectionId?: string
    rivalConnectionId?: string
    gameStatus: GameStatus
    createdAt: Date
    deleteAt?: Date
}
