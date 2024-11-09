import { Game } from '@/type/Game'
import { createDbConnection } from '../createDbConnection'
import { type GameDoc, mapDocToGame } from '@/db/game/mapper/mapDocToGame'

export async function findGameInDbByRoomId(
    roomId: string,
): Promise<Game | undefined> {
    const connection = await createDbConnection()
    const game = await connection
        .db('admin')
        .collection<GameDoc>('game')
        .findOne({ roomId })
    return mapDocToGame(game)
}
