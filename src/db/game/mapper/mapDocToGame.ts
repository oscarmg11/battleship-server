import { Game } from '@/type/Game'
import { MongoDocument } from '@/db/type/MongoDocument'
import { GameStatus } from '@/constant/GameStatus.ts'

export function mapDocToGame(
    doc: (GameDoc & MongoDocument) | undefined | null,
): Game | undefined {
    if (!doc) return
    return {
        gameId: doc._id.toString(),
        roomId: doc.roomId,
        hostPlayerId: doc.hostPlayerId,
        rivalPlayerId: doc.rivalPlayerId,
        hostConnectionId: doc.hostConnectionId,
        rivalConnectionId: doc.rivalConnectionId,
        gameStatus: doc.gameStatus,
        createdAt: doc.createdAt,
        deleteAt: doc.deleteAt,
    }
}

export type GameDoc = {
    roomId: string
    hostPlayerId: string
    rivalPlayerId?: string
    hostConnectionId?: string
    rivalConnectionId?: string
    gameStatus: GameStatus
    createdAt: Date
    deleteAt?: Date
}
