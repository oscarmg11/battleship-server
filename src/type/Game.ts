export type Game = {
    gameId: string
    roomId: string
    hostConnectionId?: string
    rivalConnectionId?: string
    createdAt: Date
    deleteAt?: Date
}
