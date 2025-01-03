import { Game } from '@/type/Game'
import type { ObjectId } from 'mongodb'
import { MongoDocument } from '@/db/type/MongoDocument'

export function mapDocToGame(
    doc: (GameDoc & MongoDocument) | undefined | null,
): Game | undefined {
    if (!doc) return
    return {
        gameId: doc._id.toString(),
        roomId: doc.roomId,
        hostConnectionId: doc.hostConnectionId,
        rivalConnectionId: doc.rivalConnectionId,
        createdAt: doc.createdAt,
        deleteAt: doc.deleteAt,
    }
}

export type GameDoc = {
    roomId: string
    hostConnectionId?: string
    rivalConnectionId?: string
    createdAt: Date
    deleteAt?: Date
}
