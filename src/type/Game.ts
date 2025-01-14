export type Game = {
    gameId: string
    roomId: string
    hostPlayerId: string
    hostConnectionId?: string
    rivalConnectionId?: string
    createdAt: Date
    deleteAt?: Date
}
