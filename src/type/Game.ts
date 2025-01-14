export type Game = {
    gameId: string
    roomId: string
    hostPlayerId: string
    rivalPlayerId?: string
    hostConnectionId?: string
    rivalConnectionId?: string
    createdAt: Date
    deleteAt?: Date
}
