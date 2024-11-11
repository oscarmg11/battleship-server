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
        createdAt: doc.createdAt,
    }
}

export type GameDoc = {
    roomId: string
    hostConnectionId?: string
    createdAt: Date
}
