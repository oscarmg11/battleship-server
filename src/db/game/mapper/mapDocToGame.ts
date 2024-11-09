import { Game } from '@/type/Game'

export function mapDocToGame(
    doc: GameDoc | undefined | null,
): Game | undefined {
    if (!doc) return
    return {
        gameId: doc._id,
        roomId: doc.roomId,
    }
}

export type GameDoc = {
    _id: string
    roomId: string
}
