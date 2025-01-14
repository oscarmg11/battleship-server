import { Game } from '@/type/Game'
import { MongoDocument } from '@/db/type/MongoDocument'

export function mapDocToGame(
    doc: (GameDoc & MongoDocument) | undefined | null,
): Game | undefined {
    if (!doc) return
    return {
        gameId: doc._id.toString(),
        roomId: doc.roomId,
        hostPlayerId: doc.hostPlayerId,
        hostConnectionId: doc.hostConnectionId,
        rivalConnectionId: doc.rivalConnectionId,
        createdAt: doc.createdAt,
        deleteAt: doc.deleteAt,
    }
}

export type GameDoc = {
    roomId: string
    hostPlayerId: string
    hostConnectionId?: string
    rivalConnectionId?: string
    createdAt: Date
    deleteAt?: Date
}
